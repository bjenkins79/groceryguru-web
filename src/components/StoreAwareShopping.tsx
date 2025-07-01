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
              <span className="text-lg text-[var(--color-secondary-accent)]">Shopping</span>
            </h2>

            <p className="text-lg text-[var(--color-primary)] opacity-80 mb-8 leading-relaxed">
              Switch between viewing all your items or just what you typically buy at specific stores. At Costco, see
              your Costco items. Need something else while you're there? Expand to see everything.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-[var(--color-secondary-accent)] rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="text-2xl font-semibold text-[var(--color-primary)] mb-2">Smart Filtering</h4>
                  <p className="text-lg text-[var(--color-primary)] opacity-70">
                    Automatically shows items you typically buy at each store
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-[var(--color-primary-accent)] rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="text-2xl font-semibold text-[var(--color-primary)] mb-2">Any Retailer</h4>
                  <p className="text-lg text-[var(--color-primary)] opacity-70">
                    Works with any combination of stores where you shop
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Store filtering demonstration */}
          <div className="lg:col-span-7">
            <div className="flex flex-col md:flex-row justify-center md:space-x-6 space-y-8 md:space-y-0">
              {/* Store view - store items with label */}
              <div className="flex flex-col items-center">
                <div className="w-72 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    <img
                      src="/images/GG_Screenshot_StoreView_StoreItems.png"
                      alt="Costco filtered view"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <span className="mt-3 text-center text-sm font-medium text-[var(--color-primary)] opacity-70">
                  Costco Only
                </span>
              </div>

              {/* Store view - all items with label */}
              <div className="flex flex-col items-center">
                <div className="w-72 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    <img
                      src="/images/GG_Screenshot_StoreView_AllItems.png"
                      alt="All items view"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <span className="mt-3 text-center text-sm font-medium text-[var(--color-primary)] opacity-70">
                  All Items
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
