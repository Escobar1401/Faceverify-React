import './StudentCard.css';
import EyeButton from './EyeButton';
import defaultProfileImage from '../assets/default-profile.png';

interface StudentCardProps {
  nombre: string;
  apellido: string;
  edad: number;
  grupo: string;
  excusas: number;
  estado: string;
  imagen?: string;
}

const StudentCard = ({
  nombre,
  apellido,
  edad,
  grupo,
  excusas,
  estado,
  imagen
}: StudentCardProps) => {
  return (
    <div className="student-card">
      <div className="student-image">
        <img src={imagen || defaultProfileImage} alt="foto estudiante" />
      </div>
      <div className="student-info">
        <h3>{nombre} {apellido}</h3>
        <p>Edad: {edad}</p>
        <p>Grupo: {grupo}</p>
        <p>Excusas: {excusas}</p>
        <p>Estado: {estado}</p>
      </div>
      <div className="student-action">
        <EyeButton />
      </div>
    </div>
  );
};

export default StudentCard;
