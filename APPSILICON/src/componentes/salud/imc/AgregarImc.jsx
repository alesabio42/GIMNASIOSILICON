import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as API from '../../../servicios/servicios'

export function AgregarImc(){
    const [usuarioId, setUsuarioId] = useState('');
    const [imc, setImc] = useState('');
    const [fecha, setFecha] = useState('');
    const [mensajeSuccess, setMensajeSuccess] = useState('');
  
  useEffect(() => {
    const usuarioLogueado = JSON.parse(localStorage.getItem('usuario'));
    if (usuarioLogueado) {
      setUsuarioId(usuarioLogueado.datos[0].id);
    }
  }, []);


    const registro_imc = ()=>{
        const datos_imc={
            usuario_id: usuarioId,
            imc: imc,
            fecha: fecha,

        };
        console.log(datos_imc)
        API.SaveRegistroImc(datos_imc);
        setMensajeSuccess('Se agrego el registro de imc')
            setTimeout(()=>{
                setMensajeSuccess('')
                window.location.href = '/imc';
            }, 2000)
    }

    return(
        <div className="card">
            <div className="card-header">
                NUEVO REGISTRO DE IMC
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
                  <label for="">IMC</label>
                  <input 
                  type="text"
                   value={imc} 
                   onChange={(event)=>setImc(event.target.value)}
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
                        <button  onClick={registro_imc}  type="button" className="btn btn-primary">Guardar</button>
                        <Link to={'/imc'}><button type="button" className="btn btn-secondary">Volver al listado</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}