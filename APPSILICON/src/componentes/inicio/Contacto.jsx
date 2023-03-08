import React, { useEffect, useState } from 'react';
import * as API from '../../servicios/servicios'
import "./contact.css"; // Importar la hoja de estilos

export function Contacto () {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [mensajeSuccess, setMensajeSuccess] = useState('');

  const MAX_NOMBRE_LENGTH = 50;
  const MAX_CORREO_LENGTH = 50;
  const MAX_ASUNTO_LENGTH = 100;

  const handleNombreChange = (event) => {
    const value = event.target.value;
    if (value.length > MAX_NOMBRE_LENGTH) {
      alert(`El campo de nombre no puede exceder los ${MAX_NOMBRE_LENGTH} caracteres`);
      return;
    }
    setNombre(value);
  };

  const handleCorreoChange = (event) => {
    const value = event.target.value;
    if (value.length > MAX_CORREO_LENGTH) {
      alert(`El campo de correo no puede exceder los ${MAX_CORREO_LENGTH} caracteres`);
      return;
    }
    setCorreo(value);
  };

  const handleAsuntoChange = (event) => {
    const value = event.target.value;
    if (value.length > MAX_ASUNTO_LENGTH) {
      alert(`El campo de asunto no puede exceder los ${MAX_ASUNTO_LENGTH} caracteres`);
      return;
    }
    setAsunto(value);
  };

  const registro_consultas = ()=>{
    if (!nombre || !correo || !asunto || !mensaje ) {
        alert('INGRESE TODOS LOS CAMPOS REQUERIDOS');
        return;
    }
    const datos_consultas={
        nombre: nombre,
        correo: correo,
        asunto: asunto,
        mensaje: mensaje,
    };
    console.log(datos_consultas)
    API.SaveRegistroConsultas(datos_consultas);
    setMensajeSuccess('SU CONSULTA HA SIDO ENVIADA')
        setTimeout(()=>{
            setMensajeSuccess('')
            window.location.reload(true)
        }, 2000)
  }

  return (
    <>
      <div className="contact" id="contact">
        {
          mensajeSuccess?
          <div className="alert alert-success" role="alert">
              {mensajeSuccess}
          </div>:''
        }
        <h2 className="black-background aqua-green-text text-center">CONTACTO</h2>
        <div className="container">
          <div className="formContainer">
            <form>
              <input
                type="text"
                placeholder="INGRESE SU NOMBRE"
                value={nombre}
                onChange={handleNombreChange}
              />

              <input
                type="text"
                placeholder="INGRESE SU CORREO"
                value={correo}
                onChange={handleCorreoChange}
              />

              <input
                type="text"
                placeholder="INGRESE EL ASUNTO"
                value={asunto}
                onChange={handleAsuntoChange}
              />
              <textarea
                cols="30"
                rows="10"
                placeholder="Message"
                value={mensaje}
                onChange={(event) => setMensaje(event.target.value)}
              
              ></textarea>
              <button onClick={registro_consultas} type="button" className="btn btn-warning">ENVIAR CONSULTA</button>
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
