import { Routes, Route, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

//--------------LOGIN-----------------
import { Login } from './componentes/login/Login'
import { Registro } from './componentes/login/Registro'
//--------------MENU-----------------
import { Menu } from './componentes/panel/Menu'

import { ListUsuarios } from './componentes/usuarios/ListUsuarios'


//--------------HOME-----------------
import {Home} from './componentes/home/Home.jsx'


//--------------ALUMNOS-----------------
import { Alumnos } from './componentes/alumnos/Alumnos'
import { Inscribirse } from './componentes/alumnos/Inscribirse'
import { EditarAlumno } from './componentes/alumnos/EditarAlumno'

//--------------TURNOS-----------------
import {Alumnos_clase} from './componentes/turnos/Alumnos_clase' 

//--------------INICIO-----------------
import {Inicio} from './componentes/inicio/Inicio' 

//--------------SALUD-----------------

//1- PESO-----------------
import {Calculoimc} from './componentes/salud/Calculoimc'
import {Peso} from './componentes/salud/peso/Peso'
import {AgregarPeso} from './componentes/salud/peso/AgregarPeso'
import {EditarPeso} from './componentes/salud/peso/EditarPeso'


//2- IMC-----------------
import {Imc} from './componentes/salud/imc/Imc'
import {AgregarImc} from './componentes/salud/imc/AgregarImc'
import {EditarImc} from './componentes/salud/imc/EditarImc'


//3- RM-----------------
import {Rm} from './componentes/salud/rm/Rm'
import {AgregarRm} from './componentes/salud/rm/AgregarRm'
import {EditarRm} from './componentes/salud/rm/EditarRm'



//--------------DICCIONARIO-----------------
import {Diccionario} from './componentes/diccionario/Diccionario'

//1- TERMINO-----------------
import {CreaTermino} from './componentes/diccionario/CreaTermino'
import {EditarTermino} from './componentes/diccionario/EditarTermino'

//2- MOVIMIENTOS-----------------
import {CreaMovimientos} from './componentes/diccionario/CreaMovimientos'
import {EditarMovimiento} from './componentes/diccionario/EditarMovimiento'

//3- MATERIALES-----------------
import {CreaMateriales} from './componentes/diccionario/CreaMateriales'
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

{/* ALUMNOS */}
            <Route path='/alumnos' element={<Alumnos/>} ></Route>
            <Route path='/inscribirse' element={<Inscribirse/>} ></Route>
            <Route path='/editar_alumno/:id_alumno' element={<EditarAlumno/>} ></Route>

{/* USUARIOS */}
            <Route path='/listar_usuarios' element={<ListUsuarios/>} ></Route>




{/* TURNO */}
            <Route path='/alumnos_clase' element={<Alumnos_clase/>} ></Route>

{/* DICCIONARIO */}
            <Route path='/diccionario' element={<Diccionario/>} ></Route>
            <Route path='/termino' element={<CreaTermino/>} ></Route>
            <Route path='/movimientos' element={<CreaMovimientos/>} ></Route>
            <Route path='/materiales' element={<CreaMateriales/>} ></Route>
            <Route path='/editar_termino/:id' element={<EditarTermino/>} ></Route>
            <Route path='/editar_movimiento/:id' element={<EditarMovimiento/>} ></Route>
            <Route path='/editar_material/:id' element={<EditarMateriales/>} ></Route>

{/* PESO */}
            <Route path='/peso' element={<Peso/>} ></Route>
            <Route path='/agregar_peso' element={<AgregarPeso/>} ></Route>
            <Route path='/editar_peso/:id' element={<EditarPeso/>} ></Route>

{/* IMC */}
            <Route path='/calculoimc' element={<Calculoimc/>} ></Route>
            <Route path='/imc' element={<Imc/>} ></Route>
            <Route path='/agregar_imc' element={<AgregarImc/>} ></Route>
            <Route path='/editar_imc/:id' element={<EditarImc/>} ></Route>
{/* RM */}
            <Route path='/rm' element={<Rm/>} ></Route>
            <Route path='/agregar_rm' element={<AgregarRm/>} ></Route>
            <Route path='/editar_rm/:id' element={<EditarRm/>} ></Route>

          </Routes>
        </div>
    }
           
    </>
  )
}

export default App
