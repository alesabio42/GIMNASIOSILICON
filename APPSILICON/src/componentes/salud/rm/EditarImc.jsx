import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import * as API from '../../../servicios/servicios'

export function EditarImc(){
    const {id} = useParams();
    const [mensajeError, setMensajeError] = useState('')
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    const [imc, setImc] = useState('');
    const [fecha, setFecha] = useState('');

    useEffect(()=>{
        trae_datos(id)
    },[])


    const trae_datos  = async ()=>{
        const datos_imc = await API.getImcById(id)
        console.log(datos_imc);
        setImc(datos_imc.imc)
        setFecha(datos_imc.fecha_formateada)
    }



    const validarCampos = () => {
        if (imc === '' || fecha === '') {
            setMensajeError('Por favor, complete los campos obligatorios')
            setTimeout(()=>{
                setMensajeError('')
            }, 2000)
            return false
        } else {
            return true
        }
    }

    const editar_imc = ()=>{
        if (!validarCampos()) {
            return
        }
        const datos_enviar={
            imc: imc,
            fecha: fecha,
        };
        API.UpdateImc(id,datos_enviar);
        setmensajeSuccess('SE EDITO EL IMC')
        setTimeout(()=>{
            setmensajeSuccess('')
            window.location.href = '/imc';
        }, 2000)
    }


    return (
        <div className="card">
            <div className="card-header">
                EDITAR REGISTRO DE IMC
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
                  <label for="">IMC</label>
                  <input 
                  type="text"
                   value={imc} 
                   onChange={(event)=>setImc(event.target.value)}
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
                    <button  onClick={editar_imc}  type="button" className="btn btn-primary">Editar</button>
                    <Link to={'/imc'}><button type="button" className="btn btn-secondary">Volver al listado</button></Link>
                </div>
            </div>

        </div>
    )
}
