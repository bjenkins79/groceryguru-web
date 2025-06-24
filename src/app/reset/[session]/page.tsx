// reset/[session]/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reset your password – GroceryGuru',
  description: 'Use this code to reset your GroceryGuru password in the app.',
}

export default function ResetPage({ params }: { params: { session: string } }) {
    const resetCode = params.session.toUpperCase()
  
    return (
      <div className="bg-light-bg min-h-screen p-5">
        <div className="max-w-screen-sm mx-auto">
          {/* Header */}
          <div className="bg-primary-accent text-secondary text-center py-8 rounded-t-2xl">
            <img
              src="https://gg-email-renderer.vercel.app/googleIcon_GroceryGuru_320x132.png"
              alt="GroceryGuru"
              className="mx-auto w-40 h-auto"
            />
          </div>
  
          {/* Content */}
          <div className="bg-secondary p-8 rounded-b-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Reset your password
            </h2>
  
            <p className="text-primary mb-6">
              If the app didn't open, copy the code below and enter it manually in the GroceryGuru app to continue.
            </p>
  
            <div className="bg-secondary border-2 border-primary rounded-lg p-4 text-center">
              <span className="text-2xl font-bold text-primary tracking-widest">
                {resetCode}
              </span>
            </div>
  
            <p className="text-sm text-primary opacity-80 text-center mt-6">
              This code will expire in one hour. Make sure the app is installed first.
            </p>
          </div>
        </div>
      </div>
    )
  }