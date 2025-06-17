import { Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";






export default function Navbar() {

    const [isActive, setIsActive] = useState(true);

    const windowWidth = window.innerWidth;

    const InWidth = () => {
        if (windowWidth < 999) {
            setIsActive(true);
        }
    };

    return (
        <div className="navBar">

            <div onClick={() => setIsActive(!isActive)} className="hamburger">
                <div className="menu-bar">
                    <div className="uno" />
                    <div className="dos" />
                    <div className="tres" />
                </div>
                <span className='menuX'>{isActive ? "MENU" : "✘"}</span>
            </div>

            <div className={isActive ? "menu " : "menu display"} onClick={InWidth}>


                <Link to="/notassueltas" onClick={()=>window.scrollTo(0,0)}> Inicio </Link>


                <Link to="/notassueltas/CENACULOS" onClick={()=>window.scrollTo(0,0)}> holis </Link>

                {/*<NavLink to="/MLJM/GRUPO" onClick={()=>window.scrollTo(0,0)}> GRUPO </NavLink>


                <NavLink to="/MLJM/CONSAGRACIONES" onClick={()=>window.scrollTo(0,0)}> CONSAGRACIONES </NavLink>

                <NavLink to="/MLJM/MENSAJES" onClick={()=>window.scrollTo(0,0)}> CONTACTO </NavLink>*/}





            </div>
        </div>
    );
}
