const API_URL ='http://localhost:3300'

export async function getCursos() {
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await fetch(`${API_URL}/cursos`, requestOptions);
      const data = await response.json(); // Await la respuesta de la promesa
      return data;
    } catch(error) {
      console.log('Nuestro error', error);
    }
  }


export async function getCursoById(id_curso){
    try{
        const response = await fetch(`${API_URL}/cursos/${id_curso}`);
        const data = await response.json();
        return data[0];
    }catch(error){
        console.log('Nuestro error', error);
    }
}

export function UpdateCurso(id_curso, nombre_curso){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(nombre_curso)
    };
    fetch(`${API_URL}/cursos/${id_curso}`, requestOptions)
    
}

export async function getUsuarios(){
    const token = JSON.parse(localStorage.getItem('token'));
    
    const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      
    try{
        const response = await fetch(`${API_URL}/usuarios`, requestOptions);
        const data = await response.json();
        return data;
    }catch(error){
        console.log('Nuestro error', error);
    }
}

// traer los alumnos
export async function getAlumnos(){
    const token = JSON.parse(localStorage.getItem('token'));
    
    const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
    try{
        const response = await fetch(`${API_URL}/alumnos`, requestOptions);
        const data = await response.json();
        return data;
    }catch(error){
        console.log('Nuestro error', error);
    }
}

    


export async function BuscarAlumnos(filtros){
    const requestOptions={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(filtros)
    };
    const response = await fetch(`${API_URL}/buscar_alumnos`, requestOptions)
    const data = await response.json();
        return data;
}
    
export function SaveCurso(datos){
    const requestOptions={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
    };
    fetch(`${API_URL}/cursos`, requestOptions)
    
}

    
export function SaveAlumno(datos){
    const requestOptions={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
    };
    fetch(`${API_URL}/alumnos`, requestOptions)
    
}


export async function Login(datos){
    const requestOptions={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
    };
    try{
    const response = await fetch(`${API_URL}/login`, requestOptions)
    const data = await response.json();
    console.log(data)
    return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}

export async function Registro(datos){
    const requestOptions={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
    };
    try{
    const response = await fetch(`${API_URL}/registro`, requestOptions)
    const data = await response.json();
    console.log(data)
    return data;
    } catch(e){
        // console.log('no funciona')
    }
}

export async function BajaUsuario(id_usuario){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',

        }
    };
    try{
        const response = await fetch(`${API_URL}/bajausuario/${id_usuario}`, requestOptions)
        const data = await response.json();
        console.log(data)
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}

export async function AltaUsuario(id_usuario){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try{
        const response = await fetch(`${API_URL}/altausuario/${id_usuario}`, requestOptions)
        const data = await response.json();
        // console.log(data)
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}

export async function BajaCurso(id_curso){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        }
    };
    try{
        const response = await fetch(`${API_URL}/bajacurso/${id_curso}`, requestOptions)
        const data = await response.json();
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}

export async function AltaCurso(id_curso){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try{
        const response = await fetch(`${API_URL}/altacurso/${id_curso}`, requestOptions)
        const data = await response.json();
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}

export async function CambioEstadoAlumno(id_alumno, datos){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    };
    try{
        const response = await fetch(`${API_URL}/cambioestadoalumno/${id_alumno}`, requestOptions)
        const data = await response.json();
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}

export async function getAlumnoById(id_alumno){
    try{
        const response = await fetch(`${API_URL}/alumnos/${id_alumno}`);
        const data = await response.json();
        return data[0];
    }catch(error){
        console.log('Nuestro error', error);
    }
}

export function UpdateAlumno(id_alumno, datos){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
    };
    fetch(`${API_URL}/alumnos/${id_alumno}`, requestOptions)
    
}




// ------------------------------------------------------TURNOS---------------------------------------------------------------------
// ------------------------------------------------------TURNOS---------------------------------------------------------------------
// ------------------------------------------------------TURNOS---------------------------------------------------------------------
// TRAE LAS CLASES Y LA CANTIDAD DE ALUMNOS QUE TIENE CADA CLASE 
export async function getAlumnos_clase(){
    const token = JSON.parse(localStorage.getItem('token'));
    
    const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
    try{
        const response = await fetch(`${API_URL}/alumnos_clase`, requestOptions);
        const data = await response.json();
        return data;
    }catch(error){
        console.log('Nuestro error', error);
    }
}



