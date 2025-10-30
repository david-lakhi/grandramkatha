import { Users, Calendar, MapPin, Flower, Lamp, Clock, Flame } from 'lucide-react';

const yatraDetails = [
  {
    icon: Calendar,
    label: 'Date',
    value: '21 November 2025',
    valueHindi: '21 नवम्बर 2025',
  },
  {
    icon: Clock,
    label: 'Time',
    value: '11:00 AM',
    valueHindi: 'सुबह 11 बजे',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Shri Sanatan Dharam Mandir, Sector 32',
    valueHindi: 'श्री सनातन धर्म मंदिर, सेक्टर 32',
  },
  {
    icon: Flame,
    label: 'Sacred Procession',
    value: 'Mangal Kalash Yatra',
    valueHindi: 'मंगल कलश यात्रा',
    special: true,
  },
];

export default function MangalKalashYatra() {
  return (
    <section id="mangal-kalash-yatra" className="relative py-12 px-4 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-2 cinzel">
            🪔 Mangal Kalash Yatra
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-orange-600 to-transparent mx-auto mb-2"></div>
          <p className="text-lg text-gray-700 cormorant">
            A Sacred Procession of Divine Blessings
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {yatraDetails.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                  item.special
                    ? 'bg-gradient-to-br from-orange-500 to-red-600 col-span-full'
                    : 'bg-white border-2 border-orange-200'
                }`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-300/20 to-transparent rounded-full -mr-12 -mt-12"></div>

                <div className="relative p-4">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                        item.special
                          ? 'bg-white/20 backdrop-blur-sm'
                          : 'bg-gradient-to-br from-orange-400 to-red-500'
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          item.special ? 'text-white' : 'text-white'
                        }`}
                      />
                    </div>

                    <div className="flex-1">
                      <p
                        className={`text-xs font-semibold mb-1 ${
                          item.special ? 'text-orange-100' : 'text-orange-600'
                        }`}
                      >
                        {item.label}
                      </p>
                      <p
                        className={`text-base md:text-lg font-bold mb-1 ${
                          item.special ? 'text-white' : 'text-gray-800'
                        }`}
                      >
                        {item.value}
                      </p>
                      <p
                        className={`text-sm devanagari ${
                          item.special ? 'text-yellow-100' : 'text-gray-600'
                        }`}
                      >
                        {item.valueHindi}
                      </p>
                    </div>
                  </div>
                </div>

                {item.special && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 animate-pulse"></div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl p-4 border border-orange-300 text-center">
          <p className="text-base text-gray-700 mb-2">
            <span className="font-bold text-orange-700">Join the Sacred Journey</span> as we carry the sacred kalashas through Chandigarh
          </p>
          <p className="text-gray-600 cormorant italic text-sm">
            "This auspicious yatra marks the beginning of the Grand Shri Ram Katha celebrations"
          </p>
        </div>
      </div>
    </section>
  );
}