import './TertiaryButton.css';

interface TertiaryButtonProps {
  text: string;
  onClick?: () => void;
}

function TertiaryButton({ text, onClick }: TertiaryButtonProps) {
  return (
    <button className='tertiary-button' onClick={onClick}>
      <span>{text}</span>
    </button>
  );
}

export default TertiaryButton;