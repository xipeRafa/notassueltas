

import {useState, useRef} from 'react'

import './header.css'


import banner1 from "../../imgs/banner-h-ns.webp";

import publicidad2 from "../../imgs/publicidad2.webp";
import publicidad3 from "../../imgs/publicidad3.webp";
import publicidad4 from "../../imgs/publicidad4.webp";
// import Banner from '../banner/Banner'

import {arr} from './arr.jsx'


//console.log(arr)


export default function Header() {


  const divRef = useRef();

const scrollToTopDiv = () => {
    divRef.current.scroll({
      top: 0,
      // behavior: "smooth"
    });

    window.scrollTo(0,0)
  };





    const [modalState, setModalState]=useState(false)



    const[modalInfo, setModalInfo]=useState([{}])


    const noticiaHandler=(EL)=>{
        console.log('EL ===>', EL[0].descripcion)
        setModalInfo(EL)
        setModalState(true)
    }



console.log(modalInfo)
     




 return ( <> 

  <header>
    <h2> BLOG DE NOTICIAS </h2>

      <span>NOTAS SUELTAS </span>
      <br />  
      <hr />
      <br />















      <div className="sombra noticias">
            {arr.map((el,i)=>(

              <div key={i} className='noticia' onClick={()=>noticiaHandler([el])}>

                <div>
                    <img src={el.img}/>
                </div>

                <div>
                    <div className="titulo">{el.titulo}</div>

                    <div className="descripcion">{el.descripcionHeader.slice(0, 290)}...</div>

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

                      {
                        el?.descripcion?.map((el,i)=> {
                          return <div key={i} className="descripcionModal">
                                        {el.d}
                                        {
                                          el.l !== undefined &&
                                            <ul className='ul'>
                                              <li>{el.l}</li>
                                            </ul>
                                        }
                                        
                                        

                              </div>
                        })
                      }

                      <img className='publicidad4' src={publicidad4} style={{width:'80%'}}/>

                      {
                        el?.descripcion2?.map((el,i)=> {
                          return <div key={i} className="descripcionModal">
                                        {el.d}
                                        {
                                          el.l !== undefined &&
                                            <ul className='ul'>
                                              <li>{el.l}</li>
                                            </ul>
                                        }
                                        
                                        

                              </div>
                        })
                      }

                       <p>* Redacción Notas Sueltas *</p>

                      <img src={banner1} />


                      <button className='regresar regresarBottom1' onClick={()=>{setModalState(false), scrollToTopDiv()}}> ⇦ REGRESAR</button>
                </div>

                 ))}

                <div className='publicidadModal2'>
                         <img src={publicidad2}/>
                         <button className='regresar regresarBottom2' onClick={()=>{setModalState(false), scrollToTopDiv()}}> ⇦ REGRESAR</button>
                </div>

                <br />

          </div>

  </header>

      </> )
 }