// ------------------------------------------------------PESOSS---------------------------------------------------------------------
// ------------------------------------------------------PESOS---------------------------------------------------------------------
// ------------------------------------------------------PESOS---------------------------------------------------------------------
// -----------------------------PARA OBTENER, MODIFICAR Y ELIMINAR DATOS DE LA TABLA DE PESOS------------------------------------

// 1- OBTENER
export async function getPesoPorUsuarioId(usuario_id) {
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await fetch(`${API_URL}/pesos/${usuario_id}`, requestOptions);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Nuestro error', error);
    }
  }
  
// 2-AGREGAR REGISTRO DE PESO
  export function SaveRegistroPeso(datos_peso){
    const requestOptions={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos_peso)
    };
    fetch(`${API_URL}/registropeso`, requestOptions)
    
}

// 3-EDITAR REGISTRO DE PESO
export async function getPesoById(id){
    try{
        const response = await fetch(`${API_URL}/peso/${id}`);
        const data = await response.json();
        return data[0];
    }catch(error){
        console.log('Nuestro error', error);
    }
}

export function UpdatePeso(id, datos_peso){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos_peso)
    };
    fetch(`${API_URL}/peso/${id}`, requestOptions)
    
}

// 4-ELIMINAR REGISTRO DE PESO
export async function EliminarPeso(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    };
    try {
        const response = await fetch(`${API_URL}/eliminarpeso/${id}`, requestOptions);
        const data = await response.json();
        return data;
    } catch(e) {
        alert('No se puede conectar con el servidor');
    }
}



// ------------------------------------------------------IMC---------------------------------------------------------------------
// ------------------------------------------------------IMC---------------------------------------------------------------------
// ------------------------------------------------------IMC---------------------------------------------------------------------
// -----------------------------PARA OBTENER, MODIFICAR Y ELIMINAR DATOS DE LA TABLA DE PESOS------------------------------------

// 1- OBTENER
export async function getImcPorUsuarioId(usuario_id) {
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await fetch(`${API_URL}/imc/${usuario_id}`, requestOptions);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Nuestro error', error);
    }
  }
  
// 2-AGREGAR REGISTRO DE IMC
  export function SaveRegistroImc(datos_imc){
    const requestOptions={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos_imc)
    };
    fetch(`${API_URL}/registroimc`, requestOptions)
    
}

// 3-EDITAR REGISTRO DE IMC
export async function getImcById(id){
    try{
        const response = await fetch(`${API_URL}/nimc/${id}`);
        const data = await response.json();
        return data[0];
    }catch(error){
        console.log('Nuestro error', error);
    }
}

export function UpdateImc(id, datos_imc){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos_imc)
    };
    fetch(`${API_URL}/imc/${id}`, requestOptions)
    
}

// 4-ELIMINAR REGISTRO DE IMC
export async function EliminarImc(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    };
    try {
        const response = await fetch(`${API_URL}/eliminarimc/${id}`, requestOptions);
        const data = await response.json();
        return data;
    } catch(e) {
        alert('No se puede conectar con el servidor');
    }
}











// -----------------------------------------------------------DICCIONARIO-------------------------------------------------------
// -----------------------------------------------------------DICCIONARIO-------------------------------------------------------
// -----------------------------------------------------------DICCIONARIO-------------------------------------------------------




// -----------------------------------------------------------TERMINOS BASICOS---------------------------------------------------
// -----------------------------------------------------------TERMINOS BASICOS---------------------------------------------------
// -----------------------------------------------------------TERMINOS BASICOS---------------------------------------------------
//PARA OBTENER, MODIFICAR Y ELIMINAR DATOS DE LA TABLA TERMINOS BASICOS

// 1- OBTENER
export async function getTerminosBasicos() {
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await fetch(`${API_URL}/terminosbasicos`, requestOptions);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Nuestro error', error);
    }
  }
  
