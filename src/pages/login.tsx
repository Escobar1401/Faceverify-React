import PrimaryButton from '../components/PrimaryButton'
import './login.css'

function login() {
    return (
        <div className="login-container">
            <div className="login-container-title">
                <span>FACEVERIFY</span>
            </div>
            <form className="login-container-form">
                <div className="login-container-form-title">
                    <span>Iniciar Sesión</span>
                </div>
                <label className="login-form-input-label">Tipo de usuario</label>
                <select className="login-form-input-field" required>
                    <option value="admin">Administrador</option>
                    <option value="rector">Rector</option>
                    <option value="coordinador">Coordinador</option>
                    <option value="secretaria">Secretaria</option>
                    <option value="profesor">Profesor</option>
                    <option value="estudiante">Estudiante</option>
                    <option value="tutor">Tutor</option>
                </select>
                <label className="login-form-input-label">Correo Institucional</label>
                <input type="text" placeholder="Correo institucional" className="login-form-input-field" required />

                <label className="login-form-input-label">Contraseña</label>
                <input type="password" placeholder="********" className="login-form-input-field" required />

                <div className="login-button-container">
                    <PrimaryButton text="iniciar Sesión" />
                </div>

                <div className="login-container-form-forgot-password">
                    <a href="">¿Olvidaste tu contraseña?</a>
                </div>
            </form>
        </div>
    )
}
export default login
