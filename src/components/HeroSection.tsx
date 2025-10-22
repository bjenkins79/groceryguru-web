'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="bg-[var(--color-light-background)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left column */}
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
              <Link
                href="https://apple.co/3Wgh4UY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src="/images/Download_on_the_App_Store_Badge.png"
                  alt="Download on the App Store"
                  width={180}
                  height={60}
                  className="h-[60px] w-auto hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>
          </div>

          {/* Right column (mockups) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative">
              <div className="relative z-10">
                <div className="w-72 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  <Image
  src="/images/ListView.png"
  alt="Home screen with multiple lists"
  width={288}
  height={600}
  className="object-cover w-full h-full"
/>
                  </div>
                </div>
              </div>
              <div className="absolute -right-8 top-8 opacity-60">
                <div className="w-72 h-[600px] bg-black rounded-[3rem] p-2 shadow-xl opacity-70">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                  <Image
  src="/images/ListView.png"
  alt="Home screen with multiple lists"
  width={288}
  height={600}
  className="object-cover w-full h-full"
/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background accents */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[var(--color-secondary-accent)] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[var(--color-primary-accent)] rounded-full blur-3xl" />
      </div>
    </section>
  )
}
