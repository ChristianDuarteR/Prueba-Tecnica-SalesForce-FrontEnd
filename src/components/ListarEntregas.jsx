export default function ListarEntregas({ entregas }) {
    if (!entregas.length) return <p style={{ color: '#888' }}>Sin entregas.</p>;

    return (
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1rem' }}>
            {entregas.map(e => (
                <li key={e.id}>
                    <strong>{new Date(e.fechaEntrega).toLocaleDateString()}</strong> — {e.descripcion}
                </li>
            ))}
        </ul>
    );
}
