import './EyeButton.css'
import eyeIcon from '../assets/eye.svg'

function EyeButton() {
    return (
        <div className="EyeButton">
            <img src={eyeIcon} alt="icon" />
        </div>
    )
}

export default EyeButton