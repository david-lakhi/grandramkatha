import { Phone, Calendar, MapPin, Users, HelpCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with banner image overlay */}
      <div className="absolute inset-0 w-screen h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/image3.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            width: '100vw',
            height: '100vh',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            objectFit: 'cover'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float animate-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          >
            <div className="w-2 h-2 bg-yellow-300 rounded-full blur-sm"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto animate-fade-in flex flex-col justify-center min-h-screen">
        <div className="mb-6 flex justify-start ml-8">
          <div className="relative">
            <img src="/djjs-logo.png" alt="DJJS Logo" className="w-20 h-20 object-contain" />
            <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
          </div>
        </div>

        <div className="relative mb-4 px-8 py-6 mt-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-yellow-400 cinzel text-glow animate-title-glow relative z-10 tracking-wide">
            GRAND SHRI RAM KATHA
          </h1>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/25 via-orange-500/35 to-yellow-500/25 rounded-3xl blur-2xl animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/15 to-transparent rounded-3xl blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute -inset-2 bg-gradient-to-r from-yellow-600/10 via-orange-600/20 to-yellow-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-6"></div>

        <p className="text-2xl md:text-3xl lg:text-4xl text-amber-100 mb-8 cormorant font-light">
          Experience the Divine Saga of Shri Ram
        </p>

        <p className="text-xl md:text-2xl text-orange-200 mb-8 font-semibold">
          In the Heart of Tricity — Chandigarh Banega Ayodhya
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
          <div className="bg-gradient-to-r from-orange-800/80 to-red-900/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-yellow-500/30 animate-shimmer">
            <div className="flex items-center justify-center gap-3">
              <Calendar className="w-5 h-5 text-yellow-400" />
              <p className="text-xl md:text-2xl text-yellow-300 devanagari font-semibold">
                23-29 नवम्बर 2025 | सायं 6-9 बजे तक
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 mt-2">
              <MapPin className="w-4 h-4 text-yellow-400" />
              <p className="text-lg text-orange-200 devanagari">
                प्रदर्शनी ग्राउंड, सेक्टर-34, चंडीगढ़
              </p>
            </div>
          </div>
          
          <a href="#mangal-kalash-yatra" className="bg-gradient-to-r from-red-800 to-orange-900 hover:from-red-700 hover:to-orange-800 text-yellow-100 font-bold py-4 px-8 rounded-full border-2 border-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg whitespace-nowrap">
            🪔 Mangal Kalash Yatra — 21 Nov, 11 AM
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
