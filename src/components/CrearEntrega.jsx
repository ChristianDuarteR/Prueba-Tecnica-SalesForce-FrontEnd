import { useState } from 'react';

const API = 'http://localhost:8080/api/v1';

export default function CrearEntrega({ clienteId, onCreada }) {
    const [descripcion, setDescripcion] = useState('');
    const [direccion,  setDireccion]  = useState('');
    const [estado,     setEstado]     = useState('');
    const [loading,    setLoading]    = useState(false);
    const [error,      setError]      = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true); setError('');
        try {
            const res = await fetch(`${API}/entregas/clientes/${clienteId}`, {
                method : 'POST',
                headers: { 'Content-Type': 'application/json' },
                body   : JSON.stringify({ descripcion, direccion, estado }),
            });
            if (!res.ok) throw new Error('Error al crear entrega');
            await res.json();
            setDescripcion('');
            setDireccion('');
            setEstado('');
            onCreada();
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
            {error && (
                <p style={{ color: '#e74c3c', marginBottom: '0.5rem' }}>{error}</p>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <input
                    type="text"
                    placeholder="Descripción del paquete"
                    value={descripcion}
                    onChange={e => setDescripcion(e.target.value)}
                    required
                    style={inputStyle}
                />

                <input
                    type="text"
                    placeholder="Dirección de entrega"
                    value={direccion}
                    onChange={e => setDireccion(e.target.value)}
                    required
                    style={inputStyle}
                />

                <input
                    type="text"
                    placeholder="Estado (Ej: En tránsito, Entregado)"
                    value={estado}
                    onChange={e => setEstado(e.target.value)}
                    required
                    style={inputStyle}
                />

                <input
                    type="text"
                    readOnly
                    value={`Fecha: ${new Date().toLocaleDateString()}`}
                    style={{
                        ...inputStyle,
                        backgroundColor: '#333',
                        color: '#ccc',
                        fontStyle: 'italic',
                        cursor: 'default'
                    }}
                />

                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        backgroundColor: '#2ecc71',
                        color: '#fff',
                        padding: '0.6rem',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: loading ? 'not-allowed' : 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    {loading ? 'Creando…' : 'Crear Entrega'}
                </button>
            </div>
        </form>
    );
}

const inputStyle = {
    backgroundColor: '#1e1e1e',
    color: '#ffffff',
    padding: '0.6rem',
    borderRadius: '4px',
    border: '1px solid #555',
};
