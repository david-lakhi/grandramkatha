import { Calendar, Clock, MapPin, Flame } from 'lucide-react';

const scheduleItems = [
  {
    icon: Calendar,
    label: 'Dates',
    value: '23–29 November 2025',
    valueHindi: '23 से 29 नवम्बर 2025',
  },
  {
    icon: Clock,
    label: 'Time',
    value: '6 PM – 9 PM',
    valueHindi: 'सायं 6 बजे से रात्रि 9 बजे तक',
  },
  {
    icon: MapPin,
    label: 'Venue',
    value: 'Exhibition Ground, Sector 34, Chandigarh',
    valueHindi: 'प्रदर्शनी ग्राउंड, सेक्टर-34, चंडीगढ़',
  },
  {
    icon: Flame,
    label: 'Diya Yatra',
    value: '21 November 2025 at 11 AM',
    valueHindi: '21 नवम्बर 2025, सुबह 11 बजे',
    special: true,
  },
];

export default function Schedule() {
  return (
    <section className="relative py-12 px-4 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-2 cinzel">
            Event Schedule
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-orange-600 to-transparent mx-auto mb-2"></div>
          <p className="text-lg text-gray-700 cormorant">
            Mark your calendars for this divine gathering
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {scheduleItems.map((item, index) => {
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
            <span className="font-bold text-orange-700">Daily Katha Sessions</span> will transport you through the divine journey of Lord Ram
          </p>
          <p className="text-gray-600 cormorant italic text-sm">
            "Each evening promises spiritual elevation, devotional music, and prasad for all"
          </p>
        </div>
      </div>
    </section>
  );
}
