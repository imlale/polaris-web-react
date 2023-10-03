

const listaPaquetes = [
    {
        imagen: "./img/emoji-1.png",
        tipo: "BASICO",
        precio: "$1.800.000",
        carateristicas: ["Landing Page - WordPress",
        "Diseño de página, personalización de plantilla",
        "Diseño Responsive, compatible con móviles",
        "Formulario de Contacto integrado",
        "Integración de redes sociales, whatsapp"],
        myUrl: "https://api.whatsapp.com/send?phone=5723171075&text=Hola,%20Me%20interesa%20el%20plan%20BASICO%20ofrecido%20en%20Polarisweb.com.co,%20Me%20gustar%C3%ADa%20tener%20m%C3%A1s%20informaci%C3%B3n"
    },{
        imagen: "./img/emoji-2.png",
        tipo: "CÓMODO",
        precio: "$2.200.000",
        carateristicas: ["Todo lo del de BÁSICO +",
        "Sitio Web de 5 Páginas",
        "Seguridad del sitio web",
        "Website en 2 idiomas"],
        myUrl: "https://api.whatsapp.com/send?phone=5723171075&text=Hola,%20Me%20interesa%20el%20plan%20COMODO%20ofrecido%20en%20Polarisweb.com.co,%20Me%20gustar%C3%ADa%20tener%20m%C3%A1s%20informaci%C3%B3n"
    },{
        imagen: "./img/emoji-3.png",
        tipo: "COMPLETO",
        premium: true,
        precio: "$1.800.000",
        carateristicas: ["Todo lo del CÓMODO +",
        "Desarrollo a tu medida",
        "Tienda online, chat en linea, booking..."],
        myUrl: "https://api.whatsapp.com/send?phone=5723171075&text=Hola,%20Me%20interesa%20el%20plan%20COMPLETO%20ofrecido%20en%20Polarisweb.com.co,%20%C2%BFPodr%C3%ADas%20darme%20m%C3%A1s%20informaci%C3%B3n?"
    },
]
export function Paquetes(){
    return <><div className="row ">{listaPaquetes.map((p, i)=><Paquete key={i}
            imagen={p.imagen}
            tipo={p.tipo}
            precio={p.precio}
            carateristicas={p.carateristicas}
            premium={p.premium}
            myUrl={p.myUrl}
            tamano="col-12 col-lg-4"/>)}
         </div>
         <div className="row">
           
         <h4 className="text-center mt-5 mb-3">Cotiza con nosotros servicios adicionales</h4>
         <Paquete 
            tipo="PREGUNTA POR NUESTROS DESCUENTOS PARA"
            precio="EMPRENDEDORES"
            carateristicas={["Hasta el 50% de decuento!"]}
            myUrl="https://api.whatsapp.com/send?phone=5723171075&text=Hola,%20Me%20interesa%20el%20plan%20Emprendedores%20ofrecido%20en%20Polarisweb.com.co,%20Me%20gustar%C3%ADa%20tener%20m%C3%A1s%20informaci%C3%B3n"
            tamano="col-12"/>
        </div>
        <div className="text-center mt-5" style={{lineHeight:"18px"}}>
			<p>Tienda Onlie - Chat en vivo - Chatbot - Agendador de citas - Sitio Multilenguaje</p>
            <p>Configuración de Hosting - Dominio - Soporte - Integración de plugins</p>
            <p>Diseño de Logo - Mockups - Contenido para redes sociales.</p>
            <button type="button" className="btn btn-primary mt-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Contacto</button>
        </div>
         </>
}

function Paquete(props){
    
    return <div className={"card-container mt-4 " + props.tamano + (props.premium?" premium": "")}>
        <div className="card text-center align-items-center ">
        
        {props.imagen?<img alt={props.tipo} width="45px" src={props.imagen}></img>:""}
        <h6 className="mt-4">{props.tipo}</h6>
        
        <span className="mt-4 negrita price">{props.precio}</span>
        <ul className="list-group flex-grow-1 border-0 my-4">{props.carateristicas.map((item, i)=><li key={i} className="list-group-item border-0 border-bottom">{item}</li>)}</ul>
        <a href={props.myUrl} className="btn btn-primary" >Selecciona</a>
        </div>
    </div>
}
 

