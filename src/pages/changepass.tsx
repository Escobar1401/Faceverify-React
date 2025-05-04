import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import PrimaryButton from '../components/PrimaryButton';
import './changePass.css';

function ChangePass() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Validación visual solamente (sin backend)
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }
        console.log('Contraseña cambiada exitosamente:', password);
        navigate('/login');
    };

    return (
        <div className="login-container">
            <div className="login-container-title">
                <span>FACEVERIFY</span>
            </div>
            <form className="login-container-form" onSubmit={handleFormSubmit}>
                <div className="login-container-form-title">
                    <span>Cambiar Contraseña</span>
                </div>

                <label className="login-form-input-label">Nueva contraseña</label>
                <input
                    type="password"
                    placeholder="Nueva contraseña"
                    className="login-form-input-field"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <label className="login-form-input-label">Confirmar contraseña</label>
                <input
                    type="password"
                    placeholder="Confirmar contraseña"
                    className="login-form-input-field"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />

                <div className="login-button-container">
                    <PrimaryButton text="Guardar contraseña" />
                </div>
                <div className="login-container-form-forgot-password">
                    <Link to="/login">Regresar...</Link>
                </div>
            </form>
        </div>
    );
}

export default ChangePass;
