import './SecondaryButton.css';

interface SecondaryButtonProps {
  text: string;
  onClick?: () => void;
}

function SecondaryButton({ text, onClick }: SecondaryButtonProps) {
  return (
    <button className='secondary-button' onClick={onClick}>
      <span>{text}</span>
    </button>
  );
}

export default SecondaryButton;