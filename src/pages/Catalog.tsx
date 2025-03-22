import React from 'react';
import { Building2 } from 'lucide-react';

function Catalog() {
  const properties = [
    {
      id: 1,
      title: "Хонаи замонавӣ",
      location: "Ноҳияи Исмоили Сомонӣ",
      price: "$120,000",
      rooms: 3,
      area: "150м²",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Манзили оилавӣ",
      location: "Ноҳияи Фирдавсӣ",
      price: "$85,000",
      rooms: 2,
      area: "90м²",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Ҳавлии замонавӣ",
      location: "Ноҳияи Сино",
      price: "$200,000",
      rooms: 5,
      area: "250м²",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Каталоги манзилҳо</h1>

        {/* Filters */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Ҷустуҷӯ..."
              className="rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
            />
            <select className="rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200">
              <option>Ҳама ноҳияҳо</option>
              <option>Исмоили Сомонӣ</option>
              <option>Фирдавсӣ</option>
              <option>Сино</option>
            </select>
            <select className="rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200">
              <option>Шумораи ҳуҷраҳо</option>
              <option>1</option>
              <option>2</option>
              <option>3+</option>
            </select>
            <button className="bg-green-600 text-white rounded-md py-2 px-4 hover:bg-green-700">
              Ҷустуҷӯ
            </button>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-4">{property.location}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">{property.rooms} ҳуҷра • {property.area}</span>
                  <span className="text-green-600 font-bold">{property.price}</span>
                </div>
                <button className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                  Муфассал
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Catalog;