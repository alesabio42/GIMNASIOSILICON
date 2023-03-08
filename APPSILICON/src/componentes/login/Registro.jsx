import { useState } from "react"
import { Link } from "react-router-dom";
import * as API from '../../servicios/servicios'
import './Registro.css';

export function Registro(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [apellido_nombre, setApellidonombre] = useState('');
    const [mensajeSuccess, setmensajeSuccess] = useState('');


    const registroForm  = async (event)=>{
        event.preventDefault();
        const user = await API.Registro({username, password, email, apellido_nombre})
        if(user.status){
            setmensajeSuccess(user.mensaje)
            setTimeout(()=>{
                setmensajeSuccess('');
                window.location.href = '/login';
            }, 4000)
            // window.location.reload(true)
        }
    }
    return(
        <>
        <body id="registro">
        <div className="registrofor">
        {
            mensajeSuccess?
            <div className="alert alert-success" role="alert">
                {mensajeSuccess}
            </div>:''
        }
        <div className="card">
            <div className="card-header">
                REGISTRATE Y COMENZA A ENTRENAR EN EL MEJOR BOX
            </div>
            <div className="card-body card-registro">
                <form onSubmit={registroForm}> 
                <div className="form-group text-white">
                  <label for="">NOMBRE DE USUARIO</label>
                  <input required
                  type="text" 
                  value={username} 
                  className="form-control" 
                  placeholder="NOMBRE DE USUARIO" 
                  onChange={(event)=>setUsername(event.target.value)} />
                  
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>

                <div className="form-group text-white">
                  <label for="">CONTRASEÑA</label>
                  <input required
                  type="password" 
                  value={password} 
                  className="form-control" 
                  placeholder="CONTRASEÑA" 
                  onChange={(event)=>setPassword(event.target.value)} />
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group text-white">
                  <label for="">CORREO ELECTRONICO</label>
                  <input required
                  type="email" 
                  value={email} 
                  className="form-control" 
                  placeholder="CORREO ELECTRONICO" 
                  onChange={(event)=>setEmail(event.target.value)} />
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group text-white">
                  <label for="">APELLIDO Y NOMBRE DEL USUARIO</label>
                  <input 
                  type="text" required
                  value={apellido_nombre} 
                  className="form-control" 
                  placeholder="APELLIDO Y NOMBRE DEL USUARIO" 
                  onChange={(event)=>setApellidonombre(event.target.value)} />
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn text-white">GUARDAR</button>
                    <Link to={'/'}><button type="button" className="btn btn-secondary">VOLVER</button></Link>
                </div>
                </form>
                
            </div>
        </div>
        </div>
        </body>
        </>
    )
}