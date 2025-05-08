import { Link } from 'react-router-dom';
import './MenuOption.css';

interface MenuOptionProps {
  text: string;
  link: string;
}

function MenuOption({ text, link }: MenuOptionProps) {
  return (
    <Link to={`/${link}`} className="menu-option">
      {text}
    </Link>
  );
}

export default MenuOption;
