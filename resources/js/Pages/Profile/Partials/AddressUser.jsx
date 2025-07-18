import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

export default function AddressUser({ className = '' }) {
    const [addresses, setAddresses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [form, setForm] = useState({
        street: '',
        city: '',
        state: '',
        postal_code: '',
        country: '',
    });

    const fetchAddresses = async () => {
        try {
            setLoading(true);
            const headers = getHeaders();

            const response = await fetch('/address', {
                method: 'GET',
                headers,
                credentials: 'same-origin',
            });

            const result = await response.json();
            const addressesArray = Array.isArray(result.data)
                ? result.data
                : Array.isArray(result)
                    ? result
                    : [];

            setAddresses(addressesArray);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error al obtener las direcciones.',
                text: error.message,
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAddresses();
    }, []);

    const getHeaders = () => {
        const headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        };

        const token = localStorage.getItem('token');
        if (token) headers.Authorization = `Bearer ${token}`;

        return headers;
    };

    const handleDelete = async (id) => {
        try {
            const confirm = await Swal.fire({
                title: '¿Eliminar dirección?',
                text: 'Esta acción no se puede deshacer.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar',
            });

            if (!confirm.isConfirmed) return;

            const response = await fetch(`/address/${id}`, {
                method: 'DELETE',
                headers: getHeaders(),
                credentials: 'same-origin',
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'No se pudo eliminar la dirección.');
            }

            Swal.fire('Eliminado', 'La dirección fue eliminada correctamente.', 'success');
            fetchAddresses();
        } catch (error) {
            Swal.fire('Error', error.message, 'error');
        }
    };


    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => {
        setForm({ street: '', city: '', state: '', postal_code: '', country: '' });
        setOpenModal(false);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('/address', {
                method: 'POST',
                headers: getHeaders(),
                credentials: 'same-origin',
                body: JSON.stringify(form),
            });

            if (!response.ok) {
                throw new Error('No se pudo registrar la dirección.');
            }

            Swal.fire('Éxito', 'Dirección registrada correctamente.', 'success');
            handleCloseModal();
            fetchAddresses();
        } catch (error) {
            Swal.fire('Error', error.message, 'error');
        }
    };

    return (
        <section className={className}>
            <header className="flex justify-between items-center">
                <div>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Direcciones del usuario
                    </h2>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Actualiza la información de las direcciones de tu cuenta.
                    </p>
                </div>
                <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpenModal}>
                    Nueva dirección
                </Button>
            </header>

            <div className="mt-4">
                {loading ? (
                    <p className="text-white">Cargando direcciones...</p>
                ) : addresses.length > 0 ? (
                    <ul className="pl-0">
                        {addresses.map((addr, idx) => (
                            <li
                                key={idx}
                                className="mb-2 flex justify-between items-center bg-white/10 dark:bg-white/10 text-white p-3 rounded-md"
                            >
                                <span>
                                    {addr.street}, {addr.city}, {addr.state}, {addr.postal_code}, {addr.country}
                                </span>
                                <IconButton onClick={() => handleDelete(addr.id)} sx={{ color: 'white' }}>
                                    <DeleteIcon />
                                </IconButton>
                            </li>
                        ))}

                    </ul>
                ) : (
                    <p className="text-gray-500">No hay direcciones registradas.</p>
                )}
            </div>

            <Dialog open={openModal} onClose={handleCloseModal}>
                <DialogTitle>Nueva dirección</DialogTitle>
                <DialogContent>
                    {['street', 'city', 'state', 'postal_code', 'country'].map((field) => {
                        const labelMap = {
                            street: 'Calle',
                            city: 'Ciudad',
                            state: 'Estado',
                            postal_code: 'Código Postal',
                            country: 'País',
                        };

                        return (
                            <TextField
                                key={field}
                                margin="dense"
                                label={labelMap[field]}
                                name={field}
                                fullWidth
                                variant="outlined"
                                value={form[field]}
                                onChange={handleChange}
                            />
                        );
                    })}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseModal}>Cancelar</Button>
                    <Button onClick={handleSubmit} variant="contained" color="primary">Guardar</Button>
                </DialogActions>
            </Dialog>
        </section>
    );
}
