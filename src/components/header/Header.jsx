

import {useState} from 'react'

import './header.css'
import mom from "../../imgs/mom.webp";
import large from "../../imgs/large.webp";

import banner1 from "../../imgs/banner-h-ns.webp";

import publicidad2 from "../../imgs/publicidad2.webp";
import publicidad3 from "../../imgs/publicidad3.webp";
import publicidad4 from "../../imgs/publicidad4.webp";
// import Banner from '../banner/Banner'








export default function Header() {

    const [modalState, setModalState]=useState(false)

    const noticiaHandler=(a)=>{
        localStorage.noticia=a
        setModalState(true)
        window.scrollTo(0,0);
    }






 return ( <> 

  <header>
    <h2> BLOG DE NOTICIAS </h2>

      <span>NOTAS SUELTAS </span>
      <br />  
      <br />



      <div className="sombra noticias">

            <div className='noticia' onClick={()=>noticiaHandler('n1')}>
                <div>
                    <img src={large}/>
                </div>
                <div>

                    <div className="titulo">TITULO TITULO TITULO TITULO TITULO TITULO TITULO TITULO TITULO TITULO TITULO TITULO</div>

                    <div className="descripcion">Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion</div>

                    <div className="fecha">Fecha 1</div>
                </div>
            </div>


            <div className='noticia' onClick={()=>noticiaHandler('n2')}>
                <div>
                    <img src={large}/>
                </div>
                <div>

                    <div className="titulo">TITULO TITULO TITULO TITULO TITULO TITULO TITULO TITULO TITULO TITULO TITULO TITULO</div>

                    <div className="descripcion">Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion</div>

                    <div className="fecha">Fecha 2</div>
                </div>
            </div>

           
      </div>


        <div className={modalState ? 'modalNoticia' : 'display-none'}>
                  <div className='publicidadModal1'>
                         <img src={publicidad2} style={{width:'60%'}}/>
                  </div>


                  <div className='ModalNoticiaInfo'>
                      <button className='regresar' onClick={()=>setModalState(false)}> ⇦ REGRESAR</button>

                      <div className="tituloModal">TITULO TITULO TITU
                        LO TITULO TITULO TITULO TITULO TITULO TITULO TITULO TITULO TITULO</div>

                      <div className="fechaModal">Fecha</div>

                      <img src={large} style={{width:'80%'}}/>

                      <div className="descripcionModal">Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion</div>

                      <img src={publicidad4} style={{width:'80%'}}/>

                       <div className="descripcionModal">Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion Descripcion 
                      Descripcion Descripcion Descripcion Descripcion</div>

                      <img src={banner1} style={{width:'80%'}}/>
                </div>

                <div className='publicidadModal2'>
                         <img src={publicidad3} style={{width:'80%'}}/>
                  </div>

                
        </div>

            
      <br /> 

            
     
  



  </header>

      </> )
 }


