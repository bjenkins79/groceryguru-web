export default function SimpleCollaboration() {
  return (
    <section className="py-16 md:py-20 bg-white">
      {/* 15% visual emphasis - supporting feature, minimal treatment */}
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-primary)] mb-4">
          Simple <span className="text-[var(--color-secondary-accent)]">Sharing</span>
        </h2>

        <p className="text-lg text-[var(--color-primary)] opacity-80 mb-12 max-w-2xl mx-auto">
          Share lists with family and friends. Everyone can add items and see updates in real time. No complicated
          permissions - collaboration that just works.
        </p>

        {/* Clean, minimal visual treatment */}
        <div className="flex justify-center">
        <div className="w-72 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
        <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
              <img
                src="/images/ManagerUsers_Invite.png"
                alt="Simple list sharing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
