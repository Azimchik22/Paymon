import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Building2 } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Building2 className="h-8 w-8 text-green-500" />
              <span className="ml-2 text-xl font-bold">PAYMON GROUP</span>
            </div>
            <p className="text-gray-400">PAYMON GROUP — имкониятҳоро ба амал меорем!</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Тамос</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" /> +992 (XX) XXX-XX-XX
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" /> info@paymongroup.tj
              </p>
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" /> улица Шохтемур 21, Душанбе
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Пайвандҳо</h3>
            <div className="space-y-2">
              <p><Link to="/about" className="hover:text-green-400">Дар бораи мо</Link></p>
              <p><Link to="/services" className="hover:text-green-400">Хидматҳо</Link></p>
              <p><Link to="/blog" className="hover:text-green-400">Публикацияҳо</Link></p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Иҷтимоӣ</h3>
            <div className="space-y-2">
              <p><a href="https://t.me/paymongroup" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">Telegram</a></p>
              <p><a href="#" className="hover:text-green-400">Instagram</a></p>
              <p><a href="#" className="hover:text-green-400">Facebook</a></p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} PAYMON GROUP. Ҳамаи ҳуқуқҳо ҳифз шудаанд.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer