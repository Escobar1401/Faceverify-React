import './CircularButton.css';
import arrow from '../assets/right-arrow.svg';
import { useNavigate } from 'react-router-dom';

function CircularButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/verification');
  };

  return (
    <button className='circle-button' onClick={handleClick}>
      <img src={arrow} alt="arrow" />
    </button>
  );
}

export default CircularButton; 