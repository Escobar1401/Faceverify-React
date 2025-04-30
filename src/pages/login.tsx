import { Link, useNavigate } from 'react-router-dom';
import PrimaryButton from '../components/PrimaryButton';
import './login.css';

function Login() {
    const navigate = useNavigate();

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí puedes agregar lógica de validación o autenticación si es necesario
        navigate('/home');
    };

    return (
        <div className="login-container">
            <div className="login-container-title">
                <span>FACEVERIFY</span>
            </div>
            <form className="login-container-form" onSubmit={handleFormSubmit}>
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
                    <PrimaryButton text="Iniciar Sesión" />
                </div>

                <div className="login-container-form-forgot-password">
                    <Link to="/recoverypass">¿Olvidaste tu contraseña?</Link>
                </div>
            </form>
        </div>

    );
}
export default Login;
