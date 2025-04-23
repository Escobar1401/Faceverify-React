import './PrimaryButton.css';

interface PrimaryButtonProps {
    text: string;
}

function PrimaryButton({ text }: PrimaryButtonProps) {
    return (
        <button className='primary-button' onClick={() => {}}>
            <span>{text}</span>
        </button>
    )
}


export default PrimaryButton; 