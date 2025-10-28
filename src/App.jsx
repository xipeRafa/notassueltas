


import "./css/App.css";
import publicidad0 from "./imgs/pppublicidad0.webp";
import publicidad1 from "./imgs/pppublicidad1.webp"; /// cambiar aqui.  p
//import whatsapp from "./imgs/descargar.png";


// import { Routes, Route } from "react-router-dom";


// import Navbar from "./components/navbar/Navbar";

import Header from "./components/header/Header";


//import Mensajes from "./components/mensaje/Mensaje";


import Publicidad from "./components/publicidad/Publicidad";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <div className="containerApp">
      {/*<Navbar />*/}

      <div className="publicidad1 sombra" >
        <img src={publicidad1}  /> 
      </div>
{/*
      <Routes>
        <Route path="/notassueltas/" element={<Header />} />

        <Route path="/notassueltas/publicidad" element={<Publicidad />} />

        <Route path="*" element={<Header />} />

      </Routes>*/}

<Header />
      <div className="publicidad0">
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
