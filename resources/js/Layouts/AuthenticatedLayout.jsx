import React, { useState, useEffect } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { MenuIcon, XIcon, UserIcon, ShoppingBagIcon, SearchIcon } from 'lucide-react';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { Dog } from 'lucide-react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export default function Layout({ header, children, showButtons = false }) {
    const user = usePage().props.auth?.user;
    const [menuOpen, setMenuOpen] = useState(false);

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        async function fetchCartCount() {
            try {
                const token = localStorage.getItem('token');
                const res = await fetch('/cart/count', {
                    headers: {
                        'Authorization': token ? `Bearer ${token}` : '',
                        'Accept': 'application/json',
                    },
                    credentials: 'same-origin',
                });
                if (!res.ok) throw new Error('Error al obtener el conteo del carrito');
                const data = await res.json();
                setCartCount(data.count || 0);
            } catch (error) {
                console.error(error);
            }
        }
        fetchCartCount();

        const handleCartChange = () => {
            fetchCartCount();
        };

        window.addEventListener('cartChanged', handleCartChange);

        return () => {
            window.removeEventListener('cartChanged', handleCartChange);
        };
    }, []);

    return (
        <div className="min-h-screen bg-[#fefcf9] dark:bg-[#ffffff]">
            <nav className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        {/* Logo */}
                        <div className="flex items-center gap-4">
                            <Link href="/dashboard" className="flex items-center">
                                <Dog className="h-9 w-auto text-gray-800 dark:text-gray-200" />
                                <span className="ml-2 text-xl font-bold text-black dark:text-white tracking-wider">
                                    URBAN<span className="text-gray-500">WAWA</span>
                                </span>
                            </Link>
                        </div>

                        {/* Navegación principal */}
                        <div className="hidden sm:flex items-center gap-4">
                            <NavLink href={route('cart.show')}>
                                <ShoppingCartIcon />
                                {cartCount > 0 && (
                                    <span className="ml-2 inline-block bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                                        {cartCount}
                                    </span>
                                )}
                            </NavLink>
                            <NavLink href={route('shipments.show')}>
                                <LocalShippingIcon />
                            </NavLink>

                            {user ? (
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button className="flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md focus:outline-none">
                                            {user.name}
                                            <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Perfil</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Cerrar sesión
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            ) : showButtons && (
                                <>
                                    <Link
                                        href={route('register')}
                                        className="flex items-center gap-2 px-4 py-2 rounded-full text-sm text-gray-200 bg-gray-800 hover:bg-gray-700 transition"
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

                        {/* Botón móvil */}
                        <div className="sm:hidden">
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-700 focus:outline-none"
                            >
                                {menuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Menú móvil */}
                {menuOpen && (
                    <div className="sm:hidden bg-white dark:bg-gray-800 border-t dark:border-gray-700 py-3 px-4">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                            Dashboard
                        </ResponsiveNavLink>

                        {user ? (
                            <>
                                <ResponsiveNavLink href={route('profile.edit')}>
                                    Perfil
                                </ResponsiveNavLink>
                                <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                    Cerrar sesión
                                </ResponsiveNavLink>
                            </>
                        ) : showButtons && (
                            <>
                                <ResponsiveNavLink href={route('register')}>
                                    Registrate
                                </ResponsiveNavLink>
                                <ResponsiveNavLink href={route('login')}>
                                    Iniciar sesión
                                </ResponsiveNavLink>
                            </>
                        )}
                    </div>
                )}
            </nav>

            {/* Header opcional */}
            {header && (
                <header className="bg-white dark:bg-gray-800 shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            {/* Contenido principal */}
            <main>{children}</main>
        </div>
    );
}
