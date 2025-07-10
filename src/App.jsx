

import "./css/App.css";
import publicidad0 from "./imgs/publicidad0.webp";
import publicidad1 from "./imgs/publicidad1.webp";
//import whatsapp from "./imgs/descargar.png";


import { Routes, Route } from "react-router-dom";


import Navbar from "./components/navbar/Navbar";
//import Grupo from "./components/grupo/Grupo";
import Header from "./components/header/Header";
//import Consagraciones from "./components/consagraciones/Consagraciones";

//import Mensajes from "./components/mensaje/Mensaje";


// import Contacto from "./components/contacto/Contacto";
import Publicidad from "./components/cenaculos/Publicidad";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <div className="containerApp">
      <Navbar />

      <div className="publicidad1 sombra" >
        <img src={publicidad1}  />
      </div>

      <Routes>
        <Route path="/notassueltas/" element={<Header />} />
        {/*<Route path="/MLJM/GRUPO" element={<Grupo />} />*/}
        <Route path="/notassueltas/publicidad" element={<Publicidad />} />
     {/* 
        <Route path="/MLJM/CONSAGRACIONES" element={<Consagraciones />} />

        <Route path="/MLJM/MENSAJES" element={<Mensajes />} />*/}


     {/*   <Route path="/RealControlF/licencias" element={<Licencias />} />
        <Route path="/RealControlF/clientes" element={<Clientes />} />

        <Route path="/RealControlF/contacto" element={<Contacto />} />*/}

        <Route path="*" element={<Header />} />

      </Routes>


      <div className="publicidad0" style={{margin:'140px 0'}}>
        <img src={publicidad0} />
      </div>

    {/*  <a href="https://api.whatsapp.com/send?phone=5216621942066&text=¡Hola, Me Comunico desde su Página Web!" target='_blank'>
        <img className='whatsapp' src={whatsapp} alt="whatsapp" />
      </a>*/}

      
      <Footer />
    </div>
  );
}

export default App;
