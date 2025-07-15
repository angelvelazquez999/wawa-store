import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import Table from '@/Components/Table';
import Swal from 'sweetalert2';
import { Typography, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/system'
import { config } from '../../src/config';
import { Link } from '@inertiajs/react';

const apiBaseUrl = config.apiBaseUrl

export default function Dashboard() {

    const [loading, setLoading] = useState(false);
    const [featuredProducts, setFeaturedProducts] = useState([]);

    // const featuredProducts = [{
    //     id: 1,
    //     name: 'Urban Cargo Pants',
    //     price: 89.99,
    //     image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=600&q=80'
    // }, {
    //     id: 2,
    //     name: 'Street Graphic Tee',
    //     price: 34.99,
    //     image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=600&q=80'
    // }, {
    //     id: 3,
    //     name: 'Oversized Hoodie',
    //     price: 64.99,
    //     image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=600&q=80'
    // }, {
    //     id: 4,
    //     name: 'Urban Sneakers',
    //     price: 119.99,
    //     image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=600&q=80'
    // },
    // {
    //     id: 5,
    //     name: "Vintage Denim Jacket",
    //     price: 95.50,
    //     image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=600&q=80"
    // },
    // {
    //     id: 6,
    //     name: "Classic Tracksuit",
    //     price: 120.00,
    //     image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=600&q=80"
    // },
    // {
    //     id: 7,
    //     name: "Shoes with Retro Vibes",
    //     price: 75.00,
    //     image: "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg"
    // },
    // {
    //     id: 8,
    //     name: "Backpack for Urban Adventures",
    //     price: 59.99,
    //     image: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg"
    // }]

    const fetchDataTable = async () => {
        try {
            setLoading(true);

            const headers = {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                Authorization: '',
            };

            const token = localStorage.getItem('token');
            if (token) {
                headers.Authorization = `Bearer ${token}`;
            }

            const response = await fetch(`${apiBaseUrl}/products`, {
                method: 'GET',
                headers,
                credentials: 'same-origin',
            });

            if (!response.ok) {
                let errorMessage = 'Error al obtener la dirección.';
                try {
                    const errorData = await response.json();
                    errorMessage = errorData.context?.Message || errorData.message || errorMessage;
                } catch { }

                throw new Error(errorMessage);
            }

            const data = await response.json();
            setFeaturedProducts(data.data);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error al obtener los datos.',
                text: error.message,
                showConfirmButton: true,
                confirmButtonColor: '#646464ff',
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDataTable();
    }, []);

    const addToCart = async (product) => {
        try {
            const csrf = document
                .querySelector('meta[name="csrf-token"]')
                ?.getAttribute('content');

            const token = localStorage.getItem('token'); // si usas bearer

            const response = await fetch('/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'X-CSRF-TOKEN': csrf,
                    ...(token ? { Authorization: `Bearer ${token}` } : {}),
                },
                body: JSON.stringify({ product_id: product.id }),
                credentials: 'same-origin',
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Error al añadir al carrito');
            }
            window.dispatchEvent(new Event('cartChanged'));
            Swal.fire({
                icon: 'success',
                title: 'Producto añadido',
                text: `${product.name} se añadió al carrito`,
                timer: 1500,
                showConfirmButton: false,
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.message || 'No se pudo añadir al carrito',
                confirmButtonColor: '#9a9a9aff',
            });
        }
    };



    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />

            <div className="py-12 px-4 sm:px-6 lg:px-8 bg-[#ffffff]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredProducts?.map(product => (
                            <div key={product.id} className="group shadow-md rounded-lg overflow-hidden bg-white">
                                <div className="aspect-w-1 aspect-h-1 bg-gray-100">
                                    <img
                                        src={product.image_path}
                                        alt={product.name}
                                        className="h-80 w-full object-cover object-center transition-opacity duration-300 group-hover:opacity-80"
                                    />
                                </div>
                                <div className="p-4">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-sm font-medium text-gray-800">{product.name}</h3>
                                        <p className="text-sm font-semibold text-gray-900">${product.price}</p>
                                    </div>
                                    <button
                                        onClick={() => addToCart(product)}
                                        className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
                                    >
                                        Añadir al Carrito
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
