import React, { useEffect, useState } from 'react';
import * as API from '../../../servicios/servicios';
import './Imc.css';
import { Link } from 'react-router-dom';

export function Imc() {
  const [imc, setImc] = useState([]);
  const [usuarioId, setUsuarioId] = useState('');
  const [mensajeSuccess, setMensajeSuccess] = useState('');

  useEffect(() => {
    const usuarioLogueado = JSON.parse(localStorage.getItem('usuario'));
    if (usuarioLogueado) {
      setUsuarioId(usuarioLogueado.datos[0].id);
    }
  }, []);

  useEffect(() => {
    async function fetchImc() {
      if (usuarioId) {
        const data = await API.getImcPorUsuarioId(usuarioId);
        setImc(data);
      }
    }
    fetchImc();
  }, [usuarioId]);

  
  // CODIGO PARA ELIMINAR EL IMC
  const eliminarImc  = async(id)=>{
    const  imc = await API.EliminarImc(id);
    setMensajeSuccess('Se elimino el registro de imc')
    setTimeout(()=>{
        setMensajeSuccess('')
        window.location.reload(true)

    }, 2000)

    if(imc.status){
        setmensajeError(imc.mensaje)
        setTimeout(()=>{
            setmensajeError('')
            window.location.reload(true)
        }, 2000)
    }else{
        setmensajeError(imc.mensaje)
        setTimeout(()=>{
            setmensajeError('')
        }, 4000)
    }
}


  return (
    <>
    <div>
      <h2 className="titulo bg-white text-center">HISTORIAL DE IMC DEL USUARIO</h2>
    </div>

    <div className="text-center">
      <Link name="" id="" className="btn btn-primary" to={'/agregar_imc'} role="button">NUEVO REGISTRO</Link>
    </div>
       <div>
               {
                    mensajeSuccess?
                    <div class="alert alert-success" role="alert">
                     {mensajeSuccess}
                    </div>:''
                }
      </div>
      <div className="imc-container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>IMC</th>
            <th>Fecha</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {imc.map((imc) => (
            <tr key={imc.id}>
              <td>{imc.imc} kg</td>
              <td>{new Date(imc.fecha).toLocaleDateString('es-AR')}</td>
              <td>
                <div className="d-flex">
                  <button type="button" className="btn btn-warning">
                    <Link to={`/editar_imc/${imc.id}`} className="text-white text-decoration-none">Editar</Link>
                  </button>
                  <button onClick={() => eliminarImc(imc.id)} type="button" className="btn btn-danger">ELIMINAR</button>

                </div>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}
