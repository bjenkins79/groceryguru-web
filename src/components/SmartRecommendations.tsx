export default function SmartRecommendations() {
  return (
    <section className="py-20 md:py-32 bg-white relative">
      {/* 50% visual emphasis - largest section */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-primary)] mb-6">
            Smart Recommendations
            <br />
            <span className="text-[var(--color-secondary-accent)]">That Learn Your Patterns</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-primary)] opacity-80 max-w-3xl mx-auto leading-relaxed">
            GroceryGuru notices when you typically buy items and suggests what you might need based on your shopping habits.
          </p>
        </div>

        {/* Main content - asymmetrical layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left - Large annotated screenshot */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative mx-auto w-72 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl overflow-visible">
              {/* iPhone mockup with annotations */}
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                <img
                  src="/images/GG_Screenshot_SmartRec_Card.png"
                  alt="Smart Recommendations with confidence scores"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Annotation callouts */}
              {/* COMMENT OUT FOR NOW 
              <div className="absolute top-32 -right-16 hidden lg:block z-10">
                <div className="bg-[var(--color-primary-accent)] text-[var(--color-primary)] px-4 py-2 rounded-lg shadow-lg text-sm font-medium relative">
                  85% confidence
                  <div className="absolute left-4 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[var(--color-primary-accent)]"></div>
                </div>
              </div>

              <div className="absolute top-32 -left-10 hidden lg:block z-10">
              <div className="bg-[var(--color-secondary-accent)] text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium relative">
                  Every 7 days
                  <div className="absolute right-4 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[var(--color-secondary-accent)]"></div>
                </div>
              </div>
              */}
            </div>
          </div>

          {/* Right - Feature details */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="space-y-10">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[var(--color-primary-accent)] rounded-full flex items-center justify-center">
                  <span className="text-[var(--color-primary)] font-bold text-base">1</span>
                </div>
                <h3 className="text-2xl font-semibold text-[var(--color-primary)]">Built Around Your Habits</h3>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[var(--color-secondary-accent)] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-base">2</span>
                </div>
                <h3 className="text-2xl font-semibold text-[var(--color-primary)]">Timely Suggestions</h3>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[var(--color-good)] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-base">3</span>
                </div>
                <h3 className="text-2xl font-semibold text-[var(--color-primary)]">Designed for Simplicity</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
