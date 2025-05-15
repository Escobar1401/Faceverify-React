import './StudentCard.css';
import StatsButton from './StatsButton';
import DocumentButton from './DocumentButton';
import { useNavigate } from 'react-router-dom';
import defaultProfile from '../assets/default-profile.png';

interface StudentCardProps {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
  grupo: string;
  excusas: number;
  estado: string;
  imagen?: string;
}

const StudentCard = ({
  id,
  nombre,
  apellido,
  edad,
  grupo,
  excusas,
  estado,
  imagen
}: StudentCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="student-card">
      <div className="student-image">
        <img src={imagen || defaultProfile} alt="foto estudiante" />
      </div>

      <div className="student-info">
        <h3>{nombre} {apellido}</h3>
        <p>Edad: {edad}</p>
        <p>Grupo: {grupo}</p>
        <p>Excusas: {excusas}</p>
        <p>Estado: {estado}</p>
      </div>

      <div className="student-action-group">
        <div className="student-action-button">
          <StatsButton onClick={() => navigate(`/estadisticas-estudiante/${id}`)} />
        </div>
        <div className="student-action-button">
          <DocumentButton onClick={() => navigate(`/excusas-estudiante/${id}`)} />
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
