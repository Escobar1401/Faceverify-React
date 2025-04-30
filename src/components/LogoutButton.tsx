import './LogoutButton.css'
import logoutIcon from '../assets/logout.svg'

function LogoutButton() {
    return (
        <div className="logoutbutton"> 
            <img src={logoutIcon} alt="icon" />
        </div>
    )
}

export default LogoutButton