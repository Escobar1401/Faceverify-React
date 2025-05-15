import { useParams } from 'react-router-dom';

const EstadisticasEstudianteId = () => {
  const { id } = useParams();

  return (
    <div className="login-container">
      <div className="login-container-form">
        <h2 className="login-container-form-title">Estadísticas del Estudiante</h2>
        <p>Mostrando estadísticas para el estudiante con ID: {id}</p>

        {/* Gráfico simulado */}
        <div
          style={{
            backgroundColor: 'var(--secondary-background-color)',
            height: '200px',
            borderRadius: '8px',
            marginTop: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          [ Gráfico de estadísticas aquí ]
        </div>
      </div>
    </div>
  );
};

export default EstadisticasEstudianteId;
