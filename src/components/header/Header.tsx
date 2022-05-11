// IMPORT REACT LIBRARIES AND MODULES
import { NavLink } from "react-router-dom";
// IMPORT HOOKS
import { useState } from "react";
// IMPORT LOGO
import Logo from "../../assets/logos/orange_white_logo.png";
// IMPORT CSS
import "./Header.css";

const Header = () => {
   const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);

   return (
      <header className="header">
         <div className="header-container container">
            <NavLink to={"/"} className="header-logo">
               <img src={Logo} alt="Betobe company logo" />
            </NavLink>
            <nav className="navigation-container">
               <NavLink
                  to={"/players"}
                  className={({ isActive }) =>
                     isActive ? "active" : "inactive"
                  }
               >
                  Jugadores
               </NavLink>
               <NavLink
                  to={"players/preseleccionados"}
                  className={({ isActive }) =>
                     isActive ? "active" : "inactive"
                  }
               >
                  Seleccionados
               </NavLink>
               <NavLink
                  to={"players/preeliminados"}
                  className={({ isActive }) =>
                     isActive ? "active" : "inactive"
                  }
               >
                  Descartado
               </NavLink>
               <NavLink
                  to={"/register"}
                  className={({ isActive }) =>
                     isActive ? "active" : "inactive"
                  }
               >
                  Registro
               </NavLink>
            </nav>
            <div
               className={`burger-menu-trigger ${isBurgerOpen ? "open" : ""}`}
               onClick={() => setIsBurgerOpen((value) => !value)}
            >
               <span></span>
               <span></span>
            </div>
         </div>
         <div
            className={`mobile-navigation-container ${
               isBurgerOpen ? "open" : ""
            }`}
         >
            <NavLink to={"/players/all"} onClick={() => setIsBurgerOpen(false)}>
               Jugadores
            </NavLink>
            <NavLink
               to={"/players/preseleccionados"}
               onClick={() => setIsBurgerOpen(false)}
            >
               Seleccionados
            </NavLink>
            <NavLink
               to={"/players/preeliminados"}
               onClick={() => setIsBurgerOpen(false)}
            >
               Descartado
            </NavLink>
            <NavLink to={"/register"} onClick={() => setIsBurgerOpen(false)}>
               Registro
            </NavLink>
         </div>
      </header>
   );
};

export default Header;
