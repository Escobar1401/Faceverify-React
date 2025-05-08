import './MenuButton.css';
import menuIcon from '../assets/menu.svg';

interface MenuToggleButtonProps {
  onClick: () => void;
}

function MenuToggleButton({ onClick }: MenuToggleButtonProps) {
  return (
    <button className="menubutton" onClick={onClick}>
      <img src={menuIcon} alt="Menú" />
    </button>
  );
}

export default MenuToggleButton;
