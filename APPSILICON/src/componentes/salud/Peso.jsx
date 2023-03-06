import React, { useEffect, useState } from 'react';
import * as API from '../../servicios/servicios';
import './Peso.css';
import { Link } from 'react-router-dom';

export function Peso() {
  const [pesos, setPesos] = useState([]);
  const [usuarioId, setUsuarioId] = useState('');
  const [mensajeSuccess, setMensajeSuccess] = useState('');

  useEffect(() => {
    const usuarioLogueado = JSON.parse(localStorage.getItem('usuario'));
    if (usuarioLogueado) {
      setUsuarioId(usuarioLogueado.datos[0].id);
    }
  }, []);

  useEffect(() => {
    async function fetchPesos() {
      if (usuarioId) {
        const data = await API.getPesoPorUsuarioId(usuarioId);
        setPesos(data);
      }
    }
    fetchPesos();
  }, [usuarioId]);

  
  // CODIGO PARA ELIMINAR EL PESO
  const eliminarPeso  = async(id)=>{
    const  peso = await API.EliminarPeso(id);
    setMensajeSuccess('Se elimino el registro de peso')
    setTimeout(()=>{
        setMensajeSuccess('')
        window.location.reload(true)

    }, 2000)

    if(peso.status){
        setmensajeError(peso.mensaje)
        setTimeout(()=>{
            setmensajeError('')
            window.location.reload(true)
        }, 2000)
    }else{
        setmensajeError(peso.mensaje)
        setTimeout(()=>{
            setmensajeError('')
        }, 4000)
    }
}


  return (
    <>
    <div>
      <h2 className="titulo bg-white text-center">HISTORIAL DE PESO DEL USUARIO</h2>
    </div>

    <div className="text-center">
      <Link name="" id="" className="btn btn-primary" to={'/agregar_peso'} role="button">NUEVO REGISTRO</Link>
    </div>
       <div>
               {
                    mensajeSuccess?
                    <div class="alert alert-success" role="alert">
                     {mensajeSuccess}
                    </div>:''
                }
      </div>
      <div className="peso-container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Peso</th>
            <th>Fecha</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {pesos.map((peso) => (
            <tr key={peso.id}>
              <td>{peso.peso} kg</td>
              <td>{new Date(peso.fecha).toLocaleDateString('es-AR')}</td>
              <td>
                <div className="d-flex">
                  <button type="button" className="btn btn-warning">
                    <Link to={`/editar_peso/${peso.id}`} className="text-white text-decoration-none">Editar</Link>
                  </button>
                  <button onClick={() => eliminarPeso(peso.id)} type="button" className="btn btn-danger">ELIMINAR</button>

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
