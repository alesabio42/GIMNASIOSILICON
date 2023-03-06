import { Routes, Route, Link } from 'react-router-dom'
import { ListCursos } from './componentes/cursos/ListCursos'
import { CreaCurso } from './componentes/cursos/CreaCurso'
// import { Principal } from './componentes/panel/Principal'
import { Alumnos } from './componentes/alumnos/Alumnos'
import { Inscribirse } from './componentes/alumnos/Inscribirse'
import { Login } from './componentes/login/Login'
import { Menu } from './componentes/panel/Menu'
import { Registro } from './componentes/login/Registro'
import { useEffect, useState } from 'react'
import { ListUsuarios } from './componentes/usuarios/ListUsuarios'
import { EditarCurso } from './componentes/cursos/EditarCurso'
import { EditarAlumno } from './componentes/alumnos/EditarAlumno'
import {Home} from './componentes/home/Home.jsx'
import {Alumnos_clase} from './componentes/cursos/Alumnos_clase' 
import {Inicio} from './componentes/inicio/Inicio' 
import {Calculoimc} from './componentes/salud/Calculoimc'
import {Peso} from './componentes/salud/Peso'
import {AgregarPeso} from './componentes/salud/AgregarPeso'
import {EditarPeso} from './componentes/salud/EditarPeso'
import {Diccionario} from './componentes/diccionario/Diccionario'
import {CreaTermino} from './componentes/diccionario/CreaTermino'
import {CreaMovimientos} from './componentes/diccionario/CreaMovimientos'
import {CreaMateriales} from './componentes/diccionario/CreaMateriales'
import {EditarTermino} from './componentes/diccionario/EditarTermino'
import {EditarMovimiento} from './componentes/diccionario/EditarMovimiento'
import {EditarMateriales} from './componentes/diccionario/EditarMateriales'


function App() {
  const [usuario, setUsuario] = useState('');

  useEffect(()=>{
    const usuarioLogueado = JSON.parse(localStorage.getItem('usuario'))
    if(usuarioLogueado){
      setUsuario(usuarioLogueado)
    }
  },[])
  
  return (
    <>
    {
      !usuario?
      <>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Login' element={<Login/>}></Route>
            <Route path='/registro' element={<Registro/>}></Route>
        </Routes>
      </>:
        <div className='container'>

         <Menu/> 
         <Routes>
            <Route path='/Inicio' element={<Inicio/>}></Route>
            <Route path='/listar_cursos' element={<ListCursos/>}></Route>
            <Route path='/crear_cursos' element={<CreaCurso/>} ></Route>
            <Route path='/editar_curso/:id_curso' element={<EditarCurso/>} ></Route>
            <Route path='/alumnos' element={<Alumnos/>} ></Route>
            <Route path='/inscribirse' element={<Inscribirse/>} ></Route>
            <Route path='/listar_usuarios' element={<ListUsuarios/>} ></Route>
            <Route path='/editar_alumno/:id_alumno' element={<EditarAlumno/>} ></Route>
            <Route path='/alumnos_clase' element={<Alumnos_clase/>} ></Route>
            <Route path='/calculoimc' element={<Calculoimc/>} ></Route>
            <Route path='/peso' element={<Peso/>} ></Route>
            <Route path='/agregar_peso' element={<AgregarPeso/>} ></Route>
            <Route path='/editar_peso/:id' element={<EditarPeso/>} ></Route>
            <Route path='/diccionario' element={<Diccionario/>} ></Route>
            <Route path='/termino' element={<CreaTermino/>} ></Route>
            <Route path='/movimientos' element={<CreaMovimientos/>} ></Route>
            <Route path='/materiales' element={<CreaMateriales/>} ></Route>
            <Route path='/editar_termino/:id' element={<EditarTermino/>} ></Route>
            <Route path='/editar_movimiento/:id' element={<EditarMovimiento/>} ></Route>
            <Route path='/editar_material/:id' element={<EditarMateriales/>} ></Route>
          </Routes>
        </div>
    }
           
    </>
  )
}

export default App
