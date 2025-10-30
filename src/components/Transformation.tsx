export default function Transformation() {
  return (
    <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-orange-100 to-red-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/50 to-red-900"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cinzel text-shadow">
            Chandigarh Banega Ayodhya
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="relative group">
            <div className="absolute inset-0 bg-yellow-400 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-br from-orange-200 to-amber-300 rounded-3xl p-8 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
              <div className="text-center">
                <div className="text-7xl mb-4">🏙️</div>
                <p className="text-2xl font-bold text-orange-900 cinzel mb-2">Chandigarh</p>
                <p className="text-gray-700 cormorant">The City Beautiful</p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-yellow-400 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-8 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
              <div className="text-center">
                <div className="text-7xl mb-4">🕉️</div>
                <p className="text-2xl font-bold text-white cinzel mb-2">Ayodhya</p>
                <p className="text-orange-100 cormorant">The City Divine</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-900/80 to-orange-900/80 backdrop-blur-sm rounded-3xl p-12 border-2 border-yellow-500/30 text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-yellow-400 rounded-full mx-1 animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>

          <blockquote className="text-2xl md:text-4xl text-yellow-100 font-light cormorant italic mb-4 text-glow">
            "When devotion lights up a city,<br />every heart becomes Ayodhya."
          </blockquote>

          <div className="flex justify-center mt-6">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-yellow-400 rounded-full mx-1 animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-orange-100 cormorant">
            Experience the transformation as thousands of diyas illuminate not just the venue,<br />
            but also the souls of every devotee present.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-amber-50 to-transparent"></div>
    </section>
  );
}
