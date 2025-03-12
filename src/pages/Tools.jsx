import { tools } from '../data/mockData';

export default function Tools() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-green-400 font-mono">AI Tools Directory</h1>
      <p className="mt-2 text-gray-400 font-mono">Explore our curated collection of cutting-edge AI tools.</p>
      
      <div className="mt-8 space-y-12">
        {tools.map((category) => (
          <div key={category.id} className="bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700">
            <div className="p-6">
              <h2 className="text-xl font-bold text-green-400 font-mono mb-6 flex items-center">
                <span className="text-green-500 mr-2">&gt;</span> {category.category}
              </h2>
              
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.tools.map((tool, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 rounded-lg p-4 border border-gray-700 hover:border-green-500 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <img src={tool.logo} alt={tool.name} className="h-8 w-8" />
                      <a
                        href={tool.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 text-sm font-mono"
                      >
                        visit_site();
                      </a>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2 font-mono group-hover:text-green-400">
                      {tool.name}
                    </h3>
                    
                    <p className="text-gray-400 text-sm font-mono">
                      {tool.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}