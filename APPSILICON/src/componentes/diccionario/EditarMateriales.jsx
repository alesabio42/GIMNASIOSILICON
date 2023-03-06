import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import * as API from '../../servicios/servicios'

export function EditarMateriales(){
    const {id} = useParams();
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    const [concepto, setConcepto] = useState('');
    const [definicion, setDefinicion] = useState('');

    useEffect(()=>{
        trae_datos(id)
    },[])

    const trae_datos  = async ()=>{
        // event.preventDefault();
        const datos_material = await API.getMaterialById(id)
        console.log(datos_material);
        setConcepto(datos_material.concepto)
        setDefinicion(datos_material.definicion)

    }
    const editar_material = ()=>{
        const datos_enviar={
            concepto: concepto,
            definicion: definicion,
 
        };
        API.UpdateMaterial(id,datos_enviar);
        setmensajeSuccess('Se Edito el material')
            setTimeout(()=>{
                setmensajeSuccess('')
                window.location.href = '/diccionario';
            }, 2000)
    }
    return (
        <div className="card">
            <div className="card-header">
                EDITAR MATERIAL
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
                </div>
                

                {/* BOTONES PARA EDITAR O VOLVER AL LISTADO */}                
                <div className="form-group">
                    <button  onClick={editar_material}  type="button" className="btn btn-primary">Editar</button>
                    <Link to={'/diccionario'}><button type="button" className="btn btn-secondary">Volver al listado</button></Link>
                </div>
            </div>

        </div>
    )
}