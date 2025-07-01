import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="bg-[var(--color-light-background)] relative overflow-hidden">
      {/* Asymmetrical layout - text left, visuals right on desktop */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left column - Text content (mobile: centered, desktop: left-aligned) */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-primary)] leading-tight mb-6">
              Smart Lists,
              <br />
              <span className="text-[var(--color-secondary-accent)]">Made Simple</span>
            </h1>

            <p className="text-xl md:text-2xl text-[var(--color-primary)] opacity-95 mb-4 max-w-lg mx-auto lg:mx-0 font-medium">
            The grocery app that remembers what you buy
            </p>

            <p className="text-lg text-[var(--color-primary)] mb-8 max-w-md mx-auto lg:mx-0">
            Smart suggestions to help you get what you need when you need it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-[var(--color-primary-accent)] hover:bg-[var(--color-tertiary-accent)] text-[var(--color-primary)] font-semibold px-8 py-4 text-lg transition-all duration-200 hover:scale-105"
              >
                Request Early Access
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[var(--color-secondary-accent)] text-[var(--color-secondary-accent)] hover:bg-[var(--color-secondary-accent)] hover:text-white px-8 py-4 text-lg transition-all duration-200 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right column - iPhone mockups (clean, professional presentation) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative">
              {/* Primary iPhone mockup - clean and straight */}
              <div className="relative z-10">
              <div className="w-72 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    <img
                      src="/images/GG_Screenshot_ListView.png"
                      alt="List view"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Secondary iPhone mockup - clean offset */}
              <div className="absolute -right-8 top-8 opacity-60">
<div className="w-72 h-[600px] bg-black rounded-[3rem] p-2 shadow-xl opacity-70">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                    <img
                      src="/images/GG_Screenshot_ListView.png"
                      alt="GroceryGuru Store Filtering"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[var(--color-secondary-accent)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[var(--color-primary-accent)] rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}
