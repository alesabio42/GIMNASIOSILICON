import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as API from '../../../servicios/servicios'

export function AgregarRm(){
    const [usuarioId, setUsuarioId] = useState('');
    const [concepto, setConcepto] = useState('');
    const [rm, setRm] = useState('');
    const [fecha, setFecha] = useState('');
    const [mensajeSuccess, setMensajeSuccess] = useState('');
  
  useEffect(() => {
    const usuarioLogueado = JSON.parse(localStorage.getItem('usuario'));
    if (usuarioLogueado) {
      setUsuarioId(usuarioLogueado.datos[0].id);
    }
  }, []);


    const registro_rm = ()=>{
        const datos_rm={
            usuario_id: usuarioId,
            concepto: concepto,
            rm: rm,
            fecha: fecha,

        };
        console.log(datos_rm)
        API.SaveRegistroRm(datos_rm);
        setMensajeSuccess('SE AGREGO EL REGISTRO DE RM')
            setTimeout(()=>{
                setMensajeSuccess('')
                window.location.href = '/rm';
            }, 2000)
    }

    return(
        <div className="card">
            <div className="card-header">
                NUEVO REGISTRO DE RM
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
                  <label for="">CONCEPTO</label>
                  <input 
                  type="text"
                   value={concepto} 
                   onChange={(event)=>setConcepto(event.target.value)}
                  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>


                <div className="form-group col-4" >
                  <label for="">RM</label>
                  <input 
                  type="text"
                   value={rm} 
                   onChange={(event)=>setRm(event.target.value)}
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
                        <button  onClick={registro_rm}  type="button" className="btn btn-primary">GUARDAR</button>
                        <Link to={'/rm'}><button type="button" className="btn btn-secondary">VOLVER AL LISTADO</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}