import { Link } from 'react-router-dom';
import PrimaryButton from '../components/PrimaryButton';
import './recoverypass.css';

function recoverypass() {
    return (
        <div className="recoverypass-container">
            <div className="recoverypass-container-title">
                <span>FACEVERIFY</span>
            </div>
            <form className="recoverypass-container-form">
                <div className="recoverypass-container-form-title">
                    <span>Recuperar contraseña</span>
                </div>

                <label className="recoverypass-form-input-label">Correo Institucional</label>
                <input type="text" placeholder="Correo institucional" className="recoverypass-form-input-field" required />

                <div className="recoverypass-button-container">
                    <PrimaryButton text="Enviar enlace" />
                </div>

                <div className="recoverypass-container-form-forgot-password">
                    <Link to="/login">Regresar</Link>
                </div>
            </form>
        </div>
    );
}

export default recoverypass;