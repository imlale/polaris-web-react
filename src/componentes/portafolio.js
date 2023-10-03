import { motion } from "framer-motion";
const portafolios = [
    {
        imagen: "./img/fauno.png",
        titulo: "Fauno Sex Store",
        descripcion: "Tienda en línea",
        url: "https://faunosexstore.com/"
    },
    {
        imagen: "./img/press2.png",
        titulo: "Press 2",
        descripcion: "Website multi página",
        url: "https://press2communications.com/"
    },
    {
        imagen: "./img/ideatraining.png",
        titulo: "Idea Training",
        descripcion: "Landing Page",
        url: "https://ideatraininglatam.com/"
    },
    {
        imagen: "./img/nuevosamigos.png",
        titulo: "Nuevos Amigos",
        descripcion: "One Page",
        url: "http://nuevosamigoscocinamexicana.com/"
    },
    {
        imagen: "./img/fabrifolder.png",
        titulo: "Fabrifolder USA",
        descripcion: "One Page",
        url: "https://fabrifolderusa.com/"
    },
    {
        imagen: "./img/tpcolombia.png",
        titulo: "TP Colombia",
        descripcion: "Portafolio",
        url: "https://tpcolombia.co/"
    },

];

export function Portafolio (){
    return    <div className="row pb-5"> 
     {portafolios.map((item, i)=> <ItemPortafolio
      titulo={item.titulo} 
      descripcion={item.descripcion} 
      imagen={item.imagen}
      url = {item.url}
      key={i}/>)} 

    </div >
    
}

function ItemPortafolio(props){
    return <motion.div initial={{ opacity: 0 }}  
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}  
    viewport={{ once: true, amount: 0.5 }} className="portfolio-wrap col-12 col-sm-6 col-md-4 ">
        <div className="portfolio-item text-center p-0"><a target="_blank" href={props.url}>
            <img alt="" src={props.imagen} className="w-100"></img>
            <h4 className="mt-4">{props.titulo}</h4>
            <p className="negrita pb-3">{props.descripcion}</p></a>
        </div>
    </motion.div>
}

