import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import * as API from '../../servicios/servicios'

export function CreaMovimientos(){
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    const [concepto, setConcepto] = useState('');
    const [definicion, setDefinicion] = useState('');
    
    const crear_movimientos = ()=>{
        const datos_movimientos={
            concepto: concepto,
            definicion: definicion,

        };
        console.log(datos_movimientos)
        API.SaveMovimientos(datos_movimientos);
        setmensajeSuccess('Se agrego el movimiento');
        setTimeout(() => {
            setmensajeSuccess('');
            window.location.href = '/diccionario';
        }, 2000);
    }

    return(
        <>
        <div className="card">
            <div className="card-header">
                AGREGAR NUEVO MOVIMIENTO:
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


                <div className="form-group col-4">
                  <label for="">DEFINICION</label>
                  <input 
                  type="text"
                   value={definicion} 
                   onChange={(event)=>setDefinicion(event.target.value)}
                  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>

                
                <div className="row">
                    <div className='col-3 mt-3'>
                        <button  onClick={crear_movimientos}  type="button" className="btn btn-primary">GUARDAR</button>
                        <Link to={'/diccionario'}><button type="button" className="btn btn-secondary">VOLVER AL LISTADO</button></Link>
                    </div>
                </div>
            </div>

            </div>
        </div>
        </>
    )
}