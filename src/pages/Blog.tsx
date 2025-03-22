import React from 'react';

function Blog() {
  const posts = [
    {
      id: 1,
      title: "Чӣ тавр манзили муносиб интихоб кунем?",
      excerpt: "Маслиҳатҳои муфид барои интихоби манзили мувофиқ ба талаботи шумо...",
      date: "2024-02-20",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Бозори манзил дар соли 2024",
      excerpt: "Таҳлили вазъи бозори манзил ва дурнамои он дар соли ҷорӣ...",
      date: "2024-02-15",
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Қарзи манзилӣ: чӣ бояд донист",
      excerpt: "Маълумоти муҳим дар бораи гирифтани қарзи манзилӣ...",
      date: "2024-02-10",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Публикацияҳо</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-green-600 font-semibold hover:text-green-700">
                  Муфассал →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Обуна шавед</h2>
            <p className="text-gray-600 mb-6">
              Барои гирифтани навтарин хабарҳо ва маслиҳатҳо дар бораи бозори манзил
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Почтаи электронии худро ворид кунед"
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Обуна шудан
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;