import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import * as API from '../../servicios/servicios'

export function Inscribirse(){
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    const [apellido, setApellido] = useState('');
    const [nombre, setNombre] = useState('');
    const [dni, setDni] = useState('');
    const [clase, setClase] = useState('');
    const [estado_civil, setEstadoCivil] = useState('');
    const [sexo, setSexo] = useState('');
    const [fecha_nacimiento, setFechaN] = useState('');
    
    const [alumnos_clase, setAlumnos_clase] = useState ([]);

    useEffect (() =>{
    API.getAlumnos_clase().then(setAlumnos_clase)
},[])

    const crear_alumno = ()=>{
        const datos_alumno={
            nombre: nombre,
            apellido: apellido,
            dni: dni,
            clase: clase,
            sexo: sexo,
            fecha_nacimiento: fecha_nacimiento,
            estado_civil: estado_civil
        };
        console.log(datos_alumno)
        API.SaveAlumno(datos_alumno);
        setmensajeSuccess('Se agrego el alumno');
        setTimeout(() => {
            setmensajeSuccess('');
            window.location.href = '/alumnos';
        }, 2000);
    }

    return(
        <div className="card">
            <div className="card-header">
                INSCRIBIRSE
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
                  <label for="">Nombre</label>
                  <input 
                  type="text"
                   value={nombre} 
                   onChange={(event)=>setNombre(event.target.value)}
                  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
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

                  <select onChange={(event) => setClase(event.target.value)} className='form-control'>
                        <option>Seleccionar Clase</option>
                        {alumnos_clase.map((clase) => {
                            if (parseInt(clase.cantidad) < 5) {
                            return (
                                <option value={clase.nombre}>{clase.nombre}</option>
                            )
                            }
                        })}
                    </select>

                </div>
                <div className="form-group col-4">


                  <label for="">Estado Civil</label>
                  <input 
                  type="text"
                   value={estado_civil} 
                   onChange={(event)=>setEstadoCivil(event.target.value)}
                  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>


                <div className="form-group col-4">
                  <label for="">Sexo</label>
                  <select onChange={(event)=>setSexo(event.target.value)} className='form-control'>
                        <option>Seleccionar</option>
                        <option value='M'>Masculino</option>
                        <option value='F'>Femenino</option>
                    </select>
                </div>
                
                </div>
                <div className="row">
                    <div className='col-3 mt-3'>
                        <button  onClick={crear_alumno}  type="button" className="btn btn-primary">Guardar</button>
                        <Link to={'/alumnos'}><button type="button" className="btn btn-secondary">Volver al listado</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}