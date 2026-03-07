/**
 * LinkedIn API Integration for Cornerstone Builder Software
 * Posts to company page: urn:li:organization:111953363
 *
 * Usage:
 *   import { postText, postWithImage, refreshTokenIfNeeded } from './linkedin';
 *
 * Requires .env.linkedin with:
 *   LINKEDIN_CLIENT_ID, LINKEDIN_CLIENT_SECRET,
 *   LINKEDIN_ACCESS_TOKEN, LINKEDIN_REFRESH_TOKEN, LINKEDIN_TOKEN_EXPIRES_AT
 */

import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';

// --------------- Config ---------------

const ORGANIZATION_URN = 'urn:li:organization:111953363';
const API_VERSION = '202602'; // Update to latest YYYYMM as needed
const API_BASE = 'https://api.linkedin.com';

// Load credentials from .env.linkedin file
const ENV_PATH = process.env.LINKEDIN_ENV_PATH
  || path.join(__dirname, '..', '..', '..', '.openclaw', 'agents', 'opus-researcher', '.env.linkedin');

interface LinkedInConfig {
  clientId: string;
  clientSecret: string;
  accessToken: string;
  refreshToken: string;
  tokenExpiresAt: number;
}

function loadConfig(): LinkedInConfig {
  // Try environment variables first, then file
  if (process.env.LINKEDIN_ACCESS_TOKEN) {
    return {
      clientId: process.env.LINKEDIN_CLIENT_ID || '',
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET || '',
      accessToken: process.env.LINKEDIN_ACCESS_TOKEN || '',
      refreshToken: process.env.LINKEDIN_REFRESH_TOKEN || '',
      tokenExpiresAt: parseInt(process.env.LINKEDIN_TOKEN_EXPIRES_AT || '0', 10),
    };
  }

  if (!fs.existsSync(ENV_PATH)) {
    throw new Error(`LinkedIn credentials not found. Create ${ENV_PATH} or set environment variables.`);
  }

  const lines = fs.readFileSync(ENV_PATH, 'utf-8').split('\n');
  const env: Record<string, string> = {};
  for (const line of lines) {
    const match = line.match(/^([A-Z_]+)=(.+)$/);
    if (match) env[match[1]] = match[2].trim();
  }

  return {
    clientId: env.LINKEDIN_CLIENT_ID || '',
    clientSecret: env.LINKEDIN_CLIENT_SECRET || '',
    accessToken: env.LINKEDIN_ACCESS_TOKEN || '',
    refreshToken: env.LINKEDIN_REFRESH_TOKEN || '',
    tokenExpiresAt: parseInt(env.LINKEDIN_TOKEN_EXPIRES_AT || '0', 10),
  };
}

function saveConfig(config: LinkedInConfig): void {
  const content = [
    `LINKEDIN_CLIENT_ID=${config.clientId}`,
    `LINKEDIN_CLIENT_SECRET=${config.clientSecret}`,
    `LINKEDIN_ACCESS_TOKEN=${config.accessToken}`,
    `LINKEDIN_REFRESH_TOKEN=${config.refreshToken}`,
    `LINKEDIN_TOKEN_EXPIRES_AT=${config.tokenExpiresAt}`,
  ].join('\n') + '\n';
  fs.writeFileSync(ENV_PATH, content, 'utf-8');
}

// --------------- HTTP Helper ---------------

interface ApiResponse {
  status: number;
  headers: Record<string, string>;
  body: string;
}

function apiRequest(
  method: string,
  urlPath: string,
  body?: any,
  extraHeaders?: Record<string, string>,
): Promise<ApiResponse> {
  return new Promise((resolve, reject) => {
    const url = urlPath.startsWith('http') ? urlPath : `${API_BASE}${urlPath}`;
    const parsed = new URL(url);
    const config = loadConfig();

    const headers: Record<string, string> = {
      Authorization: `Bearer ${config.accessToken}`,
      'Linkedin-Version': API_VERSION,
      'X-Restli-Protocol-Version': '2.0.0',
      ...extraHeaders,
    };

    if (body && typeof body === 'object') {
      headers['Content-Type'] = 'application/json';
    }

    const payload = body && typeof body === 'object' ? JSON.stringify(body) : body;
    if (payload) {
      headers['Content-Length'] = Buffer.byteLength(payload).toString();
    }

    const req = https.request(
      {
        hostname: parsed.hostname,
        path: parsed.pathname + parsed.search,
        method,
        headers,
      },
      (res) => {
        let data = '';
        res.on('data', (chunk: Buffer) => (data += chunk.toString()));
        res.on('end', () =>
          resolve({
            status: res.statusCode || 0,
            headers: res.headers as Record<string, string>,
            body: data,
          }),
        );
      },
    );

    req.on('error', reject);
    if (payload) req.write(payload);
    req.end();
  });
}

