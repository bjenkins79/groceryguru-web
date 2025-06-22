import Image from 'next/image'

export default function InvitePage({ params }: { params: { token: string } }) {
  return (
    <div className="bg-light-bg min-h-screen flex items-center justify-center p-5">
      <div className="bg-secondary rounded-2xl shadow-lg p-10 text-center max-w-xs w-full">
        
        {/* App Icon */}
        <div className="bg-primary-accent rounded-3xl p-5 inline-block mb-6">
          <Image 
            src="/images/appIcon_GroceryGuru.png"
            alt="GroceryGuru" 
            width={60} 
            height={60}
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-primary mb-4 leading-tight">
          GroceryGuru Required
        </h1>

        {/* Message */}
        <p className="text-base text-primary mb-8 leading-relaxed">
          This grocery list invitation requires the GroceryGuru app.
        </p>

        {/* Download Button */}
        <a 
          href="https://apps.apple.com/app/groceryguru/YOUR_APP_ID"
          className="bg-primary text-secondary block text-lg font-semibold py-4 px-6 rounded-xl no-underline text-center shadow-lg mb-4 hover:opacity-90"
        >
          Download from App Store
        </a>

        {/* Token reference (small) */}
        <p className="text-xs text-completed font-mono">
          {params.token}
        </p>
      </div>
    </div>
  )
}