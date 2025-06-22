export default function Home() {
  return (
    <div className="min-h-screen bg-light-bg">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-primary mb-8">
          GroceryGuru Web
        </h1>
        
        {/* Test your color palette */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-primary text-secondary p-4 rounded">Primary</div>
          <div className="bg-secondary text-primary p-4 rounded border">Secondary</div>
          <div className="bg-tertiary text-secondary p-4 rounded">Tertiary</div>
          <div className="bg-primary-accent text-primary p-4 rounded">Primary Accent</div>
          <div className="bg-secondary-accent text-secondary p-4 rounded">Secondary Accent</div>
          <div className="bg-good text-secondary p-4 rounded">Good</div>
        </div>
        
        <p className="text-primary">
          Universal Links test page - colors match your iOS app!
        </p>
      </div>
    </div>
  )
}