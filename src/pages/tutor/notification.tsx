const notificaciones = [
    {
        id: 1,
        mensaje: 'Nueva excusa registrada por Juan Gómez.',
        fecha: '2024-06-03 08:45',
        tipo: 'informativa'
    },
    {
        id: 2,
        mensaje: 'Excusa de María Rodríguez fue rechazada.',
        fecha: '2024-06-02 14:20',
        tipo: 'advertencia'
    },
    {
        id: 3,
        mensaje: 'Estudiante Carlos Pérez ha sido marcado como inactivo.',
        fecha: '2024-06-01 17:10',
        tipo: 'alerta'
    }
];

const tipoEstilo = {
    informativa: '#4a90e2',
    advertencia: '#f5a623',
    alerta: '#d0021b'
};

const Notifications = () => {
    return (
        <div className="login-container">
            <div className="login-container-form">
                <h2 className="login-container-form-title">Notificaciones</h2>

                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {notificaciones.map((n) => (
                        <li
                            key={n.id}
                            style={{
                                marginBottom: '15px',
                                backgroundColor: 'var(--secondary-background-color)',
                                padding: '15px',
                                borderLeft: `5px solid ${tipoEstilo[n.tipo as keyof typeof tipoEstilo]}`,
                                borderRadius: '6px'
                            }}
                        >
                            <p style={{ marginBottom: '5px', fontWeight: 'bold' }}>{n.mensaje}</p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--primary-text-color)' }}>{n.fecha}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Notifications;