// --------------- Token Management ---------------

/**
 * Refresh the access token if it's expired or about to expire (within 1 hour).
 * Returns true if token was refreshed.
 */
export async function refreshTokenIfNeeded(): Promise<boolean> {
  const config = loadConfig();
  const now = Math.floor(Date.now() / 1000);

  // Refresh if expiring within 1 hour
  if (config.tokenExpiresAt > now + 3600) {
    return false;
  }

  if (!config.refreshToken) {
    throw new Error('Access token expired and no refresh token available. Re-authenticate.');
  }

  console.log('[LinkedIn] Refreshing access token...');

  const params = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: config.refreshToken,
    client_id: config.clientId,
    client_secret: config.clientSecret,
  });

  const res = await apiRequest(
    'POST',
    'https://www.linkedin.com/oauth/v2/accessToken',
    params.toString(),
    {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: '', // Override — no bearer token for token endpoint
    },
  );

  if (res.status !== 200) {
    throw new Error(`Token refresh failed (${res.status}): ${res.body}`);
  }

  const data = JSON.parse(res.body);
  config.accessToken = data.access_token;
  config.tokenExpiresAt = now + (data.expires_in || 5184000); // Default ~60 days
  if (data.refresh_token) {
    config.refreshToken = data.refresh_token;
  }

  saveConfig(config);
  console.log('[LinkedIn] Token refreshed successfully.');
  return true;
}

// --------------- Posting Functions ---------------

export interface PostResult {
  success: boolean;
  postUrn?: string;
  error?: string;
  status: number;
}

/**
 * Post a text-only update to the Cornerstone company page.
 */
export async function postText(text: string): Promise<PostResult> {
  await refreshTokenIfNeeded();

  const payload = {
    author: ORGANIZATION_URN,
    commentary: text,
    visibility: 'PUBLIC',
    distribution: {
      feedDistribution: 'MAIN_FEED',
      targetEntities: [],
      thirdPartyDistributionChannels: [],
    },
    lifecycleState: 'PUBLISHED',
    isReshareDisabledByAuthor: false,
  };

  const res = await apiRequest('POST', '/rest/posts', payload);

  if (res.status === 201) {
    const postUrn = res.headers['x-restli-id'] || '';
    console.log(`[LinkedIn] Post created: ${postUrn}`);
    return { success: true, postUrn, status: res.status };
  }

  return { success: false, error: res.body, status: res.status };
}

/**
 * Post with an article link (with custom thumbnail, title, description).
 */
export async function postArticle(
  text: string,
  articleUrl: string,
  title: string,
  description?: string,
  thumbnailUrn?: string,
): Promise<PostResult> {
  await refreshTokenIfNeeded();

  const article: any = {
    source: articleUrl,
    title,
  };
  if (description) article.description = description;
  if (thumbnailUrn) article.thumbnail = thumbnailUrn;

  const payload = {
    author: ORGANIZATION_URN,
    commentary: text,
    visibility: 'PUBLIC',
    distribution: {
      feedDistribution: 'MAIN_FEED',
      targetEntities: [],
      thirdPartyDistributionChannels: [],
    },
    content: { article },
    lifecycleState: 'PUBLISHED',
    isReshareDisabledByAuthor: false,
  };

  const res = await apiRequest('POST', '/rest/posts', payload);

  if (res.status === 201) {
    const postUrn = res.headers['x-restli-id'] || '';
    return { success: true, postUrn, status: res.status };
  }
  return { success: false, error: res.body, status: res.status };
}

// --------------- Image Upload ---------------

/**
 * Upload an image to LinkedIn and return the image URN.
 * Two-step process: initialize upload, then PUT the binary data.
 */
