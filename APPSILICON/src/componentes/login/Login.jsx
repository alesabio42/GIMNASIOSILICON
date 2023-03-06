import { useState } from "react"
import { Link } from "react-router-dom"
import * as API from '../../servicios/servicios'
import './Login.css';

export function Login (){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [mensajeError, setmensajeError] = useState('')

    const enviarForm  = async (event)=>{
        event.preventDefault();
        const user = await API.Login({username, password})
        if(user.status){
            // console.log(user.token);
             window.localStorage.setItem('usuario', JSON.stringify(user));
             window.localStorage.setItem('token', JSON.stringify(user.token));
            setUsername('')
            setPassword('')
            window.location.reload(true)
        }else{
            setmensajeError(user.mensaje)
            setTimeout(()=>{
                setmensajeError('')
            }, 4000)
        }
    }
    return (
    <body id="login">

        <div class="login-box">
        <p>INICIAR SESION</p>
        <form onSubmit={enviarForm}>
                 {
                    mensajeError?
                    <div class="alert alert-danger" role="alert">
                     {mensajeError}
                    </div>:''
                }
            <div class="user-box">
            <input 
            required="" 
            name="" 
            type="text"
            value={username}
            onChange={(event)=>setUsername(event.target.value)}
            />
            <label>Usuario</label>
            </div>

            <div class="user-box">
            <input 
            required="" 
            name="" 
            type="password"
            value={password}
            onChange={(event)=>setPassword(event.target.value)} 
            />
            <label>Contraseña</label>
            </div>

            <a>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <button type="submit">Ingresar</button>
            </a>
        </form>
        <p>No tienes una cuenta aún? <a href="/Registro" class="a2">REGISTRATE!</a></p>
        </div>

    </body>
)
};
