// app/invite/[code]/page.tsx

import Image from 'next/image'

import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { code: string } }): Promise<Metadata> {
  return {
    title: "You've been invited to GroceryGuru",
    description: "Smart lists made simple. Accept your invite and get started with GroceryGuru.",
    openGraph: {
      title: "You've been invited to GroceryGuru",
      description: "Smart lists made simple. Accept your invite and get started with GroceryGuru.",
      url: `https://links.getgroceryguru.com/invite/${params.code}`,
      siteName: "GroceryGuru",
      images: [
        {
          url: "https://links.getgroceryguru.com/googleIcon_GroceryGuru_320x132.png",
          width: 320,
          height: 132,
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
  };
}

export default function InvitePage({ params }: { params: { token: string } }) {
  const joinUrl = `groceryguru://invite/${params.token}`
  
  return (
    <div className="bg-light-bg min-h-screen p-5">
      {/* Header */}
      <div className="bg-primary text-secondary text-center py-8 rounded-t-2xl">
        <h1 className="text-2xl font-semibold">GroceryGuru</h1>
        <p className="text-sm opacity-90">Smart lists made simple.</p>
      </div>
      
      {/* Content */}
      <div className="bg-secondary p-8 rounded-b-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-primary mb-4">
          You're invited to join!
        </h2>
        
        <p className="text-primary mb-6">
          Someone thought you'd find GroceryGuru helpful for managing grocery lists and staying organized.
        </p>
        
        {/* Two Options Box */}
        <div className="bg-primary-accent/10 border-2 border-primary-accent rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-primary mb-4 text-center">
            Two ways to join:
          </h3>
          
          <div className="mb-6">
            <p className="text-primary font-medium mb-3">
              Option 1: Tap the button below (will open app if installed)
            </p>
            <a 
              href={joinUrl}
              className="bg-primary-accent text-primary block text-center py-4 px-6 rounded-lg font-semibold text-lg"
            >
              Join Account
            </a>
          </div>
          
          <div>
            <p className="text-primary font-medium mb-3">
              Option 2: Enter this invite code in the app
            </p>
            <div className="bg-secondary border-2 border-primary-accent rounded-lg p-4 text-center">
              <span className="text-2xl font-bold text-primary tracking-widest">
                {params.token.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
        
        {/* Download note */}
        <div className="bg-tertiary-accent/20 border-l-4 border-tertiary-accent p-4 rounded">
          <p className="text-primary text-sm">
            📱 <strong>New to GroceryGuru?</strong> Download the app from the App Store first, then use either option above to join.
          </p>
        </div>
      </div>
    </div>
  )
}