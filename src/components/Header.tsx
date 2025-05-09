import { useEffect, useState } from "react";
import "./header.css";
import MenuToggleButton from "./MenuToggleButton";
import LogoutButton from "./LogoutButton";
import MenuOption from "./MenuOption";

const menuOptions = {
  estudiante: [
    { text: "Inicio", link: "home" },
    { text: "Justificar inasistencia", link: "justification" },
    { text: "Mis excusas", link: "excuses" },
    { text: "Mis estadísticas", link: "statistics" },
    { text: "Soporte técnico", link: "falta" },
    { text: "Cerrar sesión", link: "login" },
  ],
  profesor: [
    { text: "Inicio", link: "home" },
    { text: "Gestión de asistencia", link: "falta" },
    { text: "Consultas", link: "falta" },
    { text: "Registros manuales", link: "falta" },
    { text: "Observaciones", link: "falta" },
    { text: "Listas", link: "falta" },
    { text: "Estadísticas", link: "falta" },
    { text: "Cerrar sesión", link: "login" },
  ],
  "tutor-legal": [
    { text: "Inicio", link: "home" },
    { text: "Perfiles de estudiantes", link: "falta" },
    { text: "Notificaciones", link: "falta" },
    { text: "Gestión de excusas", link: "falta" },
    { text: "Listas", link: "falta" },
    { text: "Estadísticas", link: "falta" },
    { text: "Cerrar sesión", link: "login" },
  ],
  coordinador: [
    { text: "Inicio", link: "home" },
    { text: "Alertas", link: "falta" },
    { text: "Programación de asistencia", link: "falta" },
    { text: "Carga de imágenes", link: "falta" },
    { text: "Generación de informes", link: "falta" },
    { text: "Correcciones", link: "falta" },
    { text: "Estadísticas", link: "falta" },
    { text: "Cerrar sesión", link: "login" },
  ],
  secretaria: [
    { text: "Inicio", link: "home" },
    { text: "Registro de estudiantes", link: "falta" },
    { text: "Gestión de excusas", link: "falta" },
    { text: "Eliminación de datos", link: "falta" },
    { text: "Generación de informes", link: "falta" },
    { text: "Cerrar sesión", link: "login" },
  ],
  rector: [
    { text: "Inicio", link: "home" },
    { text: "Gestiones administrativas", link: "falta" },
    { text: "Control de personal", link: "falta" },
    { text: "Estadísticas generales", link: "falta" },
    { text: "Cerrar sesión", link: "login" },
  ],
};

const Header = () => {
  const [role, setRole] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedRole = localStorage.getItem("rol");
    if (storedRole) setRole(storedRole);
  }, []);

  const options = role && menuOptions[role as keyof typeof menuOptions];

  return (
    <>
      <div className="header">
        <MenuToggleButton onClick={() => setMenuOpen(!menuOpen)} />
        <span className="header-title">FACEVERIFY</span>
        <LogoutButton />
      </div>

      {menuOpen && options && (
        <div className={`menu-dropdown ${menuOpen ? 'open' : ''}`}>
          {options?.map((option, index) => (
            <MenuOption
              key={index}
              text={option.text}
              link={option.link}
              onClick={() => setMenuOpen(false)}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Header;