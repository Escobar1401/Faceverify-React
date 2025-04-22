import './CircularButton.css';
import arrow from '../assets/right-arrow.svg';

function CircularButton() {
  return (
    <button className='circle-button'>
        <img src={arrow} alt="arrow" />
    </button>
  );
}

export default CircularButton; 