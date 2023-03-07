import React, { useEffect, useState } from 'react';
import * as API from '../../../servicios/servicios';
import './Rm.css';
import { Link } from 'react-router-dom';

export function Rm() {
  const [rm, setRm] = useState([]);
  const [usuarioId, setUsuarioId] = useState('');
  const [mensajeSuccess, setMensajeSuccess] = useState('');

  useEffect(() => {
    const usuarioLogueado = JSON.parse(localStorage.getItem('usuario'));
    if (usuarioLogueado) {
      setUsuarioId(usuarioLogueado.datos[0].id);
    }
  }, []);

  useEffect(() => {
    async function fetchRm() {
      if (usuarioId) {
        const data = await API.getRmPorUsuarioId(usuarioId);
        setRm(data);
      }
    }
    fetchRm();
  }, [usuarioId]);

  
  // CODIGO PARA ELIMINAR EL RM
  const eliminarRm  = async(id)=>{
    const  rm = await API.EliminarRm(id);
    setMensajeSuccess('SE ELIMINO EL REGISTRO RM')
    setTimeout(()=>{
        setMensajeSuccess('')
        window.location.reload(true)

    }, 2000)

    if(rm.status){
        setmensajeError(rm.mensaje)
        setTimeout(()=>{
            setmensajeError('')
            window.location.reload(true)
        }, 2000)
    }else{
        setmensajeError(rm.mensaje)
        setTimeout(()=>{
            setmensajeError('')
        }, 4000)
    }
}


  return (
    <>
    <div>
      <h2 className="titulo bg-white text-center">HISTORIAL DE RM DEL USUARIO</h2>
    </div>

    <div className="text-center">
      <Link name="" id="" className="btn btn-primary" to={'/agregar_rm'} role="button">NUEVO REGISTRO</Link>
    </div>
       <div>
               {
                    mensajeSuccess?
                    <div class="alert alert-success" role="alert">
                     {mensajeSuccess}
                    </div>:''
                }
      </div>
      <div className="rm-container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>CONCEPTO</th>
            <th>RM</th>
            <th>Fecha</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rm.map((rm) => (
            <tr key={rm.id}>
              <td>{rm.concepto}</td>
              <td>{rm.rm}</td>

              <td>{new Date(rm.fecha).toLocaleDateString('es-AR')}</td>
              <td>
                <div className="d-flex">
                  <button type="button" className="btn btn-warning">
                    <Link to={`/editar_rm/${rm.id}`} className="text-white text-decoration-none">Editar</Link>
                  </button>
                  <button onClick={() => eliminarRm(rm.id)} type="button" className="btn btn-danger">ELIMINAR</button>

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
