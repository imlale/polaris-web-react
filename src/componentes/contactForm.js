import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

 

export function ContactForm(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ddt6xpv', 'template_euau93q', form.current, 'HCsRLWKfL-ArQTNB7')
      .then((result) => {
          document.querySelector(".alert-success").classList.remove("d-none")
          document.querySelector("#myForm").reset();
          setTimeout(()=>{
            document.querySelector("#myAlerta").classList.add("d-none")
          }, 3000)
      }, (error) => {
         document.querySelector(".alert-danger").classList.remove("d-none")         
         setTimeout(()=>{
          document.querySelector("#myAlerta").classList.add("d-none")
        }, 3000)
      });
  };

    return <> 
   
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">Formulario de Contacto</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
          <form id="myForm" ref={form} onSubmit={sendEmail}>
            <div className="form-group">
            <label htmlFor="nombre">Nombre</label>  
            <input type="text" className="form-control mb-3" id="nombre" name="nombre" />    
            </div>

            <div className="form-group">
            <label htmlFor="telefono">Teléfono</label>
            <input type="text" className="form-control mb-3" id="telefono"  name="telefono"/>        
            </div>
            
            <div className="form-group">
            <label htmlFor="correo">Correo electrónico</label>  
            <input type="email" className="form-control mb-3" id="correo" name="correo" />  
            </div>
            
            <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea className="form-control mb-3" id="mensaje" name="mensaje" rows="3"></textarea>
            </div>
            <div className="alert alert-success d-none" role="alert">Mensaje enviado con éxito</div>
            <div className="alert alert-danger d-none" role="alert">Se presentó un problema, por favor intenta más tarde.</div>
            <button type="submit" className="btn btn-primary">Enviar</button>
            
        </form>
          </div>
          
        </div>
      </div>
    </div>
    </>
  
  }
  