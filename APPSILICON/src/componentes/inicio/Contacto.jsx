import React from "react";
import "./contact.css"; // Importar la hoja de estilos

export function Contacto () {
  return (
    <>
  <div className="contact" id="contact">
  <h2 className="black-background aqua-green-text text-center">CONTACTO</h2>

    <div className="container">
    
            <div className="formContainer">
           
            <form>
              <input type="text" placeholder="Your Name*" />
              <input type="text" placeholder="Your Email*" />
              <input type="text" placeholder="Subject" />
              <textarea cols="30" rows="10" placeholder="Message"></textarea>
              <button type="button" className="btn btn-warning">SEND</button>
            </form>
          </div>
  </div>
  <h2 className="black-background aqua-green-text text-center">LOCALIZACION</h2>


  <div className="mapouter">

    <iframe
      id="gmap_canvas"
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5091.627810170975!2d-55.88916936937059!3d-27.36495945320065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1678232242757!5m2!1ses-419!2sar"
    ></iframe>
  </div>
  </div>
  </>
);
  }
