import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon, ShoppingBagIcon, UserIcon, SearchIcon } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-black tracking-wider">
                URBAN<span className="text-gray-500">WAWA</span>
              </span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="border-transparent text-gray-900 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Home
              </Link>
              <Link to="/shop" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Shop
              </Link>
              <Link to="/collections" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Collections
              </Link>
              <Link to="/about" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                About
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none">
              <SearchIcon className="h-5 w-5" />
            </button>
            <Link to="/signin" className="p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none">
              <UserIcon className="h-5 w-5" />
            </Link>
            <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none">
              <ShoppingBagIcon className="h-5 w-5" />
              <span className="absolute top-3 right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-black rounded-full">
                0
              </span>
            </button>
          </div>
          <div className="flex items-center sm:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none">
              {isMenuOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/shop" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300" onClick={() => setIsMenuOpen(false)}>
              Shop
            </Link>
            <Link to="/collections" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300" onClick={() => setIsMenuOpen(false)}>
              Collections
            </Link>
            <Link to="/about" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to="/signin" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300" onClick={() => setIsMenuOpen(false)}>
              Sign In
            </Link>
          </div>
        </div>}
    </nav>;
};
export default Navbar;
