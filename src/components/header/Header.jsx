import './header.css'
import mom from "../../imgs/mom.webp";
import large from "../../imgs/large.webp";
// import Banner from '../banner/Banner'

export default function Header() {


 return ( <> 

  <header>
<h2>NOTAS SUELTAS</h2>

      <span>* NS *</span>
      <br />  
      <br />

<p>Ready to Build !!</p>


      <div className="sombra imgsHeader">
            <img className="imgsHeader1" src={large} />
            <img className="imgsHeader2" src={mom} />
      </div>

            {/*<Banner />*/}
      <br /> 

            
     
      <p>
"La vida es muy peligrosa. No por las personas que hacen el mal, sino por las que se sientan a ver lo que pasa". Albert Einstein.</p> 

      <p>
"Cuando las oportunidades no llamen a tu puerta, construye una". Milton Berle.</p>

      <p>"La vida es un viaje de autodescubrimiento, atrévete a explorar". Anaïs Nin.</p>

      <p>“La vida es la constante sorpresa de saber que existo". R. Tagore.</p>



  </header>

      </> )
 }


