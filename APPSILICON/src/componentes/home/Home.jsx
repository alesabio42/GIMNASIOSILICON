import React from 'react';
import './Home.css';
import logogym from '../../assets/imagenes/pngegg.png';

export function Home() {
  return (
<body id="home">
    <>
<div class="hero-container">
    <div class="wow fadeIn">
        <div class="hero-logo">
            <img src={logogym} alt="logo de gimnasio" width="200px" />
        </div>
            <h1>BOX TITI TRAINING</h1>
            <h2>BIENVENIDO AL MUNDO FITNESS</h2>

        <div class="actions">
            <a href="/Login" class="btn-get-started">INICIAR SESION</a>
            <a href="/Registro" class="btn-services">REGISTRARSE</a>
        </div>
    </div>
</div>
</>
</body>
);
  }