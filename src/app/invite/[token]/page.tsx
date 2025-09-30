import type { Metadata } from 'next'
import { isTestFlightPhase } from "@/lib/constants";

export async function generateMetadata({ params }: { params: { token: string } }): Promise<Metadata> {
  return {
    title: "You've been invited to GroceryGuru",
    description: "Smart lists made simple. Accept your invite and get started with GroceryGuru.",
    openGraph: {
      title: "You've been invited to GroceryGuru",
      description: "Smart lists made simple. Accept your invite and get started with GroceryGuru.",
      url: `https://links.getgroceryguru.com/invite/${params.token}`,
      siteName: "GroceryGuru",
      images: [
        {
          url: "https://links.getgroceryguru.com/images/social-preview.png",
          width: 1200,
          height: 630,
          alt: "GroceryGuru Logo",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "You've been invited to GroceryGuru",
      description: "Smart lists made simple. Accept your invite and get started.",
      images: ["https://getgroceryguru.com/og/groceryguru-invite.png"],
    },
  }
}

export default function InvitePage({ params }: { params: { token: string } }) {
  const joinUrl = `groceryguru://invite/${params.token}`

  return (
    <div className="bg-light-bg min-h-screen p-5">
      <div className="max-w-screen-sm mx-auto">
        {/* Header */}
        <div className="bg-primary-accent text-primary text-center py-10 rounded-t-2xl">
          <img
            src="https://gg-email-renderer.vercel.app/googleIcon_GroceryGuru_320x132.png"
            alt="GroceryGuru"
            className="mx-auto"
            width={160}
            height={66}
          />
        </div>

        {/* Content */}
        <div className="bg-secondary p-8 rounded-b-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-primary mb-4">
  Having trouble opening the app?
</h2>

<p className="text-primary mb-6">
  You were invited to GroceryGuru — but it looks like the app didn't open automatically.
</p>

          <div className="bg-light-bg border-2 border-primary-accent rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-primary mb-4 text-center">
              Two ways to join:
            </h3>

            <div className="mb-6">
              <p className="text-primary font-medium mb-3">
                Option 1: Already have the app? Tap below:
              </p>
              <a
                href={joinUrl}
                className="bg-primary-accent text-primary block text-center py-4 px-6 rounded-lg font-semibold text-lg"
              >
                Join Account
              </a>
            </div>

            <div className="mb-6">
              <p className="text-primary font-medium mb-3">
                Option 2: Don't have the app? Download it first:
              </p>
              <a
                href="https://apple.co/3Wgh4UY"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center"
              >
                <img
                  src="/images/Download_on_the_App_Store_Badge.png"
                  alt="Download on the App Store"
                  className="mx-auto"
                  style={{ width: "160px", height: "auto" }}
                />
              </a>
              <p className="text-primary text-sm mt-3 text-center">
                Then return and tap "Join Account" above
              </p>
            </div>

            <div>
              <p className="text-primary font-medium mb-3 text-center">
                If you're having trouble, enter this code in the app:
              </p>
              <div className="bg-secondary border-2 border-primary rounded-lg p-4 text-center">
                <span className="text-2xl font-bold text-primary tracking-widest">
                  {params.token.toUpperCase()}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div> 
    </div>
  )
}
