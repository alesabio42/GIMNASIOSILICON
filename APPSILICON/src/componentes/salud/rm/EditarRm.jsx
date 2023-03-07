import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import * as API from '../../../servicios/servicios'

export function EditarRm(){
    const {id} = useParams();
    const [mensajeError, setMensajeError] = useState('')
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    const [concepto, setConcepto] = useState('');
    const [rm, setRm] = useState('');
    const [fecha, setFecha] = useState('');

    useEffect(()=>{
        trae_datos(id)
    },[])


    const trae_datos  = async ()=>{
        const datos_rm = await API.getRmById(id)
        console.log(datos_rm);
        setConcepto(datos_rm.concepto)
        setRm(datos_rm.rm)
        setFecha(datos_rm.fecha_formateada)
    }



    const validarCampos = () => {
        if ( concepto === '' || rm === '' || fecha === '') {
            setMensajeError('Por favor, complete los campos obligatorios')
            setTimeout(()=>{
                setMensajeError('')
            }, 2000)
            return false
        } else {
            return true
        }
    }

    const editar_rm = ()=>{
        if (!validarCampos()) {
            return
        }
        const datos_enviar={
            concepto: concepto,
            rm: rm,
            fecha: fecha,
        };
        API.UpdateRm(id,datos_enviar);
        setmensajeSuccess('SE EDITO EL RM')
        setTimeout(()=>{
            setmensajeSuccess('')
            window.location.href = '/rm';
        }, 2000)
    }


    return (
        <div className="card">
            <div className="card-header">
                EDITAR REGISTRO DE RM
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
                  <label for="">FECHA</label>
                  <input 
                  type="date"
                   value={fecha} 
                   onChange={(event)=>setFecha(event.target.value)}
                  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                </div>

                {/* BOTONES PARA EDITAR O VOLVER AL LISTADO */}                
                <div className="form-group">
                    <button  onClick={editar_rm}  type="button" className="btn btn-primary">EDITAR</button>
                    <Link to={'/rm'}><button type="button" className="btn btn-secondary">VOLVER AL LISTADO</button></Link>
                </div>
            </div>

        </div>
    )
}
