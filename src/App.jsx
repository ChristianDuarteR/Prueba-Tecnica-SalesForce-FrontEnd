import { useEffect, useState } from 'react';
import CrearCliente from './components/CrearCliente';
import ClienteCard from './components/ClienteCard';

const API = 'http://localhost:8080/api/v1';

export default function App() {
    const [clientes, setClientes] = useState([]);
    const [busqueda, setBusqueda] = useState('');

    useEffect(() => {
        fetch(`${API}/clientes`)
            .then(res => res.json())
            .then(setClientes)
            .catch(() => setClientes([]));
    }, []);

    const agregarCliente = c => setClientes(prev => [...prev, c]);

    const filtrados = clientes.filter(c =>
        `${c.nombre} ${c.email}`.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <main style={{ maxWidth: '960px', margin: '0 auto', padding: '2rem' }}>
            <h1 style={{
                    fontSize: '2.5rem',
                    color: '#4fc3f7',              // Azul claro (resalta en fondo oscuro)
                    fontWeight: 'bold',
                    letterSpacing: '0.5px',
                    marginBottom: '1rem',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                }}
            >
                Gestión de Clientes Sky Logistics
            </h1>

            <CrearCliente onNuevo={agregarCliente} />
            <input
                type="search"
                placeholder="Buscar cliente..."
                value={busqueda}
                onChange={e => setBusqueda(e.target.value)}
                style={{
                    margin: '1rem 0',
                    padding: '0.5rem',
                    width: '100%',
                    borderRadius: '6px',
                    border: '1px solid #ccc',
                }}
            />

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1rem'
            }}>
                {filtrados.map(c => (
                    <ClienteCard key={c.id} cliente={c} />
                ))}
            </div>

            {filtrados.length === 0 && (
                <p style={{ marginTop: '2rem', color: '#888' }}>No hay clientes.</p>
            )}
        </main>
    );
}
