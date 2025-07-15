import React, { useState } from 'react';
import { MenuIcon, XIcon, ShoppingBagIcon, UserIcon, SearchIcon } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { Dog } from 'lucide-react';

const Navbar = ({ showButtons }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex items-center ml-2.5">
                    <Link href="/" className="flex-shrink-0 flex items-center">
                        <Dog className="h-9 w-auto text-gray-800 dark:text-gray-800 mr-2" />
                        <span className="text-xl font-bold text-black tracking-wider">
                            URBAN<span className="text-gray-500">WAWA</span>
                        </span>
                    </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
                    {showButtons && (
                        <>
                            <Link
                                href={route('register')}
                                className="flex items-center gap-2 px-5 py-2 rounded-full text-sm text-gray-200 bg-gray-800 hover:bg-gray-700 transition"
                            >
                                <UserIcon className="h-5 w-5" />
                                Registrate
                            </Link>

                            <Link
                                href={route('login')}
                                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm text-gray-200 bg-gray-800 hover:bg-gray-700 transition"
                            >
                                <ArrowRightOnRectangleIcon className="h-5 w-5" />
                                Iniciar Sesión
                            </Link>

                        </>
                    )}

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
