import { articles } from '../data/mockData';

export default function Knowledge() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-green-400 font-mono">Knowledge Base</h1>
      <p className="mt-2 text-gray-400 font-mono">// Explore articles and resources about AI concepts</p>

      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <div key={article.id} className="bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700 hover:border-green-500 transition-all duration-300 group">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 text-sm rounded-full bg-gray-900 text-green-400 font-mono">
                  {article.category}
                </span>
                <span className="text-sm text-gray-500 font-mono">{article.readTime}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2 font-mono group-hover:text-green-400">
                {article.title}
              </h3>
              <p className="text-gray-400 text-sm font-mono">
                {article.content}
              </p>
              
              <button className="mt-4 text-green-400 hover:text-green-300 font-mono">
                read_more();
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}