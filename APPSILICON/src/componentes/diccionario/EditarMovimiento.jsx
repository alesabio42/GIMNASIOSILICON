import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import * as API from '../../servicios/servicios'

export function EditarMovimiento(){
    const {id} = useParams();
    const [mensajeError, setMensajeError] = useState('')
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    const [concepto, setConcepto] = useState('');
    const [definicion, setDefinicion] = useState('');

    useEffect(()=>{
        trae_datos(id)
    },[])

    const trae_datos  = async ()=>{
        const datos_movimiento = await API.getMovimientoById(id)
        console.log(datos_movimiento);
        setConcepto(datos_movimiento.concepto)
        setDefinicion(datos_movimiento.definicion)

    }

    const validarCampos = () => {
        if (concepto === '' || definicion === '') {
            setMensajeError('Por favor, complete los campos obligatorios')
            setTimeout(()=>{
                setMensajeError('')
            }, 2000)
            return false
        } else {
            return true
        }
    }

    const editar_movimiento = ()=>{
        if (!validarCampos()) {
            return
        }
        const datos_enviar={
            concepto: concepto,
            definicion: definicion,
 
        };
        API.UpdateMovimiento(id,datos_enviar);
        setmensajeSuccess('SE EDITO EL MOVIMIENTO')
            setTimeout(()=>{
                setmensajeSuccess('')
                window.location.href = '/diccionario';
            }, 2000)
    }
    return (
        <div className="card">
            <div className="card-header">
                EDITAR MOVIMIENTO
            </div>
            {
                mensajeError?
                <div className="alert alert-danger" role="alert">
                    {mensajeError}
                </div>:''
            }
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
                </div>
                

                {/* BOTONES PARA EDITAR O VOLVER AL LISTADO */}                
                <div className="form-group">
                    <button  onClick={editar_movimiento}  type="button" className="btn btn-primary">EDITAR</button>
                    <Link to={'/diccionario'}><button type="button" className="btn btn-secondary">VOLVER LA DICCIONARIO</button></Link>
                </div>
            </div>

        </div>
    )
}