export async function uploadImage(imagePath: string): Promise<string> {
  await refreshTokenIfNeeded();

  // Step 1: Initialize upload
  const initPayload = {
    initializeUploadRequest: {
      owner: ORGANIZATION_URN,
    },
  };

  const initRes = await apiRequest('POST', '/rest/images?action=initializeUpload', initPayload);

  if (initRes.status !== 200) {
    throw new Error(`Image upload init failed (${initRes.status}): ${initRes.body}`);
  }

  const initData = JSON.parse(initRes.body);
  const uploadUrl = initData.value.uploadUrl;
  const imageUrn = initData.value.image;

  // Step 2: Upload binary
  const imageBuffer = fs.readFileSync(imagePath);
  const mimeType = imagePath.toLowerCase().endsWith('.png') ? 'image/png' : 'image/jpeg';

  const uploadRes = await apiRequest('PUT', uploadUrl, imageBuffer, {
    'Content-Type': mimeType,
    'Content-Length': imageBuffer.length.toString(),
    Authorization: `Bearer ${loadConfig().accessToken}`,
  });

  if (uploadRes.status < 200 || uploadRes.status >= 300) {
    throw new Error(`Image upload failed (${uploadRes.status}): ${uploadRes.body}`);
  }

  console.log(`[LinkedIn] Image uploaded: ${imageUrn}`);
  return imageUrn;
}

/**
 * Post with an image to the Cornerstone company page.
 */
export async function postWithImage(
  text: string,
  imagePath: string,
  imageAltText?: string,
): Promise<PostResult> {
  const imageUrn = await uploadImage(imagePath);

  const content: any = {
    media: {
      id: imageUrn,
    },
  };
  if (imageAltText) {
    content.media.altText = imageAltText;
  }

  const payload = {
    author: ORGANIZATION_URN,
    commentary: text,
    visibility: 'PUBLIC',
    distribution: {
      feedDistribution: 'MAIN_FEED',
      targetEntities: [],
      thirdPartyDistributionChannels: [],
    },
    content,
    lifecycleState: 'PUBLISHED',
    isReshareDisabledByAuthor: false,
  };

  const res = await apiRequest('POST', '/rest/posts', payload);

  if (res.status === 201) {
    const postUrn = res.headers['x-restli-id'] || '';
    console.log(`[LinkedIn] Image post created: ${postUrn}`);
    return { success: true, postUrn, status: res.status };
  }
  return { success: false, error: res.body, status: res.status };
}

// --------------- Delete Post ---------------

export async function deletePost(postUrn: string): Promise<boolean> {
  await refreshTokenIfNeeded();
  const encoded = encodeURIComponent(postUrn);
  const res = await apiRequest('DELETE', `/rest/posts/${encoded}`);
  return res.status === 204;
}

// --------------- CLI ---------------

if (require.main === module) {
  const args = process.argv.slice(2);
  const command = args[0];

  (async () => {
    try {
      switch (command) {
        case 'text': {
          const text = args.slice(1).join(' ');
          if (!text) { console.error('Usage: linkedin text <message>'); process.exit(1); }
          const result = await postText(text);
          console.log(JSON.stringify(result, null, 2));
          break;
        }
        case 'image': {
          const imgPath = args[1];
          const text = args.slice(2).join(' ');
          if (!imgPath || !text) { console.error('Usage: linkedin image <path> <message>'); process.exit(1); }
          const result = await postWithImage(text, imgPath);
          console.log(JSON.stringify(result, null, 2));
          break;
        }
        case 'article': {
          const url = args[1];
          const title = args[2];
          const text = args.slice(3).join(' ');
          if (!url || !title || !text) {
            console.error('Usage: linkedin article <url> <title> <message>');
            process.exit(1);
          }
          const result = await postArticle(text, url, title);
          console.log(JSON.stringify(result, null, 2));
          break;
        }
        default:
          console.log('LinkedIn CLI for Cornerstone Builder Software');
          console.log('Commands:');
          console.log('  text <message>              Post text update');
          console.log('  image <path> <message>      Post with image');
          console.log('  article <url> <title> <msg> Post article link');
      }
    } catch (err: any) {
      console.error('Error:', err.message);
      process.exit(1);
    }
  })();
}
