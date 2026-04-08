import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy | Cornerstone PM",
  description:
    "Privacy Policy for Cornerstone PM construction management software.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500 mb-12">
            Effective Date: April 7, 2026 &middot; Last Updated: April 7, 2026
          </p>

          <div className="prose prose-invert prose-slate max-w-none space-y-8 text-slate-300 leading-relaxed [&_h2]:text-white [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-white [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3 [&_strong]:text-white [&_a]:text-cyan-400 [&_a]:underline">
            <p>
              Cornerstone Builder Software LLC (&ldquo;Cornerstone,&rdquo;
              &ldquo;we,&rdquo; &ldquo;us&rdquo;) operates the Cornerstone PM
              platform. This Privacy Policy describes how we collect, use, and
              protect your information.
            </p>

            <h2>1. Information We Collect</h2>
            <h3>Account Information</h3>
            <p>
              When you create an account, we collect your name, email address,
              phone number, company name, and role. Vendor accounts additionally
              include business address, insurance details, and W-9 information.
            </p>
            <h3>Usage Data</h3>
            <p>
              We collect standard web analytics data including pages visited,
              features used, browser type, and IP address. This helps us
              improve the platform.
            </p>
            <h3>Content You Upload</h3>
            <p>
              We store files, photos, documents, and messages you upload to the
              Platform. Images may be automatically compressed for storage
              efficiency.
            </p>
            <h3>AI Interactions</h3>
            <p>
              When you use the in-app AI chatbot, we send your messages to our
              AI provider (OpenAI) for processing. We do not use your AI
              conversations to train AI models.
            </p>

            <h2>2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To provide and operate the Cornerstone PM platform</li>
              <li>To send transactional emails (task notifications, vendor invites, scheduling alerts)</li>
              <li>To provide AI chatbot assistance</li>
              <li>To improve the platform based on usage patterns</li>
              <li>To communicate about your account, billing, or service updates</li>
            </ul>
            <p>
              <strong>We do not:</strong> sell your data, use your data for
              advertising, share your data with third parties for marketing
              purposes, or use your content to train AI models.
            </p>

            <h2>3. Data Storage &amp; Security</h2>
            <p>Your data is stored on:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Vercel</strong> — application hosting &amp; edge network (SOC 2 Type II)</li>
              <li><strong>Neon</strong> — PostgreSQL database with encryption at rest (SOC 2 Type II)</li>
              <li><strong>Vercel Blob Storage</strong> — file storage with encryption at rest</li>
            </ul>
            <p>
              All data is transmitted over HTTPS/TLS. Database connections use
              SSL. We use industry-standard security practices including
              hashed passwords, role-based access controls, and session
              management.
            </p>

            <h2>4. Data Sharing</h2>
            <p>We share data only with:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Infrastructure providers</strong> (Vercel, Neon) — to host and operate the platform</li>
              <li><strong>AI provider</strong> (OpenAI) — to power the in-app chatbot</li>
              <li><strong>Email service</strong> — to send transactional notifications</li>
            </ul>
            <p>
              We do not share your data with any other third parties. All
              providers are bound by their own privacy policies and data
              processing agreements.
            </p>

            <h2>5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Access</strong> — request a copy of all data we store about you</li>
              <li><strong>Correction</strong> — update inaccurate information via your profile settings</li>
              <li><strong>Deletion</strong> — request deletion of your account and associated data</li>
              <li><strong>Export</strong> — download your data in a standard format</li>
              <li><strong>Portability</strong> — take your data to another platform</li>
            </ul>
            <p>
              To exercise these rights, contact us at{" "}
              <a href="mailto:privacy@cornerstonepm.ai">
                privacy@cornerstonepm.ai
              </a>.
            </p>

            <h2>6. Data Retention</h2>
            <p>
              We retain your data for as long as your account is active. Upon
              account deletion, we permanently remove your data within 30 days.
              Backups containing your data are purged within 90 days.
            </p>

            <h2>7. Cookies</h2>
            <p>
              We use essential cookies for authentication and session
              management. We do not use tracking cookies or third-party
              advertising cookies. No cookie banner is needed because we only
              use strictly necessary cookies.
            </p>

            <h2>8. Children&rsquo;s Privacy</h2>
            <p>
              Cornerstone PM is a business tool not directed at children under
              13. We do not knowingly collect data from children.
            </p>

            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Material
              changes will be communicated via email or in-app notification at
              least 30 days in advance.
            </p>

            <h2>10. Contact</h2>
            <p>
              Questions about privacy? Contact us at{" "}
              <a href="mailto:privacy@cornerstonepm.ai">
                privacy@cornerstonepm.ai
              </a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
