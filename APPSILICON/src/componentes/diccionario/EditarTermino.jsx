import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import * as API from '../../servicios/servicios'

export function EditarTermino(){
    const {id} = useParams();
    const [mensajeError, setMensajeError] = useState('')
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    const [concepto, setConcepto] = useState('');
    const [definicion, setDefinicion] = useState('');

    useEffect(()=>{
        trae_datos(id)
    },[])

    const trae_datos  = async ()=>{
        const datos_termino = await API.getTerminoById(id)
        console.log(datos_termino);
        setConcepto(datos_termino.concepto)
        setDefinicion(datos_termino.definicion)

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

    const editar_termino = ()=>{
        if (!validarCampos()) {
            return
        }

        const datos_enviar={
            concepto: concepto,
            definicion: definicion,
 
        };
        API.UpdateTermino(id,datos_enviar);
        setmensajeSuccess('SE EDITO EL TERMINO')
            setTimeout(()=>{
                setmensajeSuccess('')
                window.location.href = '/diccionario';
            }, 2000)
    }
    return (
        <div className="card">
            <div className="card-header">
                EDITAR TERMINO BASICO
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
                    <button  onClick={editar_termino}  type="button" className="btn btn-primary">Editar</button>
                    <Link to={'/diccionario'}><button type="button" className="btn btn-secondary">Volver al listado</button></Link>
                </div>
            </div>

        </div>
    )
}
