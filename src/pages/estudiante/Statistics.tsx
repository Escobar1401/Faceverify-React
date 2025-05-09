import './Statistics.css';

const Statistics = () => {
    return (
        <div className="login-container">
            <div className="login-container-form">
                <h2 className="login-container-form-title">Estadísticas</h2>

                {/* Tarjetas de resumen */}
                <div className="stats-card-group">
                    <div className="stats-card">
                        <h3>Inasistencias</h3>
                        <p>12</p>
                    </div>
                    <div className="stats-card">
                        <h3>Excusas registradas</h3>
                        <p>9</p>
                    </div>
                    <div className="stats-card">
                        <h3>Excusas aprobadas</h3>
                        <p>7</p>
                    </div>
                    <div className="stats-card">
                        <h3>Rechazadas</h3>
                        <p>2</p>
                    </div>
                </div>

                <div className="stats-graph">
                    <h3>Distribución mensual de inasistencias</h3>
                    <div className="graph-placeholder">[ Gráfico aquí ]</div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
