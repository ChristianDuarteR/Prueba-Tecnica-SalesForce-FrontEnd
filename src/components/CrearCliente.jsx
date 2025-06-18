import { useState } from 'react';
const API = 'http://localhost:8080/api/v1';

export default function CrearCliente({ onNuevo }) {
    const [nombre, setNombre] = useState('');
    const [email,  setEmail]  = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`${API}/clientes`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nombre, email }),
            });
            if (!res.ok) throw new Error('Error al crear cliente');
            const cliente = await res.json();
            onNuevo(cliente);
            setNombre(''); setEmail('');
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="space-y-3 border p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Crear Cliente</h2>
            <form onSubmit={handleSubmit} className="space-y-2">
                <input
                    placeholder="Nombre"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                    className="border p-2 w-full rounded"
                />
                <input
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="border p-2 w-full rounded"
                />
                <button
                    disabled={loading}
                    className="bg-indigo-600 text-white px-4 py-2 rounded w-full disabled:opacity-50"
                >
                    {loading ? 'Creando…' : 'Crear'}
                </button>
            </form>
        </section>
    );
}
