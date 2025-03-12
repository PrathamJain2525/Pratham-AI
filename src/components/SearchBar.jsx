import { useState } from 'react';
import { HiSearch } from 'react-icons/hi';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search.query('tools, applications, knowledge')"
          className="w-full px-4 py-2 pl-10 pr-4 text-gray-300 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-green-500 font-mono"
        />
        <HiSearch className="absolute left-3 top-3 text-gray-500" />
      </div>
    </form>
  );
}