// 2-AGREGAR REGISTRO DE TERMINO
  export function SaveTerminos(datos_terminos){
    const requestOptions={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos_terminos)
    };
    fetch(`${API_URL}/terminos`, requestOptions)
    
}

// 3-EDITAR REGISTRO DE TERMINO
export async function getTerminoById(id){
    try{
        const response = await fetch(`${API_URL}/termino/${id}`);
        const data = await response.json();
        return data[0];
    }catch(error){
        console.log('Nuestro error', error);
    }
}

export function UpdateTermino(id, datos_termino){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos_termino)
    };
    fetch(`${API_URL}/termino/${id}`, requestOptions)
    
}

// 4-ELIMINAR REGISTRO DE TERMINO BASICO
export async function EliminarTermino(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    };
    try {
        const response = await fetch(`${API_URL}/eliminartermino/${id}`, requestOptions);
        const data = await response.json();
        return data;
    } catch(e) {
        alert('No se puede conectar con el servidor');
    }
}

// -----------------------------------------------------------MOVIMIENTOS---------------------------------------------------
// -----------------------------------------------------------MOVIMIENTOS---------------------------------------------------
// -----------------------------------------------------------MOVIMIENTOS---------------------------------------------------
//PARA OBTENER, MODIFICAR Y ELIMINAR DATOS DE LA TABLA MOVIMIENTOS

// 1- OBTENER
export async function getMovimientos() {
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await fetch(`${API_URL}/movimientos`, requestOptions);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Nuestro error', error);
    }
  }
  
// 2-AGREGAR REGISTRO DE MOVIMIENTOS
  export function SaveMovimientos(datos_movimientos){
    const requestOptions={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos_movimientos)
    };
    fetch(`${API_URL}/movimientos`, requestOptions)
    
}

// 3-EDITAR REGISTRO DE MOVIMIENTO
export async function getMovimientoById(id){
    try{
        const response = await fetch(`${API_URL}/movimiento/${id}`);
        const data = await response.json();
        return data[0];
    }catch(error){
        console.log('Nuestro error', error);
    }
}

export function UpdateMovimiento(id, datos_movimiento){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos_movimiento)
    };
    fetch(`${API_URL}/movimiento/${id}`, requestOptions)
    
}

// // 4-ELIMINAR REGISTRO DE MOVIMIENTO
export async function EliminarMovimiento(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    };
    try {
        const response = await fetch(`${API_URL}/eliminarmovimiento/${id}`, requestOptions);
        const data = await response.json();
        return data;
    } catch(e) {
        alert('No se puede conectar con el servidor');
    }
}


// -----------------------------------------------------------MATERIALES---------------------------------------------------
// -----------------------------------------------------------MATERIALES---------------------------------------------------
// -----------------------------------------------------------MATERIALES---------------------------------------------------
//PARA OBTENER, MODIFICAR Y ELIMINAR DATOS DE LA TABLA MATERIALES

// 1- OBTENER
export async function getMateriales() {
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await fetch(`${API_URL}/materiales`, requestOptions);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Nuestro error', error);
    }
  }
  
// 2-AGREGAR REGISTRO DE MATERIALES
  export function SaveMateriales(datos_materiales){
    const requestOptions={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos_materiales)
    };
    fetch(`${API_URL}/materiales`, requestOptions)
    
}

// 3-EDITAR REGISTRO DE MATERIALES
export async function getMaterialById(id){
    try{
        const response = await fetch(`${API_URL}/material/${id}`);
        const data = await response.json();
        return data[0];
    }catch(error){
        console.log('Nuestro error', error);
    }
}

export function UpdateMaterial(id, datos_material){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos_material)
    };
    fetch(`${API_URL}/material/${id}`, requestOptions)
    
}

// // 4-ELIMINAR REGISTRO DE MATERIALES
export async function EliminarMaterial(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    };
    try {
        const response = await fetch(`${API_URL}/eliminarmaterial/${id}`, requestOptions);
        const data = await response.json();
        return data;
    } catch(e) {
        alert('No se puede conectar con el servidor');
    }
}