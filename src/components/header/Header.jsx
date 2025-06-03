

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
  };


     const [arr, setArr]=useState([{
        img:n0,
        titulo:'Reacciones y posturas: voces a favor y en contra',
        descripcionHeader:'Las reacciones tras la jornada electoral no se hicieron esperar. Desde el Ejecutivo estatal, el gobernador Alfonso Durazo reconoció el esfuerzo de la ciudadanía que salió a participar y expresó su confianza en que los nuevos ministros aportarán a la transformación de la justicia en el estado. “Es un paso firme hacia una justicia más cercana a la gente”, declaró durante una rueda de prensa posterior al conteo preliminar.',
        descripcion:[
          {d:'El pasado 1 de junio de 2025, México vivió un momento histórico al celebrar por primera vez elecciones para renovar más de 2,600 cargos del Poder Judicial, incluyendo ministros de la Suprema Corte, magistrados y jueces federales y locales. Este proceso, impulsado por la reforma constitucional de 2024, busca abrir las puertas de la justicia a la participación ciudadana y democratizar uno de los poderes más importantes del Estado.'}, 
          {d:'En Sonora, este ejercicio democrático también marcó un precedente: por primera vez, la ciudadanía eligió directamente a tres ministras y ministros del Supremo Tribunal de Justicia del Estado. Estos nuevos representantes judiciales tendrán en sus manos decisiones que impactan directamente a la sociedad, desde controversias legales hasta derechos fundamentales. Sin embargo, el camino hacia este hito estuvo marcado por desafíos, incertidumbres y una participación ciudadana mucho menor a la esperada.'}, 
          {d:'Participación ciudadana: un reto persistente'},
          {d:'A pesar de la magnitud de estas elecciones y de la expectativa generada por la reforma, la participación en Sonora fue notablemente baja. Según datos del Instituto Estatal Electoral y de Participación Ciudadana (IEE Sonora), apenas el 9.27% del padrón electoral acudió a las urnas, lo que equivale a poco más de 216,000 votantes de un universo superior a los 2.3 millones de ciudadanos registrados.'},
          {d:'Este fenómeno de apatía no fue exclusivo de Sonora. A nivel nacional, la participación promedio apenas superó el 13%, confirmando una tendencia preocupante: la falta de información y de confianza en las instituciones públicas aún pesa más que la emoción de un cambio. Muchos ciudadanos no comprendieron del todo la relevancia de estas elecciones ni tuvieron acceso a datos claros sobre las trayectorias y propuestas de los candidatos.'},
          {d:'Organizaciones como Sonora Transparente y el Centro de Estudios Sociales del Norte coinciden en señalar que la falta de campañas efectivas de información y la complejidad del nuevo sistema generaron confusión y desinterés. “No sabíamos quiénes eran los candidatos, cuáles eran sus propuestas, ni qué papel desempeñarían realmente estos jueces electos”, comenta Margarita Córdova, habitante de Hermosillo y promotora comunitaria.'},
          {d:'Resultados preliminares: caras nuevas y retos viejos'},
          {d:'En la contienda para ministras del Supremo Tribunal de Justicia del Estado, Ana Patricia Briceño Torres se colocó en primer lugar con el 32.7% de los votos, seguida por Violeta Ybarra Escalante (20.6%) y María del Carmen Soto Esquer (18.8%). En la categoría masculina, Eduardo Sánchez Moreno obtuvo el 72.3% de las preferencias, superando a José Gilberto Meza Escalante, que alcanzó el 27.6%.'},
          {d:'Estos resultados representan la voluntad de los votantes que, aunque en baja proporción, decidieron apostar por perfiles nuevos en la justicia estatal. Sin embargo, también abren interrogantes sobre la idoneidad de algunos candidatos y el riesgo de que la justicia pueda verse influenciada por intereses políticos o empresariales.'},
          {d:'Una jornada electoral sin contratiempos mayores'},
          {d:'El proceso electoral en Sonora se desarrolló sin incidentes graves. El IEE Sonora informó que se registraron 65 incidencias menores, como apertura tardía de casillas, ausencia de funcionarios y proselitismo en las inmediaciones de los centros de votación. Estos incidentes, aunque lamentables, no afectaron la instalación y funcionamiento de las casillas, que operaron en su totalidad.'},
          {d:'El esfuerzo de las autoridades electorales y de los observadores ciudadanos permitió que, pese a las dudas iniciales, el proceso concluyera sin mayores tropiezos. Sin embargo, el verdadero reto está en lo que sigue: garantizar que los nuevos ministros y ministras respondan a las demandas de justicia de los sonorenses y actúen con independencia y transparencia.'},
          {d:'La reforma judicial en debate'},
          {d:'La reforma que permitió estas elecciones fue aprobada en 2024 con el objetivo de transparentar la impartición de justicia y reducir la opacidad en el Poder Judicial. Según sus defensores, abrir los tribunales a la decisión directa de la ciudadanía permitirá que los jueces respondan a las necesidades reales de la población y se mantengan alejados de acuerdos políticos en la cúpula del poder.'},
          {d:'No obstante, críticos como el jurista Alejandro Valenzuela señalan que la reforma tiene un riesgo claro: la politización de la justicia. “Un juez o magistrado debe ser independiente, no estar sujeto a los vaivenes de la opinión pública o de grupos de interés. Hay que tener cuidado de no convertir la justicia en un espacio de competencia política más”, advierte Valenzuela.'},
          {d:'En el contexto de Sonora, estas preocupaciones se amplifican debido a los problemas estructurales que enfrenta el estado: altos índices de inseguridad, desigualdad social, corrupción y falta de confianza en las instituciones. Si la ciudadanía no percibe un verdadero cambio en el funcionamiento del Poder Judicial, la legitimidad de estos nuevos jueces y magistrados podría verse cuestionada.'},
          {d:'Reacciones y posturas: voces a favor y en contra'},
          {d:'Las reacciones tras la jornada electoral no se hicieron esperar. Desde el Ejecutivo estatal, el gobernador Alfonso Durazo reconoció el esfuerzo de la ciudadanía que salió a participar y expresó su confianza en que los nuevos ministros aportarán a la transformación de la justicia en el estado. “Es un paso firme hacia una justicia más cercana a la gente”, declaró durante una rueda de prensa posterior al conteo preliminar.'},
          {d:'Por otro lado, diversas organizaciones de la sociedad civil advirtieron que estos resultados deben ser acompañados de mecanismos de seguimiento y control. Causa Común Sonora, por ejemplo, llamó a vigilar de cerca la actuación de los jueces electos y a exigirles transparencia y rendición de cuentas, especialmente en casos de alto impacto social como feminicidios, desapariciones forzadas y corrupción en la función pública.'},
          {d:'“Si queremos que la justicia sea verdaderamente ciudadana, necesitamos exigir resultados. La elección es solo el primer paso; ahora viene el trabajo de construcción de confianza y credibilidad”, afirmó la abogada y activista María José Peralta.'},
        ],

        descripcion2:[
          {d:'Voces ciudadanas: entre el Escepticismo y la Esperanza'},
          {d:'En las calles de Hermosillo, Cajeme y Nogales, las opiniones son variadas. Para muchos, la elección pasó casi desapercibida. “Nadie me explicó bien para qué eran estas elecciones, y no conocía a los candidatos”, comentó Francisco Ramírez, comerciante del centro de Hermosillo.'},
          {d:'Sin embargo, hay quienes ven esta apertura como una oportunidad para que los tribunales dejen de ser percibidos como entes lejanos y poco confiables. “Si los jueces saben que tienen que dar la cara a la gente, van a pensarlo dos veces antes de dejarse presionar por intereses políticos”, señaló Alejandra Valdez, estudiante de derecho de la Universidad de Sonora.'},
          {d:'Estas voces reflejan el pulso ciudadano: una mezcla de desconfianza histórica y un atisbo de optimismo frente a un cambio que, aunque modesto en participación, podría sentar bases para una nueva cultura cívica en la impartición de justicia.'},
          {d:'Desafíos por delante: el gran reto de legitimar el Poder Judicial'},
          {d:'Los expertos coinciden en que la baja participación representa un reto enorme para la legitimidad de este proceso. “Sin información clara y con tan poca participación, estos jueces llegan con un mandato ciudadano muy débil”, advierte el politólogo Luis Alberto Reyes.'},
          {d:'Esto implica la necesidad de repensar la manera en que se comunica la relevancia de estas elecciones y de fortalecer la educación cívica desde temprana edad. Además, se vuelve urgente garantizar la independencia de los nuevos ministros: aunque hayan sido electos por voto popular, su función no es la de agradar a las mayorías, sino la de aplicar la ley de forma imparcial.'},
          {d:'En este sentido, la elección judicial también debe entenderse como parte de un proceso más amplio de modernización del sistema político y de reconstrucción de la confianza social en las instituciones. La falta de participación no puede ser ignorada, pero tampoco debe ser excusa para retroceder en este intento de democratizar uno de los poderes más cerrados del país.'},
          {d:'Un camino por recorrer'},
          {d:'Sonora tiene ahora la responsabilidad de demostrar que esta histórica elección no se convertirá en un ejercicio aislado, sino en el inicio de una transformación profunda. Los próximos meses serán decisivos: la actuación de los jueces electos, su independencia y compromiso, y la forma en que la ciudadanía los observe y les exija cuentas serán el verdadero termómetro de este cambio.'},
          {d:'Al mismo tiempo, esta experiencia deja varias lecciones claras para el futuro. La primera: la información es poder. Sin campañas claras y accesibles, la ciudadanía difícilmente se involucrará en procesos tan técnicos y especializados como la elección de ministros judiciales. La segunda: la justicia no puede quedarse solo en discursos. Requiere de acciones, vigilancia y participación constante para convertirse en una herramienta real de equidad y paz social.'},
          {d:'Conclusión: la justicia, un tema de todos'},
          {d:'Las elecciones judiciales de 2025 son un hito que no debe pasar desapercibido. Aunque la participación fue baja y el proceso enfrentó críticas y dudas, representan un parteaguas para la democracia y la justicia en Sonora y en México.'},
          {d:'Ahora, más que nunca, la ciudadanía tiene la oportunidad y la responsabilidad de involucrarse, de exigir resultados y de entender que la justicia es un asunto que nos concierne a todos. Porque, al final del día, el verdadero cambio no depende únicamente de quienes ocupan las sillas del tribunal, sino de la voluntad colectiva de construir una sociedad más justa, donde la ley sea respetada y la dignidad humana sea defendida por encima de todo.'}
        ],
        fecha:'1 de Junio de 2025'
      },{
        img:n1,
        titulo:'TITULO 2',
        descripcionHeader:'2',
        descripcion:[{d:''}],
        descripcion2:'Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion                             Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion                      Descripcion Descripcion Descripcion Descripcion Descripcion                      Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion   Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion',
        fecha:'22 de mayo 2022'
      },{
        img:n2,
        titulo:'TITULO 3',
        descripcionHeader:'3',
        descripcion:[{d:''}],
        descripcion2:'Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion                             Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion                      Descripcion Descripcion Descripcion Descripcion Descripcion                      Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion   Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion',
        fecha:'23 de mayo 2023'
      }
    ])



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
                          return <div key={i} className="descripcionModal">{el.d}</div>
                        })
                      }

                      <img src={publicidad4} style={{width:'80%'}}/>

                      {
                        el?.descripcion2?.map((el,i)=> {
                          return <div key={i} className="descripcionModal">{el.d}</div>
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

          </div>

  </header>

      </> )
 }


