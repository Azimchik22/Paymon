import React from 'react';
import { Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center">
            <Building2 className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">PAYMON GROUP</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-green-600">Асосӣ</Link>
            <Link to="/catalog" className="text-gray-700 hover:text-green-600">Каталог</Link>
            <Link to="/services" className="text-gray-700 hover:text-green-600">Хидматҳо</Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600">Дар бораи мо</Link>
            <Link to="/blog" className="text-gray-700 hover:text-green-600">Публикацияҳо</Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-600">Тамос</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar