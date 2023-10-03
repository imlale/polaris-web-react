import { Portafolio } from "./portafolio"
import { Paquetes as ListadoPaquetes } from "./paquetes"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion"


export function Home () {
    return <motion.div
    initial={{ opacity: 0 }}  
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5}}>
      <article  className="container-fluid">
      <Principal/>
      <Servicios/>
      <Work/>
      <Paquetes/>
      <Clientes/>
      <Contacto/>
    </article>
    </motion.div>
  } 
  

  function Principal () {
    return <section id="inicio">
    <div className="bg-principal">
      <div className="container-fluid">
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-12 col-md-6 d-flex flex-column align-items-md-start my-auto text-center text-md-start">
            <h6 className="mb-4">Diseño de Página Web</h6>
            <h1 className="mb-4"><span>Tu web </span> a un click</h1>  
            <p className="d-block mb-4">Diseñamos e implementamos <br/>tu sitio web a la medida de<br/> tus necesidades.</p>
            <a  href="https://api.whatsapp.com/send?phone=5723171075&text=Estoy%20interesado%20en%20los%20servicios%20de%20Polaris%20Studio.%20%C2%BFPodriamos%20agendar%20una%20cita?" 
                type="button" className="btn btn-primary w-50 m-auto m-md-0">Quiero una Cita</a>
          </div>  
          <div className="col-12 col-md-6 text-center w-50 m-auto"><img src="./img/principal-1.png" alt="" className="w-100"></img></div>     
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row my-5">
        <div className="col-12 col-md-6 text-center mt-5"><img alt="" src="./img/principal-2.png" className="mx-auto"></img></div>   
        <div className="col-12 col-md-6 d-flex flex-column align-items-start pt-5 my-auto">
        <blockquote className="blockquote">
          <p className="d-block " style={{fontSize:"18px"}}>Sin importar cuales sean sus objetivos, nuestra agencia está comprometida con brindarle resultados de alta calidad, ofreciendo sitios web únicos y con diseños vanguardistas codificados con tecnologías modernas. <span className="negrita">Diseñamos y entregamos su portal web con el fin de mejorar la imagen de su marca y su presencia en línea.</span></p>
          <footer className="blockquote-footer mt-5 color-primario negrita">Polaris Studio</footer>
        </blockquote>
        </div>  
            
      </div>
    </div>
    
    
    </section>
  }

  function Servicios () {
    return <section id="servicios">
     <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className="row ">
          <ModuloServicio 
            imagen="./img/servicios-1.png" 
            titulo="Diseño Web"
            descripcion= "La mejor experiencia online gracias a nuestros diseños de calidad"
          />
          <ModuloServicio 
            imagen="./img/servicios-2.png" 
            titulo="Programación"
            descripcion= "Usamos tecnologia innovadora para la construcción de sitios web"
          />
          <ModuloServicio 
            imagen="./img/servicios-3.png" 
            titulo="Seguridad"
            descripcion= "Su sitio protegido con las mejores prácticas de ciberseguridad"
          />
          <ModuloServicio 
            imagen="./img/servicios-4.png"  
            titulo="Social Media"
            descripcion= "Potencie su marca con la integración de redes sociales a su sitio web"
          />
        </div>
      </div> 
    </section>
  }

  function ModuloServicio (props){
    return <div className="service-wrap col-12 col-md-3"> 
      <div className="card-service h-100 text-center negrita">
        <img alt={props.titulo} src={props.imagen}/>
        <h5 className="mt-4 negrita">{props.titulo}</h5>
        <p>{props.descripcion}</p>
      </div>
    </div>

  }
  function Work () {
    return <section id="work">
      <div className="container-fluid p-0">
      <div className="inner-container text-center min-vh-100">
        <h6>Nuestros Clientes</h6>
        <h2>Trabajos Recientes</h2>
        <p className="mt-4 negrita">Conoce nuestros proyectos más recientes y toma la decisión hoy</p>
        <Portafolio/>
      </div>
      <div id="elegirnos" className="min-vh-90">
        <div className="inner-container">
          
          <div className="row">
            <div className="col-12"><h2 className="col-12 col-md-4">¿Por qué elegirnos?</h2></div>
            <div className="col-12 col-md-4">
              <div className="number"><h3>01</h3></div>
              <p>Ofrecemos un servicio de diseño y desarrollo web de vanguardia que nos diferencia de los demás</p>
            </div>
            <div className="col-12 col-md-4">
            <div className="number"><h3>02</h3></div>
              <p>Aseguramos el mejor resultado posible para su iniciativa de diseño e implementación de su sitio web</p>
            </div>
            <div className="col-12 col-md-4">
            <div className="number"><h3>03</h3></div>
              <p>Trabajamos con dedicación para brindar éxito al cliente en cada proyecto asignado</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  }
  function Paquetes () {
    return <section id="paquetes">
      <div className="container-fluid">
        <div className="inner-container">
          <div className="text-center">
            <h6 className="mb-4">Elige un plan</h6>
            <h2 className="mb-5">Paquetes</h2>
            <p className="negrita col-12 col-md-5 mx-auto mb-5 px-3">En esta era digital un sitio web habla por tu negocio. Somos conscientes de ello, y por eso hemos diseñado paquetes para nuestros servicios.</p>
          </div>
          <ListadoPaquetes/>
        </div>
      </div>
    </section>
  }
  function Clientes () {
    return <section id="clientes">
      <div className="container">
      <div className="d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-12 col-md-5 d-flex flex-column align-items-start my-auto">
            <img className="mb-5" alt="" src="./img/clientes-2.png"></img>
            <h2 className="mb-3">Clientes Satisfechos</h2>
            <p className="d-block w-75 color-secundario">No se puede pedir un mejor aliado que Polaris. Son diligentes y entienden cuáles son tus necesidades, saben lo que hacen. No soy el más técnico pero tomaron mis ideas y desarrollaron una solución mejor de la que yo tenía pensada. No me decepcionaron</p>
            <p className="mb-0 negrita">Jonathan Gomez</p>
            <p className="negrita">Junio 27, 2022</p>
          </div>              
          <div className="col-12 col-md-7">
            <div className="img-wrapper">
              <img src="./img/clientes.webp" alt="" style={{width:"85%"}}></img>
            </div>
            <div className="calificacion row align-items-center">
              <div className="icono col-3 text-center"><FontAwesomeIcon icon={faStar} size="3x"/></div>
              <div className="col-9 text-left">
                <h4>4.9</h4>              
                <p>Opiniones hechas por nuestros clientes</p>
              </div>
            </div>
          </div>   
        
        </div>
      </div>
      </div>
    </section>
  }
  function Contacto () {
    return <section id="contacto">
      <div className="container">
        <div className="inner-container">
          
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className=" contenido text-center">
              <div className="overlay"></div>
              <img alt="icono-polaris" src="./img/polaris-icon.png"></img>
              <h3 className="w-50 m-auto negrita mt-5 mb-5 display-6">No esperes más, cotiza con nosotros tu requerimiento</h3>
              <button type="button" className="btn btn-ligth no-hover" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Contáctanos</button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  }


 