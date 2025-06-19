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
            backgroundColor: '#ffffff',
            border: '1px solid #dbe2ef',
            borderRadius: '10px',
            padding: '1rem',
            boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
            color: '#1a1a2e',

        }}>


            <div style={{ marginBottom: '0.5rem' }}>
                <strong>{cliente.nombre}</strong><br />
                <small style={{ color: '#777' }}>{cliente.email}</small>
            </div>

            <CrearEntrega clienteId={cliente.id} onCreada={fetchEntregas} />

            <button
                onClick={() => setExpand(e => !e)}
                style={{
                    backgroundColor: '#ffffff',
                    color: '#3f72af',
                    border: '1px solid #3f72af',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '4px',
                    fontWeight: 'bold',
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
