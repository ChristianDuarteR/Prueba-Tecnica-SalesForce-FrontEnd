export default function ListarEntregas({ entregas }) {
    if (!entregas.length)
        return <p style={{ color: '#888' }}>Sin entregas.</p>;

    return (
        <ul style={{ marginTop: '1rem', paddingLeft: '1rem' }}>
            {entregas.map(e => (
                <li key={e.id} style={item}>
                    <div><strong> Descripción:</strong> {e.descripcion}</div>
                    <div><strong> Dirección:</strong> {e.direccion}</div>
                    <div><strong> Estado:</strong> {e.estado}</div>
                    <div><strong> Fecha:</strong> {new Date(e.fechaEntrega).toLocaleDateString()}</div>
                </li>
            ))}
        </ul>
    );
}

const item = {
    background: '#f9f9f9',
    padding: '0.75rem',
    border: '1px solid #dbe2ef',
    borderRadius: '5px',
    marginBottom: '0.75rem',
};

