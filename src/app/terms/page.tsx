import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Terms of Service – GroceryGuru",
  description: "Terms governing your use of the GroceryGuru mobile app.",
}

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-16 text-[var(--color-primary)]">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

        <p className="mb-4"><strong>Effective Date:</strong> July 25, 2025</p>

        <p className="mb-6">
          These Terms of Service (“Terms”) govern your use of the GroceryGuru mobile application (the “App”) and related
          services provided by GroceryGuru (“we,” “our,” or “us”). By using the App, you agree to these Terms. If you do not
          agree to these Terms, you may not use the App.
        </p>

        <div className="space-y-10 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Use of the App</h2>
            <ul className="list-decimal list-inside space-y-2">
              <li>To create an account or act as the account administrator, you must be at least 18 years old or have the legal capacity to enter into binding agreements.</li>
              <li>Administrators may invite additional users, including individuals under the age of 18, provided that the administrator assumes full responsibility for their use and compliance with these Terms.</li>
              <li>You agree to use the App only for personal, non-commercial purposes.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials and for any actions taken using your account.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. Account and Multi-User Handling</h2>
            <ul className="list-decimal list-inside space-y-2">
              <li>Each account is managed by a single administrator who may invite and remove additional users.</li>
              <li>Invited users acknowledge that their access is controlled by the administrator, including the ability to revoke access at any time.</li>
              <li>Administrators are solely responsible for ensuring that invited users are appropriate for the App and understand these Terms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. Subscription and Payments</h2>
            <ul className="list-decimal list-inside space-y-2">
              <li>The App offers a free trial. Continued access after the trial period requires a paid subscription.</li>
              <li>All payments are processed through Apple’s in-app purchase (IAP) system. GroceryGuru does not process or store payment details directly.</li>
              <li>Subscription renewals, cancellations, and refunds are governed by Apple’s App Store policies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Recommendations and Content</h2>
            <ul className="list-decimal list-inside space-y-2">
              <li>The App generates grocery recommendations based on your past activity and behavioral patterns, including item frequency and preferred store usage.</li>
              <li>We do not guarantee the accuracy, completeness, or appropriateness of any recommendation provided by the App.</li>
              <li>You are solely responsible for verifying the accuracy and suitability of items shown in your lists.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. User Content</h2>
            <ul className="list-decimal list-inside space-y-2">
              <li>You retain ownership of the content you input into the App, such as custom list items.</li>
              <li>You grant us a limited license to process this content solely for the purpose of providing the App’s services.</li>
              <li>We reserve the right to remove any content that violates these Terms or applicable law.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. Prohibited Uses</h2>
            <ul className="list-decimal list-inside space-y-2">
              <li>You may not use the App for any illegal or unauthorized purpose.</li>
              <li>You may not attempt to reverse-engineer, interfere with, or disrupt the App’s functionality.</li>
              <li>You may not share, distribute, or misuse content or services provided by the App in violation of these Terms or any applicable intellectual property rights.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">7. Termination</h2>
            <ul className="list-decimal list-inside space-y-2">
              <li>You may discontinue use of the App at any time.</li>
              <li>We reserve the right to suspend or terminate any account that violates these Terms or misuses the App.</li>
              <li>When an administrator deletes an account, all associated user data and access are permanently removed.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">8. Disclaimers and Limitation of Liability</h2>
            <ul className="list-decimal list-inside space-y-2">
              <li>The App is provided “as is” and without warranties of any kind.</li>
              <li>We disclaim responsibility for any errors, omissions, or failures in the operation of the App or the accuracy of its recommendations.</li>
              <li>During pre-release testing phases (such as via Apple TestFlight), some features may be experimental and subject to change.</li>
              <li>To the extent permitted by law, our liability is limited to the amount you have paid (if any) for the App within the twelve (12) months preceding the claim.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">9. Changes to the Terms</h2>
            <ul className="list-decimal list-inside space-y-2">
              <li>We may update these Terms from time to time.</li>
              <li>Material changes will be communicated through app updates or in-app notifications.</li>
              <li>Continued use of the App after such changes constitutes acceptance of the updated Terms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">10. Contact Information</h2>
            <p>
              If you have any questions or concerns about these Terms, please contact us at:{" "}
              <a href="mailto:support@groceryguru.com" className="underline text-[var(--color-primary)]">
                support@groceryguru.com
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
