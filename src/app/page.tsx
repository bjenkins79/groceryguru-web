// src/app/page.tsx
import Image from 'next/image'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="bg-light-bg min-h-screen">
      {/* Header */}
      <header className="bg-secondary p-6 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image 
              src="/images/Logo_GroceryGuru.svg" 
              alt="GroceryGuru Logo" 
              width={40} 
              height={40}
              className="w-10 h-10"
            />
            <h1 className="text-2xl font-bold text-primary">
              GroceryGuru
            </h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/support" className="text-primary hover:text-primary-accent transition-colors">
              Support
            </Link>
            <Link href="/privacy" className="text-primary hover:text-primary-accent transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-primary hover:text-primary-accent transition-colors">
              Terms
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Smart Lists Made Simple
            </h2>
            <p className="text-xl text-primary mb-8 leading-relaxed">
              The grocery app that learns what you buy—and where you buy it.
            </p>
            <div className="bg-primary-accent text-primary px-8 py-4 rounded-xl font-semibold text-lg text-center inline-block">
              Coming Soon to the Apple App Store
            </div>
          </div>
          <div className="relative">
            <div className="flex gap-4 justify-center lg:justify-end">
              <div className="transform rotate-[-8deg]">
                <Image 
                  src="/images/Background_Splash_3x.png" 
                  alt="GroceryGuru App Screenshot" 
                  width={280} 
                  height={600}
                  className="rounded-3xl shadow-2xl"
                />
              </div>
              <div className="transform rotate-[4deg] -ml-8">
                <Image 
                  src="/images/AppIcon_GroceryGuru.png" 
                  alt="GroceryGuru List View" 
                  width={280} 
                  height={600}
                  className="rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Hook */}
      <section className="px-6 py-12 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-primary mb-4">
            Most grocery apps overcomplicate your list with recipes, meal plans, or ads you don't care about.
          </p>
          <p className="text-xl font-semibold text-primary">
            GroceryGuru keeps it simple—just the items you need, when you need them.
          </p>
        </div>
      </section>

      {/* Core Differentiators */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-secondary p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-primary-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🧠</span>
            </div>
            <h3 className="text-2xl font-bold text-primary text-center mb-6">
              Never Run Out Again
            </h3>
            <p className="text-primary leading-relaxed text-center">
              GroceryGuru tracks your shopping rhythms—weekly staples, monthly restocks—and suggests what you need, when you need it. No clutter. No guesswork. An app that remembers for you.
            </p>
          </div>
          <div className="bg-secondary p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-secondary-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🏪</span>
            </div>
            <h3 className="text-2xl font-bold text-primary text-center mb-6">
              Shop Your Way, Anywhere
            </h3>
            <p className="text-primary leading-relaxed text-center">
              Get your favorite gluten-free oat milk at Whole Foods or carnitas from the local mercado down the street. Keep items linked to your preferred stores—and when you're shopping, switch to see everything on your list so nothing gets left behind.
            </p>
          </div>
        </div>
      </section>

      {/* Table Stakes Features */}
      <section className="px-6 py-16 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">
            Plus Everything You Expect
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <span className="text-secondary-accent text-xl">✓</span>
              <div>
                <span className="text-primary font-medium">Real-time sync</span>
                <span className="text-primary opacity-75"> (no more "Did you get the milk?" texts)</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-secondary-accent text-xl">✓</span>
              <div>
                <span className="text-primary font-medium">Multi-user collaboration</span>
                <span className="text-primary opacity-75"> (finally, a shared list everyone can agree on)</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-secondary-accent text-xl">✓</span>
              <div>
                <span className="text-primary font-medium">Smart autocomplete</span>
                <span className="text-primary opacity-75"> (remembers your favorite brands)</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-secondary-accent text-xl">✓</span>
              <div>
                <span className="text-primary font-medium">Light & dark mode</span>
                <span className="text-primary opacity-75"> (for those late-night "oh wait" moments)</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-secondary-accent text-xl">✓</span>
              <div>
                <span className="text-primary font-medium">Custom categories and notes</span>
                <span className="text-primary opacity-75"> (organize your groceries your way)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-primary text-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <Image 
                src="/images/Logo_GroceryGuru.svg" 
                alt="GroceryGuru Logo" 
                width={32} 
                height={32}
                className="w-8 h-8"
              />
              <span className="text-lg font-bold">
                GroceryGuru
              </span>
            </div>
            <div className="flex gap-6">
              <Link href="/support" className="hover:text-primary-accent transition-colors">
                Support
              </Link>
              <Link href="/privacy" className="hover:text-primary-accent transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-primary-accent transition-colors">
                Terms
              </Link>
            </div>
          </div>
          <div className="border-t border-secondary opacity-30 mt-8 pt-8 text-center">
            <p className="opacity-75">
              © 2025 GroceryGuru. All rights reserved.
            </p>
            <p className="text-sm mt-2 opacity-75">
              Contact: support@getgroceryguru.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}