import React, { useEffect, useState } from 'react';
import * as API from '../../servicios/servicios';
import { Link } from 'react-router-dom';

export function Diccionario() {
  const [terminosbasicos, setTerminosBasicos] = useState([]);
  const [movimientos, setMovimientos] = useState([]);
  const [materiales, setMateriales] = useState([]);
  const [mensajeSuccess, setMensajeSuccess] = useState('');

useEffect(()=>{
    API.getTerminosBasicos().then(setTerminosBasicos)
    API.getMovimientos().then(setMovimientos)
    API.getMateriales().then(setMateriales)
},[]);
  

  // CODIGO PARA ELIMINAR TERMINOS BASICOS
  const eliminarTermino  = async(id)=>{
    const  terminosbasicos = await API.EliminarTermino(id);
    setMensajeSuccess('SE ELIMINO EL TERMINO BASICO')
    setTimeout(()=>{
        setMensajeSuccess('')
        window.location.reload(true)

    }, 2000)

    if(terminosbasicos.status){
        setmensajeError(peso.mensaje)
        setTimeout(()=>{
            setmensajeError('')
            window.location.reload(true)
        }, 2000)
    }else{
        setmensajeError(terminosbasicos.mensaje)
        setTimeout(()=>{
            setmensajeError('')
        }, 4000)
    }
}

  // CODIGO PARA ELIMINAR MOVIMIENTOS
  const eliminarMovimiento = async(id)=>{
    const  movimientos = await API.EliminarMovimiento(id);
    setMensajeSuccess('SE ELIMINO EL MOVIMIENTO')
    setTimeout(()=>{
        setMensajeSuccess('')
        window.location.reload(true)

    }, 2000)

    if(movimientos.status){
        setmensajeError(movimientos.mensaje)
        setTimeout(()=>{
            setmensajeError('')
            window.location.reload(true)
        }, 2000)
    }else{
        setmensajeError(movimientos.mensaje)
        setTimeout(()=>{
            setmensajeError('')
        }, 4000)
    }
}

  // CODIGO PARA ELIMINAR MATERIALES
  const eliminarMaterial  = async(id)=>{
    const  materiales = await API.EliminarMaterial(id);
    setMensajeSuccess('SE ELIMINO EL MATERIAL')
    setTimeout(()=>{
        setMensajeSuccess('')
        window.location.reload(true)

    }, 2000)

    if(materiales.status){
        setmensajeError(materiales.mensaje)
        setTimeout(()=>{
            setmensajeError('')
            window.location.reload(true)
        }, 2000)
    }else{
        setmensajeError(materiales.mensaje)
        setTimeout(()=>{
            setmensajeError('')
        }, 4000)
    }
}

  return (
<>
<div className="container-fluid my-container">
      <div className="row justify-content-center mt-4">
        <div className="">
            <h1 className="text-black text-center bg-white">DICCIONARIO</h1>
          <div>            {
                    mensajeSuccess?
                    <div class="alert alert-success" role="alert">
                     {mensajeSuccess}
                    </div>:''
                }
          </div>
          <div className="accordion" id="accordionEjemplo">
          <div className="card">
              <div className="card-header" id="headingTres">
                <h2 className="mb-0">
                  <buttoninicio className="btn btn-link w-100 " type="buttoninicio" data-toggle="collapse" data-target="#texto1" aria-expanded="false" aria-controls="texto1">
                    TERMINOS BASICOS
                  </buttoninicio>
                </h2>
              </div>

              <div id="texto1" className="collapse" aria-labelledby="headingTres" data-parent="#accordion1">
                <div className="card-body">
                        <div className="peso-container">
                        <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>CONCEPTO</th>
                                        <th>DESCRIPCION</th>
                                        <th>ACCIONES</th>
                                    </tr>
                                </thead>
                                <tbody>

                                {terminosbasicos.map((terminosbasicos)=>(
                                    <tr>

                                        <td>{terminosbasicos.concepto}</td>
                                        <td>{terminosbasicos.definicion}</td>
                                        <td>
                                       
                                        <Link to={`/editar_termino/${terminosbasicos.id}`}>
                                         <button type="button" className="btn btn-warning">EDITAR</button>
                                        </Link> 
                                        
                                        <button onClick={() => eliminarTermino(terminosbasicos.id)} type="button" className="btn btn-danger">ELIMINAR</button>
                                        </td>

                                    </tr>
                                  ))}
                                </tbody>
                        </table>
                        </div>

                        <div className="text-end">
                        <Link name="" id="" className="btn btn-primary" to={'/termino'} role="button">NUEVO TERMINO</Link>
                        </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header" id="headingTres">
                <h2 className="mb-0">
                  <buttoninicio className="btn btn-link w-100 " type="buttoninicio" data-toggle="collapse" data-target="#texto2" aria-expanded="false" aria-controls="texto2">
                    MOVIMIENTOS
                  </buttoninicio>
                </h2>
              </div>

              <div id="texto2" className="collapse" aria-labelledby="headingTres" data-parent="#accordion2">
                <div className="card-body">
                        <div className="peso-container">
                        <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>CONCEPTO</th>
                                        <th>DESCRIPCION</th>
                                        <th>ACCIONES</th>
                                    </tr>
                                </thead>
                                <tbody>

                                {movimientos.map((movimientos)=>(
                                    <tr>

                                        <td>{movimientos.concepto}</td>
                                        <td>{movimientos.definicion}</td>
                                        <td>
                                        <Link to={`/editar_movimiento/${movimientos.id}`}>
                                         <button type="button" className="btn btn-warning">EDITAR</button>
                                        </Link> 
                                        <button onClick={() => eliminarMovimiento(movimientos.id)} type="button" className="btn btn-danger">ELIMINAR</button>
                                        </td>
                                    </tr>
                                  ))}
                                </tbody>
                        </table>
                        </div>

                        <div className="text-end">
                        <Link name="" id="" className="btn btn-primary" to={'/movimientos'} role="button">NUEVO MOVIMIENTO</Link>
                        </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header" id="headingTres">
                <h2 className="mb-0">
                  <buttoninicio className="btn btn-link w-100 " type="buttoninicio" data-toggle="collapse" data-target="#texto3" aria-expanded="false" aria-controls="texto3">
                    MATERIALES
                  </buttoninicio>
                </h2>
              </div>

              <div id="texto3" className="collapse" aria-labelledby="headingTres" data-parent="#accordion3">
                <div className="card-body">
                        <div className="peso-container">
                        <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>CONCEPTO</th>
                                        <th>DESCRIPCION</th>
                                        <th>ACCIONES</th>
                                    </tr>
                                </thead>
                                <tbody>

                                {materiales.map((materiales)=>(
                                    <tr>

                                        <td>{materiales.concepto}</td>
                                        <td>{materiales.definicion}</td>
                                        <td>
                                            <Link to={`/editar_material/${materiales.id}`}>
                                            <button type="button" className="btn btn-warning">EDITAR</button>
                                            </Link> 
                                            <button onClick={() => eliminarMaterial(materiales.id)} type="button" className="btn btn-danger">ELIMINAR</button>
                                        </td>
                                    </tr>
                                  ))}
                                </tbody>
                        </table>
                        </div>

                        <div className="text-end">
                        <Link name="" id="" className="btn btn-primary" to={'/materiales'} role="button">NUEVO MATERIAL</Link>
                        </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
      );
    };

    