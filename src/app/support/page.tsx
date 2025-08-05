import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Support – GroceryGuru",
  description: "Get help and support for the GroceryGuru mobile app.",
}

export default function SupportPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-16 text-[var(--color-primary)]">
        <h1 className="text-3xl font-bold mb-6">Support</h1>

        <p className="mb-8 text-lg">
          Need help with GroceryGuru? We're here to assist you with any questions or issues you may have.
        </p>

        <div className="space-y-10 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-2">
              For support, questions, or feedback, please email us at:
            </p>
            <p className="text-lg">
              <a 
                href="mailto:support@getgroceryguru.com" 
                className="underline text-[var(--color-primary)] font-medium hover:opacity-80 transition-opacity"
              >
                support@getgroceryguru.com
              </a>
            </p>
            <p className="mt-2 text-sm opacity-70">
              We typically respond within 24-48 hours.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">How do I manage my subscription?</h3>
                <p className="text-sm opacity-80">
                  Subscriptions are managed through your Apple App Store account. Open the Settings app on your device, 
                  tap your name, then tap "Subscriptions" to view and manage your GroceryGuru subscription.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">How do I share lists with family members?</h3>
                <p className="text-sm opacity-80">
                  Account administrators can invite up to 4 additional users through the app's account settings. 
                  Invited users will receive an email invitation to join your account.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">How do I delete my account?</h3>
                <p className="text-sm opacity-80">
                  You can delete your account from the Account Settings screen in the app. 
                  Please note that this action is permanent and cannot be undone.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">The app isn't working properly. What should I do?</h3>
                <p className="text-sm opacity-80">
                  Try restarting the app first. If issues persist, make sure you have the latest version installed 
                  from the App Store. If problems continue, please contact us with details about the issue.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Technical Issues</h2>
            <p className="text-sm opacity-80 mb-4">
              If you're experiencing technical difficulties, please include the following information when contacting support:
            </p>
            <ul className="list-disc list-inside text-sm opacity-80 space-y-1">
              <li>Your device model and iOS version</li>
              <li>GroceryGuru app version</li>
              <li>Description of the issue and steps to reproduce it</li>
              <li>Any error messages you've encountered</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}