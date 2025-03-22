import React from 'react';
import { Search, Home as HomeIcon, Building2, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-[700px] object-cover"
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
            alt="Luxury villa"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-6">
            ХАРИДИЧОРА! Мусоидат ба хариди осон
          </h1>
          <p className="text-2xl text-white text-center mb-12">
            PAYMON GROUP — имкониятҳоро ба амал меорем!
          </p>
          
          {/* Search Box */}
          <div className="max-w-3xl mx-auto bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center flex-1 w-full">
                <Search className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Ҷустуҷӯи манзил..."
                  className="ml-2 flex-1 border-none focus:ring-0 text-gray-900 bg-transparent"
                />
              </div>
              <button className="w-full md:w-auto px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Ҷустуҷӯ
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Манзилҳои беҳтарин</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-xl shadow-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
                  alt="Luxury Property"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-1 rounded-full">
                  Premium
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">Вилла дар Душанбе</h3>
                <p className="text-gray-600 mb-4">Ноҳияи Исмоили Сомонӣ, Душанбе</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">$450,000</span>
                  <Link to="/catalog" className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                    Муфассал
                  </Link>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-xl shadow-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Modern Apartment"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-1 rounded-full">
                  New
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">Пентхаус дар маркази шаҳр</h3>
                <p className="text-gray-600 mb-4">Ноҳияи Фирдавсӣ, Душанбе</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">$380,000</span>
                  <Link to="/catalog" className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                    Муфассал
                  </Link>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-xl shadow-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
                  alt="Luxury Villa"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-1 rounded-full">
                  Exclusive
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">Ҳавлии замонавӣ</h3>
                <p className="text-gray-600 mb-4">Ноҳияи Сино, Душанбе</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">$520,000</span>
                  <Link to="/catalog" className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                    Муфассал
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Хидматҳои мо</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <HomeIcon className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Хариди манзил</h3>
              <p className="text-gray-600">Интихоби беҳтарин хонаҳо бо нархҳои муносиб барои шумо</p>
            </div>
            <div className="text-center">
              <Building2 className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Фурӯши амвол</h3>
              <p className="text-gray-600">риэлтороне ки барои ФУРУШ</p>
            </div>
            <div className="text-center">
              <MapPin className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Машварати риёлторӣ</h3>
              <p className="text-gray-600">Машваратҳои касбӣ оид ба қарзҳои манзилӣ</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ба мо дар Telegram ҳамроҳ шавед!
          </h2>
          <p className="text-gray-300 text-xl mb-12">
            Барои маслиҳати ройгон ва дастрасӣ ба пешниҳодҳои махсус
          </p>
          <a
            href="https://t.me/paymongroup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
          >
            Ҳамроҳ шудан
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;