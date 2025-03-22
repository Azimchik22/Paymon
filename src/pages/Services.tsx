import React from 'react';
import { Home, Building2, Calculator, Search, FileCheck, Users } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: <Home className="h-12 w-12 text-green-600" />,
      title: "Хариди манзил",
      description: "Интихоби беҳтарин хонаҳо бо нархҳои муносиб барои шумо"
    },
    {
      icon: <Building2 className="h-12 w-12 text-green-600" />,
      title: "Фурӯши амвол",
      description: "риэлтороне ки барои ФУРУШ"
    },
    {
      icon: <Calculator className="h-12 w-12 text-green-600" />,
      title: "Машварати қарзӣ",
      description: "Машваратҳои касбӣ оид ба қарзҳои манзилӣ"
    },
    {
      icon: <Search className="h-12 w-12 text-green-600" />,
      title: "Ҷустуҷӯи манзил",
      description: "Ҷустуҷӯи манзили мувофиқ аз рӯи талаботи шумо"
    },
    {
      icon: <FileCheck className="h-12 w-12 text-green-600" />,
      title: "Санҷиши ҳуҷҷатҳо",
      description: "Санҷиши пурраи ҳуҷҷатҳои манзил пеш аз харид"
    },
    {
      icon: <Users className="h-12 w-12 text-green-600" />,
      title: "Машварати ҳуқуқӣ",
      description: "Машваратҳои ҳуқуқӣ оид ба амалиёти манзилӣ"
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Хидматҳои мо</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-green-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ба мушкилоти манзилии худ роҳи ҳал меҷӯед?
          </h2>
          <p className="text-white mb-8">
            Мутахассисони мо омодаанд ба шумо маслиҳат диҳанд
          </p>
          <a
            href="https://t.me/paymongroup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-green-600 rounded-md font-semibold hover:bg-gray-100"
          >
            Тамос гиред
          </a>
        </div>
      </div>
    </div>
  );
}

export default Services;