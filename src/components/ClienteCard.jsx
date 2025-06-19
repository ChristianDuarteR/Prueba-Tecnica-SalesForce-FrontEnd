import { useEffect, useState } from 'react';
import CrearEntrega from './CrearEntrega';
import ListarEntregas from './ListarEntregas';

const API = 'http://localhost:8080/api/v1';

export default function ClienteCard({ cliente }) {
    const [entregas, setEntregas] = useState([]);
    const [loading, setLoading] = useState(false);
    const [expand, setExpand] = useState(false);

    useEffect(() => {
        fetchEntregas();
    }, []);

    async function fetchEntregas() {
        setLoading(true);
        try {
            const res = await fetch(`${API}/entregas/clientes/${cliente.id}`);
            if (!res.ok) throw new Error();
            setEntregas(await res.json());
        } finally {
            setLoading(false);
        }
    }

    return (
        <div style={{
            background: '#2e2e2e',
            color: '#f0f0f0',
            border: '1px solid #444',
            borderRadius: '10px',
            padding: '1rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}>

            <div style={{ marginBottom: '0.5rem' }}>
                <strong>{cliente.nombre}</strong><br />
                <small style={{ color: '#777' }}>{cliente.email}</small>
            </div>

            <CrearEntrega clienteId={cliente.id} onCreada={fetchEntregas} />

            <button
                onClick={() => setExpand(e => !e)}
                style={{
                    marginTop: '0.5rem',
                    fontSize: '0.9rem',
                    background: '#444',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '0.25rem 0.5rem',
                    cursor: 'pointer'
                }}
            >
                {expand ? 'Ocultar entregas' : 'Ver entregas'}
            </button>

            {expand && (
                loading ? <p>Cargando…</p> : <ListarEntregas entregas={entregas} />
            )}
        </div>
    );
}
