import { Phone, MessageCircle, HelpCircle } from 'lucide-react';

const contacts = [
  {
    name: 'Swami Ji',
    number: '98159 30188',
  },
  {
    name: 'Sadhvi Ji',
    number: '99153 97241',
  },
];

export default function Contact() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-orange-50 to-amber-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4 cinzel flex items-center justify-center gap-3">
            <HelpCircle className="w-8 h-8 text-orange-600" />
            For Any Assistance
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-600 to-transparent mx-auto mb-4"></div>
          <p className="text-xl text-gray-700 cormorant">
            Contact our spiritual guides for guidance and support
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 font-semibold mb-2">{contact.name}</p>
                  <a
                    href={`tel:${contact.number.replace(/\s/g, '')}`}
                    className="text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    {contact.number}
                  </a>
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href={`tel:${contact.number.replace(/\s/g, '')}`}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-full font-semibold text-center hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call</span>
                </a>
                <a
                  href={`https://wa.me/91${contact.number.replace(/\s/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-full font-semibold text-center hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-orange-900 to-red-900 rounded-2xl p-8 text-center text-white shadow-2xl">
          <p className="text-lg mb-2">
            🙏 Seek spiritual guidance from our revered spiritual leaders
          </p>
          <p className="text-orange-200 cormorant italic">
            "Swami Ji and Sadhvi Ji are here to guide you on your spiritual journey"
          </p>
        </div>
      </div>
    </section>
  );
}
