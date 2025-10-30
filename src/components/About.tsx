import { Heart } from 'lucide-react';

export default function About() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <Heart className="w-12 h-12 text-orange-600 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4 cinzel">
            A Spiritual Festival Like Never Before
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-600 to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            {/* <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div> */}
            <div className="relative bg-white rounded-3xl p-4 shadow-2xl border-orange-200">
                <img 
                  src="/ram-lala.jpg" 
                  alt="Ram Lala Portrait" 
                  className="w-full h-80 object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
                />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed cormorant">
              Join thousands of devotees as <span className="font-bold text-orange-700">DJJS Chandigarh</span> transforms
              the City Beautiful into a <span className="font-bold text-orange-700">City Divine</span> — through soulful
              kathas, bhajans, and an aura of devotion, unity, and enlightenment.
            </p>

            <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl p-6 border-l-4 border-orange-600">
              <p className="text-gray-700 italic cormorant text-lg">
                "Experience the transformation as Chandigarh embraces the divine essence of Ayodhya,
                bringing together spirituality, culture, and community in a celebration of devotion."
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-lg text-center border-2 border-orange-200">
                <p className="text-3xl font-bold text-orange-600">7</p>
                <p className="text-sm text-gray-600 font-semibold">Days of Katha</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg text-center border-2 border-orange-200">
                <p className="text-3xl font-bold text-orange-600">1000s</p>
                <p className="text-sm text-gray-600 font-semibold">Of Devotees</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
