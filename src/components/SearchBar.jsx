import { useState, useEffect } from 'react';
import { HiSearch, HiX } from 'react-icons/hi';
import { tools, articles, industries } from '../data/mockData';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const searchContent = (searchQuery) => {
    if (!searchQuery.trim()) {
      setResults([]);
      setShowResults(false);
      return;
    }

    const searchTerm = searchQuery.toLowerCase();
    const searchResults = [];

    // Search tools
    tools.forEach((category) => {
      category.tools.forEach((tool) => {
        if (
          tool.name.toLowerCase().includes(searchTerm) ||
          tool.description.toLowerCase().includes(searchTerm) ||
          category.category.toLowerCase().includes(searchTerm)
        ) {
          searchResults.push({
            type: 'tool',
            name: tool.name,
            description: tool.description,
            category: category.category,
            website: tool.website,
            logo: tool.logo,
          });
        }
      });
    });

    // Search applications
    industries.forEach((industry) => {
      industry.applications.forEach((app) => {
        if (
          app.name.toLowerCase().includes(searchTerm) ||
          app.tool.toLowerCase().includes(searchTerm) ||
          industry.name.toLowerCase().includes(searchTerm)
        ) {
          searchResults.push({
            type: 'application',
            name: app.name,
            description: `${app.tool} - ${app.metrics}`,
            category: industry.name,
            tool: app.tool,
            metrics: app.metrics,
          });
        }
      });
    });

    // Search articles
    articles.forEach((article) => {
      if (
        article.title.toLowerCase().includes(searchTerm) ||
        article.content.toLowerCase().includes(searchTerm) ||
        article.category.toLowerCase().includes(searchTerm)
      ) {
        searchResults.push({
          type: 'article',
          name: article.title,
          description: article.content,
          category: article.category,
          readTime: article.readTime,
        });
      }
    });

    setResults(searchResults.slice(0, 8)); // Limit to 8 results
    setShowResults(true);
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      searchContent(query);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [query]);

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setShowResults(false);
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'tool':
        return 'text-blue-400';
      case 'application':
        return 'text-purple-400';
      case 'article':
        return 'text-yellow-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="max-w-2xl mx-auto relative">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search.query('tools, applications, knowledge')"
            className="w-full px-4 py-2 pl-10 pr-10 text-gray-300 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-green-500 font-mono"
          />
          <HiSearch className="absolute left-3 top-3 text-gray-500" />
          {query && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-3 top-3 text-gray-500 hover:text-gray-300"
            >
              <HiX className="h-4 w-4" />
            </button>
          )}
        </div>
      </form>

      {/* Search Results */}
      {showResults && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
          <div className="p-2">
            <div className="text-sm text-gray-400 font-mono mb-2 px-2">
              Found {results.length} result{results.length !== 1 ? 's' : ''}
            </div>
            {results.map((result, index) => (
              <div
                key={index}
                className="p-3 hover:bg-gray-700 rounded-lg cursor-pointer border border-transparent hover:border-green-500 transition-all duration-200"
                onClick={() => {
                  if (result.type === 'tool' && result.website) {
                    window.open(result.website, '_blank');
                  } else if (result.type === 'application') {
                    window.location.href = '/applications';
                  } else if (result.type === 'article') {
                    window.location.href = '/knowledge';
                  }
                  setShowResults(false);
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {result.logo && (
                        <img src={result.logo} alt={result.name} className="h-4 w-4" />
                      )}
                      <h3 className="text-white font-mono text-sm font-semibold">
                        {result.name}
                      </h3>
                      <span className={`text-xs font-mono ${getTypeColor(result.type)}`}>
                        [{result.type}]
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs font-mono line-clamp-2">
                      {result.description}
                    </p>
                    <div className="mt-1 flex items-center gap-3 text-xs">
                      <span className="text-green-400 font-mono">
                        category: {result.category}
                      </span>
                      {result.readTime && (
                        <span className="text-gray-500 font-mono">
                          {result.readTime}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {showResults && results.length === 0 && query.trim() && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50">
          <div className="p-4 text-center">
            <p className="text-gray-400 font-mono text-sm">
              No results found for "{query}"
            </p>
            <p className="text-gray-500 font-mono text-xs mt-1">
              // Try searching for tools, applications, or knowledge articles
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
