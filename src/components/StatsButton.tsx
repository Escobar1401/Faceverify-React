import './StatsButton.css';
import StatsIcon from '../assets/Stats.svg';

interface StatsButtonProps {
  onClick?: () => void;
}

function StatsButton({ onClick }: StatsButtonProps) {
  return (
    <button className="statsButton" onClick={onClick}>
      <img src={StatsIcon} alt="icon" />
    </button>
  );
}

export default StatsButton;
