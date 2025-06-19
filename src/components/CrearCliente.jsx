import { useState } from 'react';

const API = 'http://localhost:8080/api/v1';

export default function CrearCliente({ onCreado }) {
    const [nombre, setNombre] = useState('');
    const [email, setEmail]   = useState('');
    const [error, setError]   = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');
        try {
            const res = await fetch(`${API}/clientes`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nombre, email }),
            });
            if (!res.ok) throw new Error('No se pudo crear cliente');

            const nuevoCliente = await res.json();   // 👈 obtenemos el objeto creado
            setNombre('');
            setEmail('');
            onCreado(nuevoCliente);                  // 👈 notificamos al padre
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <input
                placeholder="Nombre"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                required
                style={inputStyle}
            />
            <input
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={inputStyle}
            />
            <button type="submit">Crear Cliente</button>
        </form>
    );
}

const inputStyle = {
    backgroundColor: '#f9f9f9',
    color: '#1a1a2e',
    border: '1px solid #ccc',
    padding: '0.6rem',
    borderRadius: '5px',
};
