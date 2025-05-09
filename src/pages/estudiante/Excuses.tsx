import './Excuses.css';
import DownloadButton from '../../components/DownloadButton';
import EyeButton from '../../components/EyeButton';

const excusasSimuladas = [
  { id: 1, fecha: '2024-05-01' },
  { id: 2, fecha: '2024-04-17' },
  { id: 3, fecha: '2024-03-12' }
];

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
                  <div style={{ width: '32px', height: '32px' }}>
                    <DownloadButton />
                  </div>
                  <div style={{ width: '32px', height: '32px' }}>
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
