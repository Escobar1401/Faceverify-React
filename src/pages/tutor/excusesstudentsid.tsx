import { useParams } from 'react-router-dom';
import PrimaryButton from '../../components/PrimaryButton';

const excusasSimuladas = [
  { fecha: '2024-05-02', motivo: 'Enfermedad' },
  { fecha: '2024-04-12', motivo: 'Asunto familiar' }
];

const ExcusasEstudianteId = () => {
  const { id } = useParams();

  return (
    <div className="login-container">
      <div className="login-container-form">
        <h2 className="login-container-form-title">Excusas del Estudiante</h2>
        <p>Estudiante ID: {id}</p>

        <ul style={{ listStyle: 'none', padding: 0 }}>
          {excusasSimuladas.map((excusa, index) => (
            <li key={index} style={{ marginBottom: '20px' }}>
              <p className="login-form-input-label">📅 Fecha: {excusa.fecha}</p>
              <p className="login-form-input-label">📝 Motivo: {excusa.motivo}</p>
              <PrimaryButton text="Ver detalle" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExcusasEstudianteId;
