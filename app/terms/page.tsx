import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Terms of Service | Cornerstone PM",
  description:
    "Terms of Service for Cornerstone PM construction management software.",
};

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white mb-2">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-500 mb-12">
            Effective Date: April 7, 2026 &middot; Last Updated: April 7, 2026
          </p>

          <div className="prose prose-invert prose-slate max-w-none space-y-8 text-slate-300 leading-relaxed [&_h2]:text-white [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-white [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3 [&_strong]:text-white [&_a]:text-cyan-400 [&_a]:underline">
            <p>
              Welcome to Cornerstone PM (&ldquo;Cornerstone,&rdquo;
              &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;),
              operated by Cornerstone Builder Software LLC. By accessing or
              using our platform at{" "}
              <a href="https://app.cornerstonepm.ai">app.cornerstonepm.ai</a>,
              you agree to be bound by these Terms of Service
              (&ldquo;Terms&rdquo;). If you do not agree, do not use the
              platform.
            </p>

            <h2>1. Definitions</h2>
            <p>
              <strong>&ldquo;Platform&rdquo;</strong> means the Cornerstone PM
              web application, APIs, and related services.
              <br />
              <strong>&ldquo;Organization&rdquo;</strong> means the company,
              business, or entity that creates an account.
              <br />
              <strong>&ldquo;User&rdquo;</strong> means any individual
              authorized by an Organization to access the Platform.
              <br />
              <strong>&ldquo;Content&rdquo;</strong> means data, files,
              documents, images, messages, and other materials uploaded to or
              created within the Platform.
            </p>

            <h2>2. Account &amp; Access</h2>
            <p>
              You must provide accurate information when creating an account.
              Each Organization designates at least one Admin who manages users,
              roles, and settings. You are responsible for maintaining the
              confidentiality of your login credentials and for all activity
              under your account.
            </p>

            <h2>3. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Use the Platform for any unlawful purpose or in violation of any
                applicable law
              </li>
              <li>
                Attempt to reverse-engineer, decompile, or disassemble any part
                of the Platform
              </li>
              <li>
                Interfere with or disrupt the Platform&rsquo;s infrastructure
              </li>
              <li>Upload malicious code, viruses, or harmful content</li>
              <li>
                Scrape, crawl, or harvest data from the Platform without
                authorization
              </li>
              <li>
                Share login credentials or allow unauthorized access to your
                account
              </li>
              <li>
                Use the AI assistant to generate content that violates laws or
                third-party rights
              </li>
            </ul>

            <h2>4. Service Limits &amp; Fair Use</h2>
            <p>
              All plans are subject to the following per-organization limits.
              These limits apply equally across all tiers unless otherwise
              stated. See our{" "}
              <a href="/service-limits">Service Limits</a> page for the full
              breakdown.
            </p>

            <h3>Storage</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Construction module:</strong> 150 GB per organization
                (task photos, documents, message attachments, avatars, logos)
              </li>
              <li>
                <strong>Purchasing module:</strong> 200 GB per organization (bid
                documents, floorplan documents, design package images, parts
                catalog files)
              </li>
              <li>
                <strong>Single file maximum:</strong> 50 MB per file
                (pre-compression)
              </li>
            </ul>

            <h3>AI Assistant</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                The in-app AI chatbot is provided as-is and may have usage
                limits adjusted based on demand
              </li>
              <li>
                AI-generated responses are informational and should not be
                relied upon as legal, financial, or engineering advice
              </li>
            </ul>

            <h3>Records</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>500,000 total records</strong> per organization across
                all entity types (homes, vendors, budget lines, takeoffs, bids,
                purchase orders, parts catalog entries, options, etc.)
              </li>
            </ul>

            <h3>Rate Limiting</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Write operations are limited to <strong>1,000 requests per
                minute</strong> per organization to protect platform stability
              </li>
            </ul>

            <h3>General</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                We reserve the right to throttle or suspend access if usage
                patterns indicate abuse, automated scraping, or activity that
                degrades service for other users
              </li>
              <li>
                We will provide reasonable notice before enforcing new limits on
                existing accounts
              </li>
            </ul>

            <h2>5. Your Content</h2>
            <p>
              You retain all rights to Content you upload. By using the
              Platform, you grant us a limited license to store, process, and
              display your Content solely to provide the service. We do not
              sell, share, or use your Content for advertising.
            </p>
            <p>
              Images uploaded to the Platform may be automatically compressed
              for storage efficiency. Original quality is preserved at high
              fidelity (WebP, quality 85, max 2400px).
            </p>

            <h2>6. Data &amp; Privacy</h2>
            <p>
              Your data is stored on secure, encrypted infrastructure (Vercel,
              Neon Postgres, Vercel Blob Storage). We take reasonable measures
              to protect your data. See our{" "}
              <a href="/privacy">Privacy Policy</a> for details on data
              collection and handling.
            </p>

            <h2>7. Billing &amp; Cancellation</h2>
            <p>
              Subscriptions are billed monthly. You may cancel at any time;
              access continues through the end of your billing period. We do
              not offer refunds for partial months. Pricing is subject to
              change with 30 days&rsquo; notice.
            </p>

            <h2>8. Service Availability</h2>
            <p>
              We strive for high availability but do not guarantee 100% uptime.
              Scheduled maintenance will be communicated in advance when
              possible. We are not liable for downtime caused by third-party
              providers, force majeure events, or factors outside our
              reasonable control.
            </p>

            <h2>9. Intellectual Property</h2>
            <p>
              Cornerstone PM, its design, features, and underlying technology
              are owned by Cornerstone Builder Software LLC. You may not copy,
              modify, or create derivative works of our Platform without
              written permission.
            </p>

            <h2>10. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Cornerstone Builder
              Software LLC shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages arising from your use
              of the Platform. Our total liability shall not exceed the amount
              you paid us in the 12 months preceding the claim.
            </p>

            <h2>11. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Cornerstone Builder
              Software LLC from any claims, damages, or expenses arising from
              your use of the Platform or violation of these Terms.
            </p>

            <h2>12. Termination</h2>
            <p>
              We may suspend or terminate your account for violation of these
              Terms or non-payment. Upon termination, you may request an export
              of your data within 30 days. After 30 days, data may be
              permanently deleted.
            </p>

            <h2>13. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Material changes
              will be communicated via email or in-app notification at least 30
              days in advance. Continued use after changes take effect
              constitutes acceptance.
            </p>

            <h2>14. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of Florida,
              United States, without regard to conflict of law principles.
            </p>

            <h2>15. Contact</h2>
            <p>
              Questions about these Terms? Contact us at{" "}
              <a href="mailto:legal@cornerstonepm.ai">
                legal@cornerstonepm.ai
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
