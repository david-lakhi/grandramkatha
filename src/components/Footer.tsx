import { Facebook, Instagram, Youtube, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-orange-900 to-red-950 text-white py-16 px-4">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLW9wYWNpdHk9Ii4wMyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="text-center md:text-left">
            <div className="mb-4">
              <div className="text-4xl mb-2">🕉️</div>
              <h3 className="text-2xl font-bold text-yellow-400 cinzel">Shri Ram Katha</h3>
            </div>
            <p className="text-orange-200 cormorant">
              A divine journey of devotion, enlightenment, and spiritual awakening
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-xl font-semibold text-yellow-400 mb-4">Organized By</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl">
                  🪔
                </div>
                <div className="text-left">
                  <p className="text-sm text-orange-200">Divya Jyoti Jagrati Sansthan</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-2xl">
                  🙏
                </div>
                <div className="text-left">
                  <p className="text-sm text-orange-200">Shri Ram Krupa Sewa Trust</p>
                  <p className="text-xs text-orange-300">Chandigarh</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-xl font-semibold text-yellow-400 mb-4">Connect With Us</h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              <a
                href="#"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
            <p className="text-sm text-orange-200">Follow us for updates</p>
          </div>
        </div>

        <div className="border-t border-orange-700/50 pt-8">
          <div className="bg-gradient-to-r from-orange-800/50 to-red-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-yellow-600/30">
            <p className="text-center text-yellow-200 text-lg font-semibold cinzel mb-2">
              From Self-Awakening to World Peace
            </p>
            <p className="text-center text-orange-200 text-sm cormorant italic">
              A DJJS Initiative in collaboration with Manthan
            </p>
          </div>

          <div className="text-center text-orange-300 text-sm">
            <p className="flex items-center justify-center space-x-2 mb-2">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
              <span>for spiritual seekers everywhere</span>
            </p>
            <p className="text-orange-400">
              © 2025 Divya Jyoti Jagrati Sansthan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    
    </footer>
  );
}
