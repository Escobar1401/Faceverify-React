import './LogoutButton.css';
import logoutIcon from '../assets/logout.svg';

interface LogoutButtonProps {
  onClick: () => void;
}

function LogoutButton({ onClick }: LogoutButtonProps) {
  return (
    <div className="logoutbutton" onClick={onClick}>
      <img src={logoutIcon} alt="icon" />
    </div>
  );
}

export default LogoutButton;
