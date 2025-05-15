import { useEffect, useState } from "react";
import "./Header.css";
import MenuToggleButton from "./MenuToggleButton";
import LogoutButton from "./LogoutButton";
import MenuOption from "./MenuOption";
import Modal from "./Modal";
import TertiaryButton from "./TertiaryButton";

type MenuOptionProps = {
  text: string;
  link: string;
};

const menuOptions = {
  estudiante: [
    { text: "Inicio", link: "home" },
    { text: "Justificar inasistencia", link: "justification" },
    { text: "Mis excusas", link: "excuses" },
    { text: "Mis estadísticas", link: "statistics" },
    { text: "Soporte técnico", link: "techsupport" },
  ],
  profesor: [
    { text: "Inicio", link: "home" },
    { text: "Gestión de asistencia", link: "falta" },
    { text: "Consultas", link: "falta" },
    { text: "Registros manuales", link: "falta" },
    { text: "Observaciones", link: "falta" },
    { text: "Listas", link: "falta" },
    { text: "Estadísticas", link: "falta" },
    { text: "Soporte técnico", link: "techsupport" },
  ],
  "tutor-legal": [
    { text: "Inicio", link: "home" },
    { text: "Mis estudiantes", link: "liststudents" },
    { text: "Notificaciones", link: "notifications" },
    { text: "Soporte técnico", link: "techsupport" },
  ],
  coordinador: [
    { text: "Inicio", link: "home" },
    { text: "Alertas", link: "falta" },
    { text: "Programación de asistencia", link: "falta" },
    { text: "Carga de imágenes", link: "falta" },
    { text: "Generación de informes", link: "falta" },
    { text: "Correcciones", link: "falta" },
    { text: "Estadísticas", link: "falta" },
    { text: "Soporte técnico", link: "techsupport" },
  ],
  secretaria: [
    { text: "Inicio", link: "home" },
    { text: "Registro de estudiantes", link: "falta" },
    { text: "Gestión de excusas", link: "falta" },
    { text: "Eliminación de datos", link: "falta" },
    { text: "Generación de informes", link: "falta" },
    { text: "Soporte técnico", link: "techsupport" },
  ],
  rector: [
    { text: "Inicio", link: "home" },
    { text: "Gestiones administrativas", link: "falta" },
    { text: "Control de personal", link: "falta" },
    { text: "Estadísticas generales", link: "falta" },
    { text: "Soporte técnico", link: "techsupport" },
  ],
};

const Header = () => {
  const [role, setRole] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);

  useEffect(() => {
    const storedRole = localStorage.getItem("rol");
    if (storedRole) setRole(storedRole);
  }, []);

  const options = role && menuOptions[role as keyof typeof menuOptions];

  return (
    <>
      <div className="header">
        <MenuToggleButton onClick={() => setMenuOpen(!menuOpen)} />
        <span className="title">FACEVERIFY</span>
        <LogoutButton onClick={() => setLogoutModal(true)} />
      </div>

      <div className={`menu-dropdown ${menuOpen ? 'open' : ''}`}>
        {Array.isArray(options) && options.map((option: MenuOptionProps, index: number) => (
          <MenuOption
            key={index}
            text={option.text}
            link={option.link}
            onClick={() => setMenuOpen(false)}
          />
        ))}
      </div>

      {logoutModal && (
        <Modal
          title="¿Seguro que desea cerrar sesión?"
          content={
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
              <div style={{ width: '100%', maxWidth: '180px' }}>
                <TertiaryButton
                  text="Salir"
                  onClick={() => {
                    localStorage.clear();
                    window.location.href = "login";
                  }}
                />
              </div>
            </div>
          }
          onClose={() => setLogoutModal(false)}
        />
      )}
    </>
  );
};

export default Header;
