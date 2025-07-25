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

        <p className="mb-4"><strong>Effective Date:</strong> July 25, 2025</p>

        <p className="mb-6">
          GroceryGuru (“we,” “our,” or “us”) provides a mobile application (“the App”) to help users manage grocery lists,
          share access with others, and receive smart recommendations. We are committed to protecting your privacy and
          ensuring transparency about how we collect, use, and store your information.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">1. Information We Collect</h2>
        <p>We collect the following types of information to provide and improve our services:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>Account Information:</strong> When you sign up, we collect your name, email address, and related account details.</li>
          <li><strong>Invite & Multi-User Data:</strong> If you invite others to your account, we store metadata related to the invite (e.g., invited user email, invite status).</li>
          <li><strong>Usage and Pattern Data:</strong> We store information about your interactions with the app, including items you create, how often you buy certain products, preferred stores, and other account-specific behaviors. This includes analyzing shopping patterns to help us surface timely, personalized grocery suggestions.</li>
          <li><strong>Device Information:</strong> We may collect non-identifiable technical data, such as device type and iOS version, for app performance monitoring.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-4">2. How We Use Your Information</h2>
        <p>We use your information for the following purposes:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>To provide the app’s core features (list management, sharing, recommendations).</li>
          <li>To monitor app performance and fix bugs.</li>
          <li>To analyze usage trends and improve the user experience.</li>
          <li>To support account and subscription management, including trial and paid subscriptions handled through Apple’s in-app purchase system.</li>
        </ul>
        <p className="mt-2">
          We <strong>do not</strong> sell or share your data with third-party advertisers or marketing partners.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">3. How We Store and Protect Your Information</h2>
        <p>
          Your data is stored securely using Supabase, our backend service provider. Transactional emails (such as
          invitations) are sent via Resend, which receives only the minimum data required (e.g., email address) to deliver
          those messages. However, no system can be guaranteed 100% secure.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">4. User Rights and Account Controls</h2>
        <p>You can manage and update your account information directly within the app.</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>Admins</strong> can remove users from their account or delete the entire account.</li>
          <li><strong>Account Deletion:</strong> When an admin deletes their account, all associated user data is also removed from our system.</li>
        </ul>
        <p className="mt-2">
          If you need assistance or have privacy-related requests, you can contact us at{" "}
          <a href="mailto:support@getgroceryguru.com" className="underline text-[var(--color-primary)]">
            support@getgroceryguru.com
          </a>.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">5. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify users of material changes via app updates or
          in-app notifications. The effective date at the top of this policy reflects the latest version.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">6. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or our data practices, please contact us at{" "}
          <a href="mailto:support@getgroceryguru.com" className="underline text-[var(--color-primary)]">
            support@getgroceryguru.com
          </a>.
        </p>
      </main>
      <Footer />
    </>
  )
}
