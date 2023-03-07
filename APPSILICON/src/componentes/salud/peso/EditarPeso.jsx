import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import * as API from '../../../servicios/servicios'

export function EditarPeso(){
    const {id} = useParams();
    const [mensajeError, setMensajeError] = useState('')
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    const [peso, setPeso] = useState('');
    const [fecha, setFecha] = useState('');

    useEffect(()=>{
        trae_datos(id)
    },[])

    const trae_datos  = async ()=>{
        const datos_peso = await API.getPesoById(id)
        console.log(datos_peso);
        setPeso(datos_peso.peso)
        setFecha(datos_peso.fecha_formateada)
    }



    const validarCampos = () => {
        if (peso === '' || fecha === '') {
            setMensajeError('Por favor, complete los campos obligatorios')
            setTimeout(()=>{
                setMensajeError('')
            }, 2000)
            return false
        } else {
            return true
        }
    }
    const editar_peso = ()=>{
        if (!validarCampos()) {
            return
        }
        const datos_enviar={
            peso: peso,
            fecha: fecha,
        };
        API.UpdatePeso(id,datos_enviar);
        setmensajeSuccess('Se Edito el peso')
            setTimeout(()=>{
                setmensajeSuccess('')
                window.location.href = '/peso';
            }, 2000)
    }


    return (
        <div className="card">
            <div className="card-header">
                EDITAR REGISTRO DE PESO
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
                  <label for="">PESO</label>
                  <input 
                  type="text"
                   value={peso} 
                   onChange={(event)=>setPeso(event.target.value)}
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
                    <button  onClick={editar_peso}  type="button" className="btn btn-primary">Editar</button>
                    <Link to={'/peso'}><button type="button" className="btn btn-secondary">Volver al listado</button></Link>
                </div>
            </div>

        </div>
    )
}
