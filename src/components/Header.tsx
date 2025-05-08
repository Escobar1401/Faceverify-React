import { useEffect, useState } from "react";
import "./header.css";
import MenuToggleButton from "./MenuToggleButton";
import LogoutButton from "./LogoutButton";
import MenuOption from "./MenuOption";

const menuOptions = {
  estudiante: [
    { text: "Inicio", link: "home" },
    { text: "Justificación de inasistencias", link: "excuseform.html" },
    { text: "Excusas", link: "#" },
    { text: "Estadísticas", link: "#" },
    { text: "Soporte técnico", link: "#" },
    { text: "Cerrar sesión", link: "login" },
  ],
  profesor: [
    { text: "Inicio", link: "home" },
    { text: "Gestión de asistencia", link: "#" },
    { text: "Consultas", link: "#" },
    { text: "Registros manuales", link: "#" },
    { text: "Observaciones", link: "#" },
    { text: "Listas", link: "#" },
    { text: "Estadísticas", link: "#" },
    { text: "Cerrar sesión", link: "login" },
  ],
  "tutor-legal": [
    { text: "Inicio", link: "home" },
    { text: "Perfiles de estudiantes", link: "#" },
    { text: "Notificaciones", link: "#" },
    { text: "Gestión de excusas", link: "#" },
    { text: "Listas", link: "#" },
    { text: "Estadísticas", link: "#" },
    { text: "Cerrar sesión", link: "login" },
  ],
  coordinador: [
    { text: "Inicio", link: "home" },
    { text: "Alertas", link: "#" },
    { text: "Programación de asistencia", link: "#" },
    { text: "Carga de imágenes", link: "#" },
    { text: "Generación de informes", link: "#" },
    { text: "Correcciones", link: "#" },
    { text: "Estadísticas", link: "#" },
    { text: "Cerrar sesión", link: "login" },
  ],
  secretaria: [
    { text: "Inicio", link: "home" },
    { text: "Registro de estudiantes", link: "#" },
    { text: "Gestión de excusas", link: "#" },
    { text: "Eliminación de datos", link: "#" },
    { text: "Generación de informes", link: "#" },
    { text: "Cerrar sesión", link: "login" },
  ],
  rector: [
    { text: "Inicio", link: "home" },
    { text: "Gestiones administrativas", link: "#" },
    { text: "Control de personal", link: "#" },
    { text: "Estadísticas generales", link: "#" },
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
        <div className="menu-dropdown">
          {options.map((option, index) => (
            <MenuOption key={index} text={option.text} link={option.link} />
          ))}
        </div>
      )}
    </>
  );
};

export default Header;