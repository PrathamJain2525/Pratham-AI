import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-green-400 font-mono">Pratham_AI</span>
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link to="/tools" className="text-gray-300 hover:text-green-400 px-3 py-2 rounded-md font-mono">
              tools()
            </Link>
            <Link to="/applications" className="text-gray-300 hover:text-green-400 px-3 py-2 rounded-md font-mono">
              applications()
            </Link>
            <Link to="/knowledge" className="text-gray-300 hover:text-green-400 px-3 py-2 rounded-md font-mono">
              knowledge_base()
            </Link>
          </div>

          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-green-400"
            >
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden bg-gray-800 border-t border-gray-700">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/tools"
              className="block px-3 py-2 text-gray-300 hover:text-green-400 font-mono"
              onClick={() => setIsOpen(false)}
            >
              tools()
            </Link>
            <Link
              to="/applications"
              className="block px-3 py-2 text-gray-300 hover:text-green-400 font-mono"
              onClick={() => setIsOpen(false)}
            >
              applications()
            </Link>
            <Link
              to="/knowledge"
              className="block px-3 py-2 text-gray-300 hover:text-green-400 font-mono"
              onClick={() => setIsOpen(false)}
            >
              knowledge_base()
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}