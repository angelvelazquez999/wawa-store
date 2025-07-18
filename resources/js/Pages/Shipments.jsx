import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import DeleteIcon from '@mui/icons-material/Delete';
import { config } from '../../src/config';
import { Card, CardContent } from '@mui/material';


const apiBaseUrl = config.apiBaseUrl;

export default function Shipments() {
    const [loading, setLoading] = useState(false);
    const [shipments, setShipments] = useState([]);

    const fetchShipments = async () => {
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

            const response = await fetch(`${apiBaseUrl}/shipments`, {
                method: 'GET',
                headers,
                credentials: 'same-origin',
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData?.message || 'Error al obtener los envios.');
            }

            const data = await response.json();
            setShipments(data);
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
        fetchShipments();
    }, []);







    return (
        <AuthenticatedLayout>
            <Head title="Carrito" />

            <div className="grid gap-4 p-4">
                {shipments.map((shipment) => (
                    <Card key={shipment.id} className="shadow-md">
                        <CardContent>
                            <h2 className="text-lg font-semibold">Envío #{shipment.id}</h2>
                            <p className="text-sm text-gray-600">Estatus: {shipment.status}</p>
                            <p className="text-sm text-gray-600">Total: ${shipment.total}</p>

                            {shipment.address && (
                                <div className="mt-2 text-sm">
                                    <strong>Dirección:</strong> {shipment.address.street}, {shipment.address.city}
                                </div>
                            )}

                            <div className="mt-2">
                                <strong>Productos:</strong>
                                <ul className="list-disc list-inside text-sm">
                                    {shipment.products.map(product => (
                                        <li key={product.id}>
                                            {product.name} (${product.price})
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
