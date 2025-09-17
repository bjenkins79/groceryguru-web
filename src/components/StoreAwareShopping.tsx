import Image from 'next/image'

export default function StoreAwareShopping() {
  return (
    <section className="py-20 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-primary)] mb-6">
            Store-Aware
            <br />
            <span className="text-[var(--color-secondary-accent)]">Shopping</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-primary)] opacity-80 max-w-3xl mx-auto leading-relaxed">
            Store mode: Get those organic chips at Whole Foods or carnitas at your local mercado. One tap to see all items.
          </p>
        </div>

        {/* Main content - asymmetrical layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Large annotated screenshot */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-end">
            <div className="relative w-72 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl overflow-visible">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                <Image
                  src="/images/StoreView_ExpCategory.png"
                  alt="Store view with expanded categories"
                  width={288}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right - Feature details */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-start">
            <div className="space-y-10 max-w-sm">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[var(--color-secondary-accent)] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-base">1</span>
                </div>
                <h3 className="text-2xl font-semibold text-[var(--color-primary)]">Smart Filtering</h3>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[var(--color-primary-accent)] rounded-full flex items-center justify-center">
                  <span className="text-[var(--color-primary)] font-bold text-base">2</span>
                </div>
                <h3 className="text-2xl font-semibold text-[var(--color-primary)]">Seamless Switching</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}