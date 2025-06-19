export default function ListarEntregas({ entregas }) {
    if (!entregas.length)
        return <p style={{ color: '#888' }}>Sin entregas.</p>;

    return (
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1rem' }}>
            {entregas.map((e) => (
                <li key={e.id} style={{ marginBottom: '0.75rem', listStyle: 'disc' }}>
                    <div><strong>Fecha:</strong> {new Date(e.fechaEntrega).toLocaleDateString()}</div>
                    <div><strong>Descripción:</strong> {e.descripcion}</div>
                    <div><strong>Estado:</strong> {e.estado}</div>
                    <div><strong>Dirección:</strong> {e.direccion}</div>
                </li>
            ))}
        </ul>
    );
}
