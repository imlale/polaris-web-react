import { Outlet, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export function Header () {
    const location = useLocation()
    const route = location.pathname

   
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const onScroll = () => {
        const current = parseInt(window.scrollY);        
        if(current != null){
            
            if (current > 60) {
                setScrolled(true);  
            } else {
                setScrolled(false);
            }   
        }
    }           
        window.addEventListener("scroll", onScroll);    
        
        return () => window.removeEventListener("scroll", onScroll);
    },[]);

    
    useEffect(() => {
        window.scrollTo(0, 0);  
    }, [location.pathname]);


    return <><header className={scrolled ? "mt-6 scrolled" : "mt-6"}>
        
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
            <div className="d-flex justify-content-start w-25 h-100">
                <Link className="nav-link" to="/" onClick={()=>{window.scrollTo(0, 0)}}>
                    <img src="/img/logo_svg.svg" className="d-inline-block align-top" alt=""></img>
                </Link>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                {route === "/"?<MainMenu/>: <BlogMenu/>}
            </div>
            <div className="icons d-none d-lg-block text-end w-25 h-100">
                    <a href="mailto:contacto@polarisweb.com.co"><img src="/img/mail.svg" className="d-inline-block align-top mx-1" alt=""></img></a>
                    <a href="https://wa.me/5723171075"><img src="/img/wa.svg" className="d-inline-block align-top mx-1" alt=""></img></a>
                    
            </div>
        </div>
        </nav>
        </header>
        <div className="main-container">
            <Outlet/>
        </div>
    </>
}

function MainMenu(){
    return <div className="menu-container">
    <ul className="navbar-nav justify-content-around">
        <li className="nav-item">
            <Link className="nav-link" to="/" onClick={()=>{window.scrollTo(0, 0)}}>Inicio</Link>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#servicios">Servicios</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#work">Work</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#paquetes">Paquetes</a>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="blog">Blog</Link>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#contacto">Contacto</a>
        </li>
    </ul>

</div>

}

function BlogMenu(){
    return <div className="menu-container">
    <ul className="navbar-nav justify-content-around">
        <li className="nav-item">
            <Link className="nav-link" to="/">Diseño de Páginas Web</Link>
        </li>        
        <li className="nav-item active">
            <Link className="nav-link" to="blog">Blog</Link>
        </li>        
    </ul>
</div>

}