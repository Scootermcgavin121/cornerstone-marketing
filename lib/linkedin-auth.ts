/**
 * LinkedIn OAuth 2.0 Authorization Helper
 *
 * Run this once to get initial access & refresh tokens:
 *   npx ts-node lib/linkedin-auth.ts
 *
 * Prerequisites:
 *   Set LINKEDIN_CLIENT_ID and LINKEDIN_CLIENT_SECRET as environment variables,
 *   or create .env.linkedin with those values.
 *
 * This starts a local HTTP server on port 3000, opens the LinkedIn auth URL,
 * and exchanges the authorization code for tokens.
 */

import * as http from 'http';
import * as https from 'https';
import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';

const PORT = 3000;
const REDIRECT_URI = `http://localhost:${PORT}/api/linkedin/callback`;
const SCOPES = ['openid', 'profile', 'w_organization_social', 'r_organization_social'];

const ENV_PATH = path.join(
  __dirname, '..', '..', '..', '.openclaw', 'agents', 'opus-researcher', '.env.linkedin',
);

// Load client credentials
function getCredentials(): { clientId: string; clientSecret: string } {
  if (process.env.LINKEDIN_CLIENT_ID && process.env.LINKEDIN_CLIENT_SECRET) {
    return {
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    };
  }

  if (fs.existsSync(ENV_PATH)) {
    const lines = fs.readFileSync(ENV_PATH, 'utf-8').split('\n');
    const env: Record<string, string> = {};
    for (const line of lines) {
      const m = line.match(/^([A-Z_]+)=(.+)$/);
      if (m) env[m[1]] = m[2].trim();
    }
    if (env.LINKEDIN_CLIENT_ID && env.LINKEDIN_CLIENT_SECRET) {
      return { clientId: env.LINKEDIN_CLIENT_ID, clientSecret: env.LINKEDIN_CLIENT_SECRET };
    }
  }

  console.error('Set LINKEDIN_CLIENT_ID and LINKEDIN_CLIENT_SECRET before running this script.');
  process.exit(1);
}

function exchangeCode(
  code: string,
  clientId: string,
  clientSecret: string,
): Promise<any> {
  const params = new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    redirect_uri: REDIRECT_URI,
    client_id: clientId,
    client_secret: clientSecret,
  });

  const postData = params.toString();

  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: 'www.linkedin.com',
        path: '/oauth/v2/accessToken',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(postData),
        },
      },
      (res) => {
        let data = '';
        res.on('data', (chunk: Buffer) => (data += chunk.toString()));
        res.on('end', () => {
          try { resolve(JSON.parse(data)); }
          catch { reject(new Error(`Invalid response: ${data}`)); }
        });
      },
    );
    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

(async () => {
  const { clientId, clientSecret } = getCredentials();

  const state = Math.random().toString(36).substring(2, 15);
  const authUrl =
    `https://www.linkedin.com/oauth/v2/authorization?` +
    `response_type=code&client_id=${clientId}` +
    `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
    `&state=${state}` +
    `&scope=${encodeURIComponent(SCOPES.join(' '))}`;

  console.log('\n=== LinkedIn OAuth Setup ===\n');
  console.log('1. Open this URL in your browser:\n');
  console.log(authUrl);
  console.log('\n2. Log in with a LinkedIn account that is an ADMIN of the Cornerstone Builder Software page.');
  console.log('3. Authorize the app. You\'ll be redirected back here.\n');
  console.log(`Waiting for callback on http://localhost:${PORT}...\n`);

  const server = http.createServer(async (req, res) => {
    const parsed = url.parse(req.url || '', true);

    if (parsed.pathname === '/api/linkedin/callback') {
      const code = parsed.query.code as string;
      const returnedState = parsed.query.state as string;

      if (returnedState !== state) {
        res.writeHead(400, { 'Content-Type': 'text/html' });
        res.end('<h1>State mismatch — possible CSRF. Try again.</h1>');
        return;
      }

      if (!code) {
        const error = parsed.query.error_description || parsed.query.error || 'Unknown error';
        res.writeHead(400, { 'Content-Type': 'text/html' });
        res.end(`<h1>Authorization failed: ${error}</h1>`);
        return;
      }

      try {
        console.log('Exchanging authorization code for tokens...');
        const tokenData = await exchangeCode(code, clientId, clientSecret);

        if (tokenData.error) {
          res.writeHead(400, { 'Content-Type': 'text/html' });
          res.end(`<h1>Token exchange failed: ${tokenData.error_description || tokenData.error}</h1>`);
          return;
        }

        const now = Math.floor(Date.now() / 1000);
        const config = [
          `LINKEDIN_CLIENT_ID=${clientId}`,
          `LINKEDIN_CLIENT_SECRET=${clientSecret}`,
          `LINKEDIN_ACCESS_TOKEN=${tokenData.access_token}`,
          `LINKEDIN_REFRESH_TOKEN=${tokenData.refresh_token || ''}`,
          `LINKEDIN_TOKEN_EXPIRES_AT=${now + (tokenData.expires_in || 5184000)}`,
        ].join('\n') + '\n';

        // Ensure directory exists
        const dir = path.dirname(ENV_PATH);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(ENV_PATH, config, 'utf-8');

        console.log(`\n✅ Tokens saved to ${ENV_PATH}`);
        console.log(`   Access token expires in ${tokenData.expires_in || 5184000} seconds`);

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
          <html><body style="font-family:sans-serif;text-align:center;padding:60px">
            <h1>✅ LinkedIn Connected!</h1>
            <p>Tokens saved. You can close this window.</p>
          </body></html>
        `);

        // Shut down after a moment
        setTimeout(() => { server.close(); process.exit(0); }, 1000);
      } catch (err: any) {
        console.error('Token exchange error:', err.message);
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end(`<h1>Error: ${err.message}</h1>`);
      }
    } else {
      res.writeHead(404);
      res.end('Not found');
    }
  });

  server.listen(PORT);
})();
