import './MenuButton.css';
import menuIcon from '../assets/menu.svg';
import { Link } from 'react-router-dom';

interface MenuButtonProps {
  text: string;
  link: string;
}

function MenuButton({ text, link }: MenuButtonProps) {
  return (
    <Link to={`/${link}`} className="menubutton">
      <img src={menuIcon} alt="icon" />
      <span>{text}</span>
    </Link>
  );
}

export default MenuButton;
