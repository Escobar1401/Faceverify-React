import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PrimaryButton from '../components/PrimaryButton';
import './login.css';

function Login() {
    const navigate = useNavigate();
    const [role, setRole] = useState('');

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Guardar el tipo de usuario seleccionado
        localStorage.setItem("rol", role);
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
                <select
                    className="login-form-input-field"
                    required
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option value="">Selecciona un rol</option>
                    <option value="rector">Rector</option>
                    <option value="coordinador">Coordinador</option>
                    <option value="secretaria">Secretaria</option>
                    <option value="profesor">Profesor</option>
                    <option value="estudiante">Estudiante</option>
                    <option value="tutor-legal">Tutor Legal</option>
                </select>

                <label className="login-form-input-label">Correo Institucional</label>
                <input type="text" placeholder="Correo institucional" className="login-form-input-field" required />

                <label className="login-form-input-label">Contraseña</label>
                <input type="password" placeholder="********" className="login-form-input-field" required />

                <div className="login-button-container">
                    <PrimaryButton text="Iniciar Sesión" />
                </div>

                <div className="login-container-form-forgot-password">
                    <Link to="/recoverypass">Olvidaste tu contraseña?</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;
