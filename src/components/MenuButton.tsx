import './MenuButton.css'
import menuIcon from '../assets/menu.svg'

function MenuButton() {
    return (
        <div className="menubutton">
            <img src={menuIcon} alt="icon" />
        </div>
    )
}

export default MenuButton
