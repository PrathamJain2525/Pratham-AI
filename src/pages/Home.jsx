import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold font-mono sm:text-5xl md:text-6xl">
            <span className="block text-gray-300">console.log(</span>
            <span className="block text-green-400">"Welcome to Pratham's AI Hub"</span>
            <span className="block text-gray-300">);</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-400 font-mono sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            // Your central repository for AI knowledge, tools, and real-world applications
          </p>
        </div>

        <div className="mt-10">
          <SearchBar onSearch={(query) => {
            if (query.trim()) {
              console.log('Search executed:', query);
              // Could navigate to a search results page or show modal
            }
          }} />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            to="/tools"
            className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-green-500 transition-all duration-300 group"
          >
            <h2 className="text-xl font-semibold text-green-400 font-mono mb-2 flex items-center">
              <span className="text-gray-500 mr-2">&gt;</span> tools()
            </h2>
            <p className="text-gray-400 text-sm font-mono">
              Explore our curated collection of cutting-edge AI tools and their capabilities.
            </p>
          </Link>

          <Link
            to="/applications"
            className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-green-500 transition-all duration-300 group"
          >
            <h2 className="text-xl font-semibold text-green-400 font-mono mb-2 flex items-center">
              <span className="text-gray-500 mr-2">&gt;</span> applications()
            </h2>
            <p className="text-gray-400 text-sm font-mono">
              Discover real-world AI applications across different industries.
            </p>
          </Link>

          <Link
            to="/knowledge"
            className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-green-500 transition-all duration-300 group"
          >
            <h2 className="text-xl font-semibold text-green-400 font-mono mb-2 flex items-center">
              <span className="text-gray-500 mr-2">&gt;</span> knowledge_base()
            </h2>
            <p className="text-gray-400 text-sm font-mono">
              Access comprehensive resources and articles about AI concepts.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
