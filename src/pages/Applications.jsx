import { industries } from '../data/mockData';

export default function Applications() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-green-400 font-mono">AI Applications</h1>
      <p className="mt-2 text-gray-400 font-mono">// Real-world implementations across industries (2025)</p>

      <div className="mt-8 space-y-8">
        {industries.map((industry) => (
          <div key={industry.id} className="bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700">
            <div className="p-6">
              <h2 className="text-xl font-bold text-green-400 font-mono mb-6 flex items-center">
                <span className="text-green-500 mr-2">&gt;</span> {industry.name}
              </h2>
              
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {industry.applications.map((app, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 rounded-lg p-4 border border-gray-700 hover:border-green-500 transition-all duration-300 group"
                  >
                    <h3 className="font-semibold text-white font-mono group-hover:text-green-400">
                      {app.name}
                    </h3>
                    <div className="mt-2 space-y-2 font-mono">
                      <div className="text-sm">
                        <span className="text-green-400">tool: </span>
                        <span className="text-gray-400">{app.tool}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-green-400">metrics: </span>
                        <span className="text-gray-400">{app.metrics}</span>
                      </div>
                    </div>
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