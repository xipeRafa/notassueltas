// import { Link } from "react-router-dom";
// import "./navbar.css";
// import { useState } from "react";






// export default function Navbar() {

//     const [isActive, setIsActive] = useState(true);

//     const windowWidth = window.innerWidth;

//     const InWidth = () => {
//         if (windowWidth < 999) {
//             setIsActive(true);
//         }
//     };

//     return (
//         <div className="navBar">

//             <div onClick={() => setIsActive(!isActive)} className="hamburger">

//                 <span className='menuX'>{isActive 
//                     ?   <div className="menu-bar">
//                             <div className="uno" />
//                             <div className="dos" />
//                             <div className="tres" />
//                         </div> 
//                     : "✘"
//                 }</span>

//             </div>

//             <div className={isActive ? "menu " : "menu display"} onClick={InWidth}>


//                 <Link to="/notassueltas" onClick={()=>window.scrollTo(0,0)}> Noticias </Link>


//                 <Link to="/notassueltas/publicidad" onClick={()=>window.scrollTo(0,0)}> Publicidad </Link>

//                 {/*<NavLink to="/MLJM/GRUPO" onClick={()=>window.scrollTo(0,0)}> GRUPO </NavLink>


//                 <NavLink to="/MLJM/CONSAGRACIONES" onClick={()=>window.scrollTo(0,0)}> CONSAGRACIONES </NavLink>

//                 <NavLink to="/MLJM/MENSAJES" onClick={()=>window.scrollTo(0,0)}> CONTACTO </NavLink>*/}





//             </div>
//         </div>
//     );
// }
