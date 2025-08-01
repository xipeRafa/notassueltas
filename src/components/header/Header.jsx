

import {useState, useRef} from 'react'

import './header.css'


import banner1 from "../../imgs/banner-h-ns.webp";

import publicidad1 from "../../imgs/publicidad1.webp";

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
        // console.log('EL ===>', EL[0].descripcion)
        setModalInfo(EL)
        setModalState(true)
    }


    const[sliceState, setSliceState]=useState(0)
    let prodByPage = 31;
    const[sliceAlert, setSliceAlert]=useState('')


     




 return ( <> 

  <header>

    <h2> BLOG DE NOTICIAS </h2>

      <span>NOTAS SUELTAS </span>
      <br />  
      <br />















      <div className="sombra noticias">
            {arr.slice(sliceState, sliceState + prodByPage).map((el,i)=>(

              <div key={i} className='noticia' onClick={()=>noticiaHandler([el])}>

                <div>
                    <img src={el.img}/>
                </div>

                <div>
                    <div className="titulo">{el.titulo}</div>

                    <div className="descripcion">{el.descripcionHeader.slice(0, 260)+'...'}</div>
                    {/*<span>...</span>*/}

                    <div className="fecha">{el.fecha}</div>
                </div>

              </div>

            ))}
      </div>




       <div className='sliceButtons'>
{/*
            <button className={sliceState === 0 ? 'd-none' : 'button ml-1'} onClick={()=>{
                                                                  if(sliceState > 0){
                                                                      setSliceState(sliceState - prodByPage)
                                                                      window.scrollTo(0,0)
                                                                    }
                                                                  }
                                                                }>
                                                                    ⇦ Anterior
            </button> */} 



            {/*<button className={sliceState === prodByPage || sliceState === 0 ? 'd-none' : 'button ml-1'} onClick={()=>{ 
                                                                                                        setSliceState(0)
                                                                                                        window.scrollTo(0,0) 
                                                                                                    }
                                                                                                  }>
                                                                                                      0
            </button> */}  


          <button className={sliceState === 0 ? 'd-none' : 'button mr-1'} onClick={()=>{ 
                                                                                                        setSliceState(0)
                                                                                                        window.scrollTo(0,0) 
                                                                                                    }
                                                                                                  }>
                                                                                                      inicio
            </button> 



            <button className='button' onClick={()=>{ 
                                    if(arr.length > sliceState + prodByPage){
                                        setSliceState(sliceState + prodByPage) 
                                        window.scrollTo(0,0) 
                                    }else{
                                        setSliceAlert(' No hay mas Notas Sueltas')
                                        setTimeout(()=>{
                                            setSliceAlert('')
                                        },3500)
                                    }
                                }
                    }>
                        Siguiente ⇨ 
            </button>  


            <p className='sliceAlert'>{sliceAlert}</p>


            {/*<p className='sliceButtonsP'>De: {sliceState + 1} a: {arr.length > sliceState + prodByPage ? sliceState + prodByPage : arr.length}</p>*/}
            {/*<p className='sliceButtonsP'>Paginas de {prodByPage} Prod. c/u </p>*/}

        </div>


            {/*disabled={arr.length > sliceState + prodByPage ? false : true}*/}


















          <div className={modalState ? 'modalNoticia' : 'display-none'} ref={divRef}>

                  <div className="publicidad1 sombra" >
                      <img src={publicidad1}  />
                  </div>

                    <div className='publicidadModal1'>
                         <img src={publicidad3} />
                    </div>

                  {modalInfo?.map((el,i)=>(

                  <div key={i} className='ModalNoticiaInfo'>
                      {/*<button className='regresar' onClick={()=>{setModalState(false), scrollToTopDiv()}}> ⇦ REGRESAR</button>*/}


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

                      <img className='publicidad4' src={publicidad4} style={{width:'90%'}}/>

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

                      <img className='banner1' src={banner1} />


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


