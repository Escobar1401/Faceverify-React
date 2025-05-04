import { useEffect, useState } from "react";
import "./header.css";
import MenuButton from "./MenuButton";
import LogoutButton from "./LogoutButton";

const menuOptions = {
    estudiante: [
        { text: "Inicio", link: "home" },
        { text: "Justificación de inasistencias", link: "excuseform.html" },
        { text: "Excusas", link: "#" },
        { text: "Estadísticas", link: "#" },
        { text: "Soporte técnico", link: "#" },
        { text: "Cerrar sesión", link: "#" },
    ],
    profesor: [
        { text: "Inicio", link: "home" },
        { text: "Gestión de asistencia", link: "#" },
        { text: "Consultas", link: "#" },
        { text: "Registros manuales", link: "#" },
        { text: "Observaciones", link: "#" },
        { text: "Listas", link: "#" },
        { text: "Estadísticas", link: "#" },
        { text: "Cerrar sesión", link: "#" },
    ],
    "tutor-legal": [
        { text: "Inicio", link: "home" },
        { text: "Perfiles de estudiantes", link: "#" },
        { text: "Notificaciones", link: "#" },
        { text: "Gestión de excusas", link: "#" },
        { text: "Listas", link: "#" },
        { text: "Estadísticas", link: "#" },
        { text: "Cerrar sesión", link: "#" },
    ],
    coordinador: [
        { text: "Inicio", link: "home" },
        { text: "Alertas", link: "#" },
        { text: "Programación de asistencia", link: "#" },
        { text: "Carga de imágenes", link: "#" },
        { text: "Generación de informes", link: "#" },
        { text: "Correcciones", link: "#" },
        { text: "Estadísticas", link: "#" },
        { text: "Cerrar sesión", link: "#" },
    ],
    secretaria: [
        { text: "Inicio", link: "home" },
        { text: "Registro de estudiantes", link: "#" },
        { text: "Gestión de excusas", link: "#" },
        { text: "Eliminación de datos", link: "#" },
        { text: "Generación de informes", link: "#" },
        { text: "Cerrar sesión", link: "#" },
    ],
    rector: [
        { text: "Inicio", link: "home" },
        { text: "Alertas", link: "#" },
        { text: "Programación de asistencia", link: "#" },
        { text: "Carga de imágenes", link: "#" },
        { text: "Generación de informes", link: "#" },
        { text: "Correcciones", link: "#" },
        { text: "Estadísticas", link: "#" },
        { text: "Cerrar sesión", link: "#" },
    ],
};

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [userRole] = useState<keyof typeof menuOptions>(localStorage.getItem("userRole") as keyof typeof menuOptions || "estudiante");
  
    useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const overlay = document.getElementById("menuOverlay") as HTMLElement | null;
      const button = document.getElementById("openMenu") as HTMLElement | null;
      if (overlay && !overlay.contains(e.target as Node) && button && !button.contains(e.target as Node)) {
        setMenuActive(false);
      }
    };
  
      document.addEventListener("click", handleClickOutside);
  
      const currentPage = window.location.pathname.split("/").pop();
      const allowedPages = menuOptions[userRole].map((opt) => opt.link.split("/").pop());
      if (!allowedPages.includes(currentPage)) {
        alert("No tienes permiso para acceder a esta página.");
        window.location.href = "home";
      }
  
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, [userRole]);
  
    interface MenuOption {
      text: string;
      link: string;
    }


    const checkPermission = (link: string): boolean => {
      const allowed: string[] = menuOptions[userRole].map((opt: MenuOption) => opt.link);
      if (!allowed.includes(link)) {
        alert("No tienes permiso para acceder a esta funcionalidad.");
        return false;
      }
      return true;
    };
  
    const handleLinkClick = (link: string, e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
      if (!checkPermission(link)) {
        e.preventDefault();
      } else {
        setMenuActive(false);
      }
    };

    return (
        <>
          <header className="top-bar">
            <div id="openMenu" onClick={() => setMenuActive(!menuActive)}>
              <MenuButton />
            </div>
            <h1 className="title">FACEVERIFY</h1>
            <div onClick={() => (window.location.href = "login.html")}>
              <LogoutButton />
            </div>
          </header>
    
          <div className={`menu-overlay ${menuActive ? "active" : ""}`} id="menuOverlay">
            <div className="menu-content">
              <nav className="menu-nav">
                <ul>
                  {menuOptions[userRole].map((option, index) => (
                    <li key={index}>
                      <a href={option.link} onClick={(e) => handleLinkClick(option.link, e)}>
                        {option.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </>
      );
    };

export default Header;
