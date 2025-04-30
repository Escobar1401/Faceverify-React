import './Header.css';
import MenuButton from '../components/MenuButton';
import LogoutButton from '../components/LogoutButton';

function Header() {
    return (
        <div className="header-container">
            <MenuButton />
            <span className="header-title">FACEVERIFY</span>
            <LogoutButton />

{/*             
            <div className="menu-overlay">
                <div className="menu-content">
                    <nav className="menu-nav">
                        <ul></ul>
                    </nav>
                </div>
            </div> */}
        </div>

    )
}


export default Header; 