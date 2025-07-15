export const fetchData = async (url, setDataCallback, options = {}) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      ...options.headers,
    };

    // Si usas Bearer token, agrégalo aquí
    const token = localStorage.getItem('token');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(url, {
      method: options.method || 'GET',
      headers,
      credentials: 'same-origin', // envía cookies si usas sesión
      ...options, // body, etc.
    });

    if (!response.ok) {
      let errorMessage = 'Error desconocido';
      try {
        const errorData = await response.json();
        errorMessage = errorData.context?.Message || errorData.message || errorMessage;
      } catch {}

      throw new Error(errorMessage);
    }

    const data = await response.json();
    setDataCallback(data);
  } catch (error) {
    console.error('Error al obtener los datos:', error.message);
  }
};
