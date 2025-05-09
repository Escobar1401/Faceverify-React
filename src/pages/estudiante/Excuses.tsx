import './Excuses.css';
import DownloadButton from '../../components/DownloadButton';
import EyeButton from '../../components/EyeButton';

const excusasSimuladas = [
  { id: 1, fecha: '2023-10-01' },
  { id: 2, fecha: '2023-10-02' },
  { id: 3, fecha: '2023-10-03' },
  { id: 4, fecha: '2023-10-04' },
  { id: 5, fecha: '2023-10-05' },
  { id: 6, fecha: '2023-10-06' },
  { id: 7, fecha: '2023-10-07' },
  { id: 8, fecha: '2023-10-08' },
  { id: 9, fecha: '2023-10-09' },
  { id: 10, fecha: '2023-10-10' },
];
// Simulación de excusas
const MisExcusas = () => {
  return (
    <div className="login-container">
      <div className="login-container-form">
        <h2 className="login-container-form-title">Mis Excusas</h2>

        {excusasSimuladas.length > 0 ? (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {excusasSimuladas.map((excusa) => (
              <li key={excusa.id} className="excusa-item" style={{ marginBottom: '20px', borderBottom: '1px solid var(--secondary-background-color)', paddingBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p className="login-form-input-label">📅 Fecha: {excusa.fecha}</p>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <div style={{ width: '32px', height: '32px', cursor: 'pointer' }}>
                    <DownloadButton />
                  </div>
                  <div style={{ width: '32px', height: '32px', cursor: 'pointer' }}>
                    <EyeButton />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No tienes excusas registradas.</p>
        )}
      </div>
    </div>
  );
};

export default MisExcusas;
