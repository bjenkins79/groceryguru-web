// app/reset/[sessionID]/page.tsx

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reset your password – GroceryGuru',
  description: 'Use this code to reset your GroceryGuru password in the app.',
}

export default function ResetPage({ params }: { params: { sessionID: string } }) {
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
          Reset your password
        </h2>

        <p className="text-primary mb-6">
          We couldn't open the app automatically. No worries —
          just copy the code below and paste it into the GroceryGuru app.
        </p>

        <div className="bg-secondary border-2 border-primary-accent rounded-lg p-4 text-center">
          <span className="text-2xl font-bold text-primary tracking-widest">
            {params.sessionID.toUpperCase()}
          </span>
        </div>

        <div className="bg-tertiary-accent/20 border-l-4 border-tertiary-accent p-4 rounded mt-6">
          <p className="text-primary text-sm">
            📱 <strong>Make sure the app is installed</strong> on your iPhone before entering this code.
          </p>
        </div>
      </div>
    </div>
  );
}
