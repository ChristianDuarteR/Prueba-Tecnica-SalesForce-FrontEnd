import { useState } from 'react';
const API = 'http://localhost:8080/api/v1';

export default function CrearEntrega({ clienteId, onCreada }) {
    const [descripcion, setDescripcion] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`${API}/entregas/clientes/${clienteId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ descripcion }),
            });
            if (res.ok) {
                await res.json();
                setDescripcion('');
                onCreada();
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
            <input
                placeholder="Descripción"
                value={descripcion}
                onChange={e => setDescripcion(e.target.value)}
                style={{
                    flex: 1,
                    padding: '0.5rem',
                    border: '1px solid #ccc',
                    borderRadius: '5px'
                }}
            />
            <button
                disabled={loading}
                style={{
                    padding: '0.5rem 1rem',
                    background: '#2ecc71',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Crear
            </button>
        </form>
    );
}
