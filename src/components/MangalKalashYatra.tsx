import { Users, Calendar, MapPin, Flower, Lamp } from 'lucide-react';

export default function MangalKalashYatra() {
  return (
    <section id="mangal-kalash-yatra" className="relative py-20 px-4 bg-gradient-to-b from-amber-50 to-orange-100">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0ZGNjMwMCIgc3Ryb2tlLW9wYWNpdHk9Ii4xIiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Lamp className="w-16 h-16 text-orange-600" />
              <div className="absolute inset-0 bg-orange-400 rounded-full blur-2xl opacity-30"></div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4 cinzel">
            🪔 Mangal Kalash Yatra
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-600 to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-orange-700 cormorant">
            A Sacred Procession of Divine Blessings
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-orange-200">
              <div className="flex items-center gap-4 mb-6">
                <Calendar className="w-8 h-8 text-orange-600" />
                <div>
                  <h3 className="text-2xl font-bold text-orange-900 devanagari">21 नवम्बर 2025</h3>
                  <p className="text-lg text-orange-700">Friday Morning</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <Lamp className="w-8 h-8 text-orange-600" />
                <div>
                  <h3 className="text-2xl font-bold text-orange-900">11:00 AM</h3>
                  <p className="text-lg text-orange-700">Sacred Hour</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="w-8 h-8 text-orange-600" />
                <div>
                  <h3 className="text-xl font-bold text-orange-900">Starting Point</h3>
                  <p className="text-lg text-orange-700">Sector-34 Ground, Chandigarh</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-6 border-l-4 border-orange-600">
              <div className="flex items-center gap-3 mb-3">
                <Flower className="w-6 h-6 text-orange-600" />
                <h4 className="text-xl font-bold text-orange-900">Sacred Procession</h4>
              </div>
              <p className="text-gray-700 cormorant text-lg">
                Join thousands of devotees in a divine procession carrying sacred kalashas filled with holy water, flowers, and divine blessings through the streets of Chandigarh.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border-2 border-orange-200">
              <div className="aspect-square bg-gradient-to-br from-orange-200 via-red-200 to-amber-200 rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="text-9xl mb-4">🪔</div>
                  <p className="text-3xl font-bold text-orange-900 cinzel mb-2">Mangal Kalash</p>
                  <p className="text-orange-700 cormorant">Divine Journey</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-orange-800 to-red-900 backdrop-blur-sm rounded-3xl p-8 border-2 border-yellow-500/30">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Users className="w-8 h-8 text-yellow-400" />
            <h3 className="text-2xl font-bold text-yellow-300">Join the Sacred Journey</h3>
          </div>
          <p className="text-center text-yellow-100 cormorant text-xl">
            Be part of this divine procession as we carry the sacred kalashas through Chandigarh, 
            spreading divine blessings and spiritual energy throughout the city. This auspicious yatra 
            marks the beginning of the Grand Shri Ram Katha celebrations.
          </p>
        </div>
      </div>
    </section>
  );
}