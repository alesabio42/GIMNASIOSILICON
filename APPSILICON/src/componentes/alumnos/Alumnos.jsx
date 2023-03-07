import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import * as API from '../../servicios/servicios'

export function Alumnos(){
    const [alumnos, setAlumnos] =useState([]);
    const [color, setColor] =useState('');
    const [mensajeSuccess, setmensajeSuccess] = useState('')

    // los filtros de busqueda
    const [apellido, setApellido] = useState('');
    const [nombre, setNombre] = useState('');
    const [sexo, setSexo] = useState('');
    const [dni, setDni] = useState('');


    // aqui se carga por primera vez la variable
useEffect(()=>{
    API.getAlumnos().then(setAlumnos)
},[]);

// FUNCION PARA CAMBIAR DE ESTADO
const CambioEstadoAlumno  = async(id, estado)=>{
    if(estado=='B'){
        setColor('danger')
    }else{
        setColor('success')
    }
    
    const datos_enviar={
        estado: estado
    };
    const respuesta = await API.CambioEstadoAlumno(id, datos_enviar)
    if(respuesta.status){
        setmensajeSuccess(respuesta.mensaje)
        
        setTimeout(()=>{
            setmensajeSuccess('')
            window.location.reload(true)
        }, 2000)
    }else{
        setmensajeSuccess(respuesta.mensaje)
        
        setTimeout(()=>{
            setmensajeSuccess('')
        }, 4000)
    }
    
}
// FUNCION BUSCADOR
const buscar_alumno = ()=>{
    
    const filtros={
        apellido: apellido,
        nombre: nombre,
        dni: dni,
        sexo: sexo,
    };

    API.BuscarAlumnos(filtros).then(setAlumnos);
   
}

const limpiar_filtros = ()=>{
    setApellido('')
    setNombre('')
    setDni('')
    setSexo('')
    API.getAlumnos().then(setAlumnos)
   
}
    return(
        <div className="card">
            {
                mensajeSuccess?
                <div className={`alert alert-${color}`} role="alert">
                    {mensajeSuccess}
                </div>:''
            }
             <div class="card">
                <div class="card-header">
                    BUSQUEDA DE ALUMNOS
                </div>
                <div class="card-body">
                    <div className='row'>
                        <div className='col-3'>
                            <label>APELLIDO</label>
                            <input 
                            id='apellido'
                            className='form-control'
                            value={apellido} 
                            onChange={(event)=>setApellido(event.target.value)}
                            />
                        </div>
                        <div className='col-3'>
                            <label>NOMBRE</label>
                            <input 
                            id='nombre'
                            className='form-control'
                            value={nombre} 
                            onChange={(event)=>setNombre(event.target.value)}
                            />
                        </div>
                        <div className='col-3'>
                            <label>DNI</label>
                            <input 
                            value={dni} 
                            onChange={(event)=>setDni(event.target.value)}
                            className='form-control'/>
                        </div>
                        <div className='col-3'>
                            <label>SEXO</label>
                            <select onChange={(event)=>setSexo(event.target.value)} className='form-control'>
                                <option>Seleccionar filtro</option>
                                <option value='M'>Masculino</option>
                                <option value='F'>Femenino</option>
                            </select>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-6' >
                            <button onClick={buscar_alumno}  className='btn btn-primary'>BUSCAR</button>
                            <button onClick={limpiar_filtros}  className='btn btn-dark'>LIMPIAR FILTROS</button>
                        </div>
                        


                    </div>
                    
                </div>
            </div>
            <div className="card-header">
                LISTADO DE TODOS LOS ALUMNOS
            </div>
           
            <div className="card-body">
            <Link name="" id="" className="btn btn-primary" to={'/inscribirse'} role="button">INSCRIBIRSE</Link>
                <table className="table table-striped table-inverse table-responsive">
                    <thead className="thead-inverse">
                        <tr>
                            <th>Apellido</th>
                            <th>Nombre</th>
                            <th>DNI</th>
                            <th>Sexo</th>
                            <th>Clase</th>
                            <th>Estado Civil</th>
                            <th>Estado</th>
                            <th>&nbsp;</th>
                        </tr>
                        </thead>
                        <tbody>
                        {alumnos.map((alumno)=>(
                            <tr>
                                <td>{alumno.apellido}</td>
                                <td>{alumno.nombre}</td>
                                <td>{alumno.dni}</td>
                                <td>{alumno.sexo}</td>
                                <td>{alumno.clase}</td>
                                <td>{alumno.estado_civil}</td>
                                <td>
                                    <span className="badge bg-info">
                                        {
                                        (alumno.estado=='A'?'Activo':'Baja')
                                        }
                                    </span>
                                </td>
                                
                                <td>
                                    <div className="btn-group" role="group" aria-label="">
                                        { (alumno.estado=='A')? 
                                        <>
                                        <Link to={`/editar_alumno/${alumno.id_alumno}`}>
                                         <button type="button" className="btn btn-warning">Editar</button>
                                        </Link> 
                                        <button onClick={() => CambioEstadoAlumno(alumno.id_alumno, 'B')} type="button" className="btn btn-danger">Dar de baja</button>
                                        </>
                                        :
                                        <button onClick={() => CambioEstadoAlumno(alumno.id_alumno, 'A')} type="button" className="btn btn-success">Dar de alta</button>
                                        }
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                </table>
            </div>
        </div>
    )
}