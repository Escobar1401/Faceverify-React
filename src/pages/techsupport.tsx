import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Modal from '../components/Modal';

interface FAQ {
    id: number;
    pregunta: string;
    respuesta: string;
}

const preguntas: FAQ[] = [
    {
        id: 1,
        pregunta: "¿Cómo envío una excusa?",
        respuesta: "Debes dirigirte a la sección de 'Justificación de inasistencias' y llenar el formulario."
    },
    {
        id: 2,
        pregunta: "¿Qué hacer si la cámara no me reconoce?",
        respuesta: "Asegúrate de tener los permisos activados y recargar la página. Si el problema persiste, contacta soporte."
    },
    {
        id: 3,
        pregunta: "¿Cómo cambiar mi contraseña?",
        respuesta: "Haz clic en 'Olvidé mi contraseña' en el login e ingresa tu correo para recibir instrucciones."
    }
];

const TechSupport = () => {
    const [query, setQuery] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedFAQ, setSelectedFAQ] = useState<FAQ | null>(null);

    const handleSearch = (value: string) => {
        setQuery(value.toLowerCase());
    };

    const filteredPreguntas = preguntas.filter((p) =>
        p.pregunta.toLowerCase().includes(query)
    );

    const handleOpen = (faq: FAQ) => {
        setSelectedFAQ(faq);
        setModalVisible(true);
    };

    return (
        <div className="login-container">
            <div className="login-container-form">
                <h2 className="login-container-form-title">Soporte Técnico</h2>
                <SearchBar onSearch={handleSearch} />

                <ul style={{ marginTop: '20px', listStyle: 'none', padding: 0 }}>
                    {filteredPreguntas.map((faq) => (
                        <li
                            key={faq.id}
                            onClick={() => handleOpen(faq)}
                            style={{
                                padding: '10px',
                                marginBottom: '10px',
                                borderRadius: '6px',
                                backgroundColor: 'var(--secondary-background-color)',
                                cursor: 'pointer'
                            }}
                        >
                            {faq.pregunta}
                        </li>
                    ))}
                </ul>
            </div>

            {modalVisible && selectedFAQ && (
                <Modal
                    title={selectedFAQ.pregunta}
                    content={<p>{selectedFAQ.respuesta}</p>}
                    onClose={() => setModalVisible(false)}
                />
            )}
        </div>
    );
};

export default TechSupport;
