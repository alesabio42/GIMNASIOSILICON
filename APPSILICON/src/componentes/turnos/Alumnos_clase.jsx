import React, { useEffect } from 'react'
import { useState } from 'react'
import * as API from '../../servicios/servicios'


export function Alumnos_clase(){
        const [alumnos_clase, setAlumnos_clase] = useState ([]);

        useEffect (() =>{
        API.getAlumnos_clase().then(setAlumnos_clase)
},[])


return (
    <>
<div>
<h1 className="text-black text-center bg-white">NO MAS DE 5 ALUMNOS POR TURNO</h1>
<table class="table table-dark text-center">
  <thead>
    <tr>
      <th scope="col">TURNOS</th>
      <th scope="col">DISPONIBILIDAD</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
  {alumnos_clase.map((alumnos_clase) => (
    <tr>
      <td scope="row" >{alumnos_clase.nombre}</td>
      <td>{parseInt(alumnos_clase.cantidad) < 5 ? 'Disponible' : 'NO DISPONIBLE'}</td>
    </tr>
  ))}
  </tbody>
</table>
</div>
</>)
}
