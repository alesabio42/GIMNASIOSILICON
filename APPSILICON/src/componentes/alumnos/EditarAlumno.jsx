import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import * as API from '../../servicios/servicios'

export function EditarAlumno(){
    const {id_alumno} = useParams();
    const [mensajeError, setMensajeError] = useState('')
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    const [apellido, setApellido] = useState('');
    const [nombre, setNombre] = useState('');
    const [dni, setDni] = useState('');
    const [clase, setClase] = useState('');
    const [estado_civil, setEstadoCivil] = useState('');
    const [sexo, setSexo] = useState('');
    const [fecha_nacimiento, setFechaN] = useState('');

    useEffect(()=>{
        trae_datos(id_alumno)
    },[])

    const trae_datos  = async ()=>{
        // event.preventDefault();
        const datos_alumno = await API.getAlumnoById(id_alumno)
        console.log(datos_alumno);
        setApellido(datos_alumno.apellido)
        setNombre(datos_alumno.nombre)
        setDni(datos_alumno.dni)
        setClase(datos_alumno.clase)
        setEstadoCivil(datos_alumno.estado_civil)
        setSexo(datos_alumno.sexo)
        setFechaN(datos_alumno.fecha_formateada)
    }

    const validarCampos = () => {
        if (nombre === '' || apellido === '') {
            setMensajeError('Por favor, complete los campos obligatorios')
            setTimeout(()=>{
                setMensajeError('')
            }, 2000)
            return false
        } else {
            return true
        }
    }



    const editar_alumno = ()=>{
        if (!validarCampos()) {
            return
        }
        const datos_enviar={
            nombre: nombre,
            apellido: apellido,
            dni: dni,
            clase: clase,
            sexo: sexo,
            estado_civil: estado_civil

        };
        API.UpdateAlumno(id_alumno,datos_enviar);
        setmensajeSuccess('SE EDITO EL ALUMNO')
            setTimeout(()=>{
                setmensajeSuccess('')
                window.location.href = '/alumnos';
            }, 2000)
    }

    return (
        <div className="card">
            <div className="card-header">
                EDITAR ALUMNO
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
                  <label for="">Nombre</label>
                  <input 
                  type="text"
                   value={nombre} 
                   onChange={(event)=>setNombre(event.target.value)}
                  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"required/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group col-4">
                  <label for="">Apellido</label>
                  <input 
                  type="text"
                   value={apellido} 
                   onChange={(event)=>setApellido(event.target.value)}
                  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group col-4">
                  <label for="">DNI</label>
                  <input 
                  type="text"
                   value={dni} 
                   onChange={(event)=>setDni(event.target.value)}
                  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group col-4">
                  <label for="">Fecha Nacimiento</label>
                  <input 
                  type="date"
                   value={fecha_nacimiento} 
                   onChange={(event)=>setFechaN(event.target.value)}
                  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>

                <div className="form-group col-4" >
                  <label for="">Clase</label>

                  <select onChange={(event)=>setClase(event.target.value)} className='form-control'>
                        <option>{clase}</option>
                        <option value='8 AM'>08:00</option>
                        <option value='9 AM'>09:00</option>
                        <option value='10 AM'>10:00</option>
                        <option value='11 AM'>11:00</option>
                        <option value='2 PM'>14:00</option>
                        <option value='3 PM'>15:00</option>
                        <option value='4 PM'>16:00</option>
                        <option value='5 PM'>17:00</option>
                        <option value='6 PM'>18:00</option>
                        <option value='7 PM'>19:00</option>
                        <option value='8 PM'>20:00</option>
                        <option value='9 PM'>21:00</option>
                    </select>

                </div>

                {/* INGRESAR ESTADO CIVIL */}
                <div className="form-group col-4">
                  <label for="">Estado Civil</label>
                  <input 
                  type="text"
                   value={estado_civil} 
                   onChange={(event)=>setEstadoCivil(event.target.value)}
                  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>

                {/* INGRESAR SEXO */}
                <div className="form-group col-4">
                  <label for="">Sexo</label>
                  <select onChange={(event)=>setSexo(event.target.value)} className='form-control'>
                        <option>{sexo}</option>
                        <option value='M'>Masculino</option>
                        <option value='F'>Femenino</option>
                    </select>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>


                </div>
                

                {/* BOTONES PARA EDITAR O VOLVER AL LISTADO */}                
                <div className="form-group">
                    <button  onClick={editar_alumno}  type="button" className="btn btn-primary">Editar</button>
                    <Link to={'/alumnos'}><button type="button" className="btn btn-secondary">Volver al listado</button></Link>
                </div>
            </div>

        </div>
    )
}
