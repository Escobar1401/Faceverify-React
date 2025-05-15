import './DocumentButton.css';
import documentIcon from '../assets/document.svg';

interface DocumentButtonProps {
  onClick?: () => void;
}

function DocumentButton({ onClick }: DocumentButtonProps) {
  return (
    <button className="documentButton" onClick={onClick}>
      <img src={documentIcon} alt="icon" />
    </button>
  );
}

export default DocumentButton;
