

import {useState, useRef} from 'react'

import './header.css'
import n0 from "../../imgs/noticias/n0.webp";
import n1 from "../../imgs/noticias/n1.webp";
import n2 from "../../imgs/noticias/n2.webp";

import banner1 from "../../imgs/banner-h-ns.webp";

import publicidad2 from "../../imgs/publicidad2.webp";
import publicidad3 from "../../imgs/publicidad3.webp";
import publicidad4 from "../../imgs/publicidad4.webp";
// import Banner from '../banner/Banner'







export default function Header() {


  const divRef = useRef();

const scrollToTopDiv = () => {
    divRef.current.scroll({
      top: 0,
      // behavior: "smooth"
    });

    window.scrollTo(0,0)
    console.log('sss')
  };



     const [arr, setArr]=useState([{
        img:n0,
        titulo:'TITULO 1',
        descripcion:'Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion                             Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion                      Descripcion Descripcion Descripcion Descripcion Descripcion                      Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion   Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion',
        descripcion2:'Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion                             Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion                      Descripcion Descripcion Descripcion Descripcion Descripcion                      Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion   Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion',
        fecha:'21 de mayo 2021'
      },{
        img:n1,
        titulo:'TITULO 2',
        descripcion:'Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion                             Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion                      Descripcion Descripcion Descripcion Descripcion Descripcion                      Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion   Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion',
        descripcion2:'Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion                             Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion                      Descripcion Descripcion Descripcion Descripcion Descripcion                      Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion   Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion',
        fecha:'22 de mayo 2022'
      },{
        img:n2,
        titulo:'TITULO 3',
        descripcion:'Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion                             Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion                      Descripcion Descripcion Descripcion Descripcion Descripcion                      Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion   Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion',
        descripcion2:'Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion                             Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion                      Descripcion Descripcion Descripcion Descripcion Descripcion                      Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion   Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion',
        fecha:'23 de mayo 2023'
      }
    ])



    const [modalState, setModalState]=useState(false)



    const[modalInfo, setModalInfo]=useState([{}])


    const noticiaHandler=(EL)=>{
        setModalInfo(EL)
        setModalState(true)
    }




     




 return ( <> 

  <header>
    <h2> BLOG DE NOTICIAS </h2>

      <span>NOTAS SUELTAS </span>
      <br />  
      <br />



      <div className="sombra noticias">
            {arr.map((el,i)=>(
              <div key={i} className='noticia' onClick={()=>noticiaHandler([el])}>
                <div>
                    <img src={el.img}/>
                </div>
                <div>

                    <div className="titulo">{el.titulo}</div>

                    <div className="descripcion">{el.descripcion}</div>

                    <div className="fecha">{el.fecha}</div>
                </div>
              </div>

            ))}
      </div>


          <div className={modalState ? 'modalNoticia' : 'display-none'} ref={divRef}>

                    <div className='publicidadModal1'>
                         <img src={publicidad3} />
                          </div>

                  {modalInfo?.map((el,i)=>(

                  <div key={i} className='ModalNoticiaInfo'>
                      <button className='regresar' onClick={()=>{setModalState(false), scrollToTopDiv()}}> ⇦ REGRESAR</button>

                      <div className="tituloModal">{el.titulo}</div>

                      <div className="fechaModal">{el.fecha}</div>

                      <img src={el.img} style={{width:'90%'}} className='sombra'/>

                      <div className="descripcionModal">{el.descripcion}</div>

                      <img src={publicidad4} style={{width:'80%'}}/>

                       <div className="descripcionModal">{el.descripcion2}</div>

                      <img src={banner1} />

                      <button className='regresar regresarBottom1' onClick={()=>{setModalState(false), scrollToTopDiv()}}> ⇦ REGRESAR</button>
                </div>

                 ))}

                <div className='publicidadModal2'>
                         <img src={publicidad2}/>
                         <button className='regresar regresarBottom2' onClick={()=>{setModalState(false), scrollToTopDiv()}}> ⇦ REGRESAR</button>
                </div>

          </div>

  </header>

      </> )
 }


