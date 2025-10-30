import { BookOpen, Music, Users, Lightbulb, UtensilsCrossed, Leaf } from 'lucide-react';

const highlights = [
  {
    icon: BookOpen,
    title: '7 Days of Katha',
    description: 'by Sadhvi Shreya Bharti Ji',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Music,
    title: 'Live Bhajans',
    description: '& Spiritual Music Ensemble',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Users,
    title: 'Thousands of Devotees',
    description: 'Gathering in Unity',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: Lightbulb,
    title: 'Light & Sound Experience',
    description: 'Ayodhya-Inspired Ambiance',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: UtensilsCrossed,
    title: 'Langar Prasad',
    description: 'For All Attendees',
    color: 'from-orange-600 to-red-600',
  },
  {
    icon: Leaf,
    title: 'Eco-friendly Atmosphere',
    description: 'Peaceful & Sustainable',
    color: 'from-green-500 to-emerald-600',
  },
];

export default function Highlights() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-amber-50 to-orange-100">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkY4QzAwIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4 cinzel">
            Event Highlights
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-600 to-transparent mx-auto mb-4"></div>
          <p className="text-xl text-gray-700 cormorant">
            Immerse yourself in a divine experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-orange-200 hover:border-orange-400"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${highlight.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                    {highlight.title}
                  </h3>

                  <p className="text-gray-600 text-center cormorant text-lg">
                    {highlight.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
