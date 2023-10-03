export function Footer () {
  const currentYear = new Date().getFullYear();
  return <footer>
    <div className="container mt-5">
      <div className="logo-footer  w-100 text-center pt-5 mb-4">
         <img alt="" src="./img/logo_svg.svg"></img>
      </div>
      <div className="contenido row m-auto">
        <div className="col-12 col-md-4 text-center text-md-start mt-5">
          <div className="w-100 w-md-50">
            <p>Calle 9B Sur #79a-75 Medellín, Colombia</p>
            <p className="negrita">Horario: Lun - Sab: 9 AM - 6 PM</p>
          </div>
        </div>
        <div className="col-12 col-md-4 text-center mt-5">
          <p>Contacto</p>
          <p className="telefono"><a href="tel:+573104870302">+57 310 4870302</a></p>
          <p className="telefono"><a href="tel:+573104870302">+57 318 2186428</a></p>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Contáctanos</button>
        </div>
        <div className="col-12 col-md-4 my-5">
          <ul className="d-flex flex-column list-inline align-items-center align-items-md-end ">
            <li ><a href="/#inicio">Inicio</a></li>
            <li><a href="/#servicios">Servicios</a></li>
            <li><a href="/#work">Work</a></li>
            <li><a href="/#paquetes">Paquetes</a></li>
            <li><a href="blog">Blog</a></li>
            <li><a href="/#contacto">Contacto</a></li>
          </ul>
        </div>
        <div className="copyrigth text-center mb-5">&copy; {currentYear} Polarisweb.com.co | Todos los derechos reservados</div>
      </div>
    </div>
  </footer>
}