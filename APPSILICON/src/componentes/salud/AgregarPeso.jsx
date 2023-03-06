import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as API from '../../servicios/servicios'

export function AgregarPeso(){
    const [usuarioId, setUsuarioId] = useState('');
    const [peso, setPeso] = useState('');
    const [fecha, setFecha] = useState('');
    const [mensajeSuccess, setMensajeSuccess] = useState('');
  
  useEffect(() => {
    const usuarioLogueado = JSON.parse(localStorage.getItem('usuario'));
    if (usuarioLogueado) {
      setUsuarioId(usuarioLogueado.datos[0].id);
    }
  }, []);


    const registro_peso = ()=>{
        const datos_peso={
            usuario_id: usuarioId,
            peso: peso,
            fecha: fecha,

        };
        console.log(datos_peso)
        API.SaveRegistroPeso(datos_peso);
        setMensajeSuccess('Se agrego el registro de peso')
            setTimeout(()=>{
                setMensajeSuccess('')
            }, 2000)
    }

    return(
        <div className="card">
            <div className="card-header">
                NUEVO REGISTRO DE PESO
            </div>
            {
                mensajeSuccess?
                <div className="alert alert-success" role="alert">
                    {mensajeSuccess}
                </div>:''
            }
            <div className="card-body">
                <div className='row'>
                    
                <div className="form-group col-4" >
                  <label for="">PESO</label>
                  <input 
                  type="text"
                   value={peso} 
                   onChange={(event)=>setPeso(event.target.value)}
                  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>


                <div className="form-group col-4">
                  <label for="">FECHA REGISTRO</label>
                  <input 
                  type="date"
                   value={fecha} 
                   onChange={(event)=>setFecha(event.target.value)}
                  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>


                </div>
                <div className="row">
                    <div className='col-3 mt-3'>
                        <button  onClick={registro_peso}  type="button" className="btn btn-primary">Guardar</button>
                        <Link to={'/peso'}><button type="button" className="btn btn-secondary">Volver al listado</button></Link>
                    </div>
                </div>
            </div>
            <div className="card-footer text-muted">
               Silicon Misiones
            </div>
        </div>
    )
}