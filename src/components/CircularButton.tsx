import './CircularButton.css';
import arrow from '../assets/right-arrow.svg';
import { useNavigate } from 'react-router-dom';

interface CircularButtonProps {
  to: string; // Prop para especificar la ruta
}

function CircularButton({ to }: CircularButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to); // Navega a la ruta especificada en el prop
  };

  return (
    <button className='circle-button' onClick={handleClick}>
      <img src={arrow} alt="arrow" />
    </button>
  );
}

export default CircularButton;