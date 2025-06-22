import Image from 'next/image'

export default function InvitePage({ params }: { params: { token: string } }) {
  return (
    <div className="min-h-screen bg-light-bg">
      {/* Header bar with your branding */}
      <div className="bg-primary-accent px-6 py-4 flex items-center">
        <Image 
          src="/images/appIcon_GroceryGuru.png" 
          alt="GroceryGuru" 
          width={40} 
          height={40}
          className="mr-3"
        />
        <h1 className="text-primary text-2xl font-bold">
          GroceryGuru
        </h1>
      </div>
      
      {/* Content */}
      <div className="px-6 py-8">
        <h2 className="text-primary text-xl font-semibold mb-4">
          You've been invited to join a grocery list!
        </h2>
        
        <div className="bg-secondary rounded-lg p-4 mb-6 border border-dark-bg/20">
          <p className="text-primary text-sm">
            Invite Token: <span className="font-mono text-secondary-accent">{params.token}</span>
          </p>
        </div>
        
        <p className="text-primary mb-4">
          If you have the GroceryGuru app installed, it should have opened automatically.
        </p>
        
        <p className="text-primary/70 text-sm">
          Don't have the app? Download it from the App Store.
        </p>
      </div>
    </div>
  )
}