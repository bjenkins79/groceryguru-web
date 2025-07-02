export default function StoreAwareShopping() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-light-background)] relative">
      {/* 35% visual emphasis - secondary feature */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left - Feature content */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-primary)] mb-6">
              Store-Aware
              <br />
              <span className="text-[var(--color-secondary-accent)]">Shopping</span>
            </h2>

            <p className="text-lg text-[var(--color-primary)] opacity-80 mb-8 leading-relaxed">
              Store mode: Get those organic chips at Whole Foods or carnitas at your local mercado. One tap to see all items.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-[var(--color-secondary-accent)] rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="text-2xl font-semibold text-[var(--color-primary)]">Smart Filtering</h4>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-[var(--color-primary-accent)] rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="text-2xl font-semibold text-[var(--color-primary)]">Seamless Switching</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Store filtering demonstration */}
          <div className="lg:col-span-7">
            <div className="flex justify-center">
              <div className="w-72 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  <img
                    src="/images/GG_Screenshot_StoreView_StoreItems.png"
                    alt="Vallarta filtered view"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}