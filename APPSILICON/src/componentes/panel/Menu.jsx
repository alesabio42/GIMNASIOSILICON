import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import videogym from '../../assets/imagenes/bgVideo.mp4'
import './Video.css'
import logogym from '../../assets/imagenes/pngegg.png';

export function Menu(){
    const [usuario, setUsuario] =useState('')
    const [nombre_usuario, setNombreUsuario] =useState('')
    const logout  = async (event)=>{
            setUsuario('')
            window.localStorage.removeItem('usuario')
            window.location.reload(true);
    }
    useEffect(()=>{
      const usuarioLogueado = JSON.parse(localStorage.getItem('usuario'))
      if(usuarioLogueado){
        setNombreUsuario(usuarioLogueado.datos[0].apellido_nombre)
      }
    },[])
    return(

      <>
      <video autoPlay muted loop id="miVideo">
     <source src={videogym} type="video/mp4"/>
      </video>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand mx-4" href="/"><img src={logogym} alt="logo gimnasio" width="60" height="60"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav mx-5">

                {/* boton de INICIO */}
                <li className="nav-item active mx-4">
                  <Link className="nav-link" to={'/Inicio'}>INICIO</Link>
                </li>
                

                {/* boton de TURNOS DISPONIBLES */}
                <li className="nav-item active mx-4">
                  <Link className="nav-link" to={'/alumnos_clase'}>TURNOS</Link>
                </li>


                {/* boton de ALUMNOS */}
                <li className="nav-item dropdown mx-4">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    ALUMNOS
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <Link className="dropdown-item" to={'/alumnos'}>LISTADO ALUMNOS</Link>
                    <Link className="dropdown-item" to={'/inscribirse'}>INSCRIBIRSE</Link>
                  </div>
                </li>


                { /* boton de USUARIOS */}
                <li className="nav-item dropdown mx-4">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    USUARIOS
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <Link className="dropdown-item" to={'/listar_usuarios'}>Listar usuarios</Link>
                  </div>
                </li>


                { /* boton de SALUD */}
                <li className="nav-item dropdown mx-4">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    SALUD
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <Link className="dropdown-item" to={'/calculoimc'}>CALCULAR IMC</Link>
                    <Link className="dropdown-item" to={'/peso'}>REGISTRO PESO</Link>
                  </div>
                </li>


                { /* boton de DICCIONARIO */}
                <li className="nav-item active mx-4">
                  <Link className="nav-link" to={'/diccionario'}>DICCIONARIO</Link>
                </li>


                {/* BOTON PARA CERRAR SESION */}
                <li className="nav-item dropdown mx-4">
                  <a className="nav-link dropdown-toggle" 
                  id="navbarDropdownMenuLink" 
                  data-toggle="dropdown" 
                  aria-haspopup="true" 
                  aria-expanded="false">
                  { nombre_usuario }
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <button onClick={logout} className='btn'> CERRAR SESION</button>
  
                  </div>
                </li>
              </ul>
            </div>
            
          </nav>

          
          </>
            
    )
}
