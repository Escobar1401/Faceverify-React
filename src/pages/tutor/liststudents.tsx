import StudentCard from '../../components/StudentCard';

const estudiantes = [
    {
        id: 1,
        nombre: 'Juan',
        apellido: 'Gómez',
        edad: 14,
        grupo: '8-A',
        excusas: 3,
        estado: 'Activo',
        imagen: ''
    },
    {
        id: 2,
        nombre: 'María',
        apellido: 'Rodríguez',
        edad: 13,
        grupo: '7-B',
        excusas: 1,
        estado: 'Activo',
        imagen: ''
    },
    {
        id: 3,
        nombre: 'Carlos',
        apellido: 'Pérez',
        edad: 15,
        grupo: '9-C',
        excusas: 0,
        estado: 'Inactivo',
        imagen: ''
    }
];

const ListStudents = () => {
    return (
        <div className="login-container">
            <div className="login-container-form">
                <h2 className="login-container-form-title">Perfiles de Estudiantes</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {estudiantes.map((est) => (
                        <StudentCard key={est.id} {...est} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListStudents;
