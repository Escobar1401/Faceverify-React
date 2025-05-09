import { Link } from 'react-router-dom';
import './MenuOption.css';

interface MenuOptionProps {
  text: string;
  link: string;
  onClick: () => void;
}

function MenuOption({ text, link, onClick }: MenuOptionProps) {
  return (
    <Link to={`/${link}`} className="menu-option" onClick={onClick}>
      {text}
    </Link>
  );
}


export default MenuOption;
