import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import DeleteIcon from '@mui/icons-material/Delete';
import { config } from '../../src/config';

const apiBaseUrl = config.apiBaseUrl;

export default function Cart() {
    const [loading, setLoading] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const fetchCartItems = async () => {
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

            const response = await fetch(`${apiBaseUrl}/cart`, {
                method: 'GET',
                headers,
                credentials: 'same-origin',
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData?.message || 'Error al obtener el carrito.');
            }

            const data = await response.json();
            setCartItems(data);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error al obtener los datos.',
                text: error.message,
                confirmButtonColor: '#646464ff',
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCartItems();
    }, []);

    const removeFromCart = async (cartId) => {
        try {
            const response = await fetch(`${apiBaseUrl}/cart/${cartId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                credentials: 'same-origin',
            });

            if (!response.ok) {
                throw new Error('Error al eliminar el producto.');
            }

            setCartItems(prev => prev.filter(item => item.id !== cartId));
            Swal.fire({
                icon: 'success',
                title: 'Producto eliminado',
                timer: 1000,
                showConfirmButton: false,
            });
            window.dispatchEvent(new Event('cartChanged'));
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.message,
                confirmButtonColor: '#646464ff',
            });
        }
    };

    const total = (cartItems || []).reduce((sum, item) => {
        const price = Number(item.product.price);
        return sum + (isNaN(price) ? 0 : price);
    }, 0).toFixed(2);

    const sendToShipment = async () => {
        try {
            const token = localStorage.getItem('token');

            // Paso 1: Obtener direcciones
            const addressRes = await fetch(`${apiBaseUrl}/address`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                credentials: 'same-origin',
            });

            if (!addressRes.ok) throw new Error('Error al obtener direcciones');
            const addresses = await addressRes.json();

            if (!addresses.length) {
                return Swal.fire('Sin direcciones', 'Agrega una dirección primero.', 'warning');
            }

            // Paso 2: Mostrar Swal con select
            const { value: addressId } = await Swal.fire({
                title: 'Selecciona una dirección',
                input: 'select',
                inputOptions: addresses.reduce((opts, addr) => {
                    opts[addr.id] = `${addr.street}, ${addr.city}`;
                    return opts;
                }, {}),
                inputPlaceholder: 'Selecciona una dirección',
                showCancelButton: true,
                confirmButtonText: 'Confirmar',
                cancelButtonText: 'Cancelar',
                confirmButtonColor: '#000',
            });

            if (!addressId) return;

            // Paso 3: Hacer POST a /shipments
            const shipmentRes = await fetch(`${apiBaseUrl}/shipments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token ? `Bearer ${token}` : '',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                    Accept: 'application/json',
                },
                body: JSON.stringify({ address_id: addressId }),
            });

            if (!shipmentRes.ok) {
                const errorData = await shipmentRes.json();
                throw new Error(errorData.message || 'Error al crear el envío');
            }

            const shipment = await shipmentRes.json();

            Swal.fire({
                icon: 'success',
                title: 'Envío creado',
                text: 'Tu pedido fue procesado correctamente.',
                timer: 1500,
                showConfirmButton: false,
            });

            // Opcional: redirigir
            window.location.href = `/shipments/${shipment.id}`;

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error al finalizar compra',
                text: error.message,
                confirmButtonColor: '#646464ff',
            });
        }
    };


    return (
        <AuthenticatedLayout>
            <Head title="Carrito" />

            <div className="max-w-5xl mx-auto px-4 py-10">
                <h1 className="text-3xl font-bold mb-6">Tu Carrito</h1>

                {loading ? (
                    <p className="text-gray-500">Cargando...</p>
                ) : cartItems.length === 0 ? (
                    <p className="text-gray-600">Tu carrito está vacío.</p>
                ) : (
                    <div className="space-y-6">
                        {cartItems.map(item => {
                            const price = Number(item.product.price);
                            return (
                                <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                                    <img
                                        src={item.product.image_path}
                                        alt={item.product.name}
                                        className="w-24 h-24 object-cover rounded-md"
                                    />
                                    <div className="flex-1">
                                        <h2 className="text-lg font-semibold text-gray-800">
                                            {item.product.name}
                                        </h2>
                                        <p className="text-gray-600">${isNaN(price) ? '0.00' : price.toFixed(2)}</p>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        <DeleteIcon />
                                    </button>
                                </div>
                            );
                        })}

                        <div className="flex justify-between items-center border-t pt-4">
                            <p className="text-xl font-semibold">Total:</p>
                            <p className="text-xl font-bold text-gray-800">${total}</p>
                        </div>

                        <button
                            className="w-full mt-4 bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
                            onClick={sendToShipment}
                        >
                            Finalizar compra
                        </button>
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
