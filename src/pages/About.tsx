import React from 'react';
import { Users } from 'lucide-react';

function About() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Дар бораи PAYMON GROUP</h1>

        {/* Company Description */}
        <div className="prose max-w-none mb-16">
          <p className="text-lg text-gray-700 mb-8">
            PAYMON GROUP — пешсафи бозори амволи ғайриманқул дар Тоҷикистон. Мо ба муштариёни худ хидматҳои касбӣ дар соҳаи хариду фурӯши амволи манзилӣ пешниҳод мекунем.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Дастаи мо</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "X. РУДАКЁ", role: "Директори генералӣ" },
              { name: "K. АЙНЯ", role: "Мудири фурӯш" },
              { name: "ШОХТЕМУР", role: "Мушовири асосӣ" }
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Connected Projects */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Лоиҳаҳои пайваста</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">paymon_auto</h3>
              <p className="text-gray-600">
                Хидмати махсус барои хариду фурӯши автомобил
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Кучаи Айній</h3>
              <p className="text-gray-600">
                Лоиҳаи сохтмони биноҳои баландошёна
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;