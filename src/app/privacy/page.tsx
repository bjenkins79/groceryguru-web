import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Privacy Policy – GroceryGuru",
  description: "How GroceryGuru collects, uses, and protects your data.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-16 text-[var(--color-primary)]">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-4"><strong>Effective Date:</strong> February 23, 2026</p>

        <p className="mb-6">
          GroceryGuru ("we," "our," or "us") provides a mobile application ("the App") to help users manage grocery lists,
          share access with others, and receive smart recommendations. We are committed to protecting your privacy and
          ensuring transparency about how we collect, use, and store your information.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">1. Who We Are</h2>
        <p>
          GroceryGuru is operated by Ben Jenkins. For privacy-related questions, contact us at{" "}
          <a href="mailto:support@getgroceryguru.com?subject=Privacy%20Question" className="underline text-[var(--color-primary)]">
            support@getgroceryguru.com
          </a>.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">2. Information We Collect</h2>
        <p>We collect the following types of information to provide and improve our services:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>Account Information:</strong> When you sign up, we collect your name, email address, country, timezone, and related account details.</li>
          <li><strong>Grocery Data:</strong> Lists, items, stores, and categories you create within the app.</li>
          <li><strong>Invite & Multi-User Data:</strong> If you invite others to your account, we store metadata related to the invite (e.g., invited user email, invite status).</li>
          <li><strong>Usage and Pattern Data:</strong> We store information about your interactions with the app, including how often you buy certain products, preferred stores, and shopping patterns to provide personalized grocery suggestions.</li>
          <li><strong>Device Information:</strong> We collect non-identifiable technical data, such as device type, iOS version, and app version for performance monitoring.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-4">3. Legal Basis for Processing</h2>
        <p>We process your data under the following legal bases (GDPR Article 6):</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>Contract (Article 6(1)(b)):</strong> Processing necessary to provide the service you signed up for — managing your grocery lists, sharing with others, and delivering recommendations.</li>
          <li><strong>Legitimate Interest (Article 6(1)(f)):</strong> Processing for anonymized analytics to improve app performance and user experience. Your interests are protected as we do not collect personal identifiers in analytics events.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-4">4. How We Use Your Information</h2>
        <p>We use your information for the following purposes:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>To provide the app’s core features (list management, sharing, recommendations).</li>
          <li>To monitor app performance and fix bugs.</li>
          <li>To analyze anonymized usage trends and improve the user experience.</li>
          <li>To support account and subscription management through Apple’s in-app purchase system.</li>
        </ul>
        <p className="mt-2">
          We <strong>do not</strong> sell or share your data with third-party advertisers or marketing partners.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">5. Data Processors and Storage</h2>
        <p>We use the following third-party services to process your data:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>Supabase</strong> (United States) — Database hosting and authentication. Data Processing Agreement in place.</li>
          <li><strong>PostHog</strong> (United States) — Anonymized usage analytics. Data Processing Agreement in place.</li>
          <li><strong>Resend</strong> (United States) — Transactional emails (invitations, password resets). Receives only email addresses necessary for delivery.</li>
          <li><strong>Apple</strong> — Subscription payments via App Store. Apple processes payment data directly.</li>
        </ul>
        <p className="mt-2">
          Data transfers to the United States are protected by Standard Contractual Clauses (SCCs) as required by GDPR.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">6. How Long We Keep Your Data</h2>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>Account and grocery data:</strong> Retained until you delete your account.</li>
          <li><strong>Analytics data:</strong> Retained for 12 months on a rolling basis.</li>
          <li><strong>Transactional emails:</strong> Email delivery logs retained by Resend for 30 days.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-4">7. Your Rights</h2>
        <p>Under GDPR, you have the following rights:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>Access:</strong> Request a copy of your data. Use the "Export My Data" feature in the app (Settings → Privacy).</li>
          <li><strong>Rectification:</strong> Correct your data directly in the app by editing your profile, lists, or items.</li>
          <li><strong>Erasure:</strong> Delete your account and all associated data (Settings → Delete Account). Deletion is immediate and permanent.</li>
          <li><strong>Portability:</strong> Download your data in JSON format using the "Export My Data" feature.</li>
          <li><strong>Object:</strong> Object to processing based on legitimate interest by contacting us.</li>
          <li><strong>Withdraw Consent:</strong> Where processing is based on consent, withdraw at any time by deleting your account.</li>
        </ul>
        <p className="mt-2">
          To exercise any of these rights, use the in-app features or contact us at{" "}
          <a href="mailto:support@getgroceryguru.com?subject=Data%20Rights%20Request" className="underline text-[var(--color-primary)]">
            support@getgroceryguru.com
          </a>. We will respond within 30 days.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">8. Supervisory Authority</h2>
        <p>
          If you are located in the European Union and believe we have not adequately addressed your privacy concerns,
          you have the right to lodge a complaint with your local supervisory authority. For users accessing the App
          through the EU App Store, the relevant authority is:
        </p>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="font-semibold">Data Protection Commission (Ireland)</p>
          <p>6 Pembroke Row</p>
          <p>Dublin 2, D02 X963</p>
          <p>Ireland</p>
          <p className="mt-2">Phone: +353 1 765 01 00</p>
          <p>
            Online:{" "}
            <a href="https://forms.dataprotection.ie/contact" className="underline text-[var(--color-primary)]" target="_blank" rel="noopener noreferrer">
              forms.dataprotection.ie/contact
            </a>
          </p>
        </div>

        <h2 className="text-xl font-semibold mt-10 mb-4">9. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify users of material changes via app updates or
          in-app notifications. The effective date at the top of this policy reflects the latest version.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">10. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or our data practices, please contact us at{" "}
          <a href="mailto:support@getgroceryguru.com?subject=Privacy%20Question" className="underline text-[var(--color-primary)]">
            support@getgroceryguru.com
          </a>.
        </p>
      </main>
      <Footer />
    </>
  )
}
