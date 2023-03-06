
import React from 'react';
import funcional from '../../assets/imagenes/funcional.jpg';
import crossfit from '../../assets/imagenes/crossfit2-femenina.jpg';
import musculacion from '../../assets/imagenes/musculacion.jpg';
import step from '../../assets/imagenes/STEP.jpg';
import logogym from '../../assets/imagenes/pngegg.png';
import './Inicio.css';


export function Inicio () {
  return (
<>

{/* <--ENCABEZADO-------------------------------------------------------------------------------------------------------> */}
    <div>
        <div style={{ backgroundColor: "black", fontSize: "2rem" }}>
            <h1 className="text-white text-center titulo">BOX TITI TRINING</h1>
            <p className="text-white text-center subtitulo">PARA CONSEGUIR LO QUE NUNCA HAS CONSEGUIDO, DEBES HACER ALGO QUE NUNCA HAS HECHO</p>
        </div>
    </div>

{/* <--FUNCIONAL-------------------------------------------------------------------------------------------------------> */}

    <div className="container-fluid my-container bg-dark">
      <div className="row justify-content-center mt-4">
        <div className="col-md-6">
            <h1 className="text-white text-center">FUNCIONAL</h1>

          <div className="accordion" id="accordionEjemplo">
            <div className="card">
              <div className="card-header" id="headingUno">
                <h2 className="mb-0">
                  <buttoninicio className="btn btn-link w-100 " type="buttoninicio" data-toggle="collapse" data-target="#texto1" aria-expanded="true" aria-controls="texto1">
                    FUNCIONAL
                  </buttoninicio>
                </h2>
              </div>

              <div id="texto1" className="collapse" aria-labelledby="headingUno" data-parent="#accordionEjemplo">
                <div className="card-body">
                <strong>Funcional</strong>trabaja con un conjunto muscular, que engloba el abdomen, glúteos y cadera y zona lumbar, ayuda a generar y transferir la fuerza necesaria desde los segmentos mayores a los pequeños del cuerpo durante las actividades y movimientos de los mismos.
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header" id="headingDos">
                <h2 className="mb-0">
                  <buttoninicio className="btn btn-link w-100 " type="buttoninicio" data-toggle="collapse" data-target="#texto2" aria-expanded="false" aria-controls="texto2">
                    DIAS Y HORARIOS
                  </buttoninicio>
                </h2>
              </div>

              <div id="texto2" className="collapse" aria-labelledby="headingDos" data-parent="#accordionEjemplo">
                <div className="card-body">
                <strong>Lunes, Miercoles y Viernes: </strong> 8:00 AM, 9:00 AM, 10:00 AM Y 11:00 AM
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header" id="headingTres">
                <h2 className="mb-0">
                  <buttoninicio className="btn btn-link w-100 " type="buttoninicio" data-toggle="collapse" data-target="#texto3" aria-expanded="false" aria-controls="texto3">
                    PLANES
                  </buttoninicio>
                </h2>
              </div>

              <div id="texto3" className="collapse" aria-labelledby="headingTres" data-parent="#accordionEjemplo">
                <div className="card-body">
                    <p class="m-0 p-0"><strong>1 MES: </strong> $4.000</p>
                    <p class="m-0 p-0"><strong>2 MESES: </strong> $7.000</p>
                    <p class="m-0 p-0"><strong>3 MESES: </strong> $10.500</p>  
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
            <img src={funcional} alt="Imagen" className="img-fluid w-100" />
        </div>
      </div>
    </div>



{/* <--CROSSFIT-------------------------------------------------------------------------------------------------------> */}
    <div className="container-fluid my-container bg-dark">
  <div className="row justify-content-center mt-4">
    <div className="col-md-6">
      <h1 className="text-white text-center">CROSSFIT</h1>
      <div className="accordion" id="accordionNuevo">
        <div className="card">
          <div className="card-header" id="headingCuatro">
            <h2 className="mb-0">
              <button className="btn btn-link w-100 " type="button" data-toggle="collapse" data-target="#texto4" aria-expanded="true" aria-controls="texto4">
                    ¿QUE ES CROSSFIT?
              </button>
            </h2>
          </div>
          <div id="texto4" className="collapse" aria-labelledby="headingCuatro" data-parent="#accordionNuevo">
            <div className="card-body">
                <strong>CrossFit </strong>se define como un sistema de entrenamiento de fuerza y acondicionamiento basado en ejercicios funcionales constantemente variados realizados a una alta intensidad.
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingCinco">
            <h2 className="mb-0">
              <button className="btn btn-link w-100 " type="button" data-toggle="collapse" data-target="#texto5" aria-expanded="false" aria-controls="texto5">
                DIAS Y HORARIOS
              </button>
            </h2>
          </div>
          <div id="texto5" className="collapse" aria-labelledby="headingCinco" data-parent="#accordionNuevo">
            <div className="card-body">
                <strong>Todos los días: </strong> 2:00 PM, 3:00 PM, 4:00 PM, 5:00 PM, 6:00 PM, 7:00 PM, 8:00 PM y 9:00 PM
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingSeis">
            <h2 className="mb-0">
              <button className="btn btn-link w-100 " type="button" data-toggle="collapse" data-target="#texto6" aria-expanded="false" aria-controls="texto6">
                 PLANES
              </button>
            </h2>
          </div>
          <div id="texto6" className="collapse" aria-labelledby="headingSeis" data-parent="#accordionNuevo">
            <div className="card-body">
                    <p class="m-0 p-0"><strong>1 MES: </strong> $5.500</p>
                    <p class="m-0 p-0"><strong>2 MESES: </strong> $10.000</p>
                    <p class="m-0 p-0"><strong>3 MESES: </strong> $15.000</p>  
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <img src={crossfit} alt="" className="img-fluid w-100" />
    </div>
  </div>
</div>

{/* <--MUSCULACION-------------------------------------------------------------------------------------------------------> */}
<div className="container-fluid my-container bg-dark">
  <div className="row justify-content-center mt-4">
    <div className="col-md-6">
      <h1 className="text-white text-center">MUSCULACION</h1>
      <div className="accordion" id="accordionEjemplo2">
        <div className="card">
          <div className="card-header" id="headingUno2">
            <h2 className="mb-0">
              <buttoninicio className="btn btn-link w-100 " type="buttoninicio" data-toggle="collapse" data-target="#texto4" aria-expanded="true" aria-controls="texto4">
                  ¿QUE ES MUSCULACION?
              </buttoninicio>
            </h2>
          </div>
          <div id="texto4" className="collapse" aria-labelledby="headingUno2" data-parent="#accordionEjemplo2">
            <div className="card-body">
                <p> <strong>La musculación </strong>es una actividad orientada a la tonificación y desarrollo muscular, mediante el uso de máquinas y pesas. Se consigue:</p>
                    <ul>
                          <li>Mejor salud física y mental</li>
                          <li>Mejora de la imagen personal</li>
                          <li>Incrementos de fortaleza física</li>
                          <li>Autoestima y confianza en las propias posibilidades</li>
                          <li>Mayor rendimiento en otras actividades físicas y profesionales</li>
                    </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingDos2">
            <h2 className="mb-0">
              <buttoninicio className="btn btn-link w-100 " type="buttoninicio" data-toggle="collapse" data-target="#texto5" aria-expanded="false" aria-controls="texto5">
                    DIAS Y HORARIOS
              </buttoninicio>
            </h2>
          </div>
          <div id="texto5" className="collapse" aria-labelledby="headingDos2" data-parent="#accordionEjemplo2">
            <div className="card-body">
                <strong> Todos los días:</strong> de 8:00 AM a 9:00 PM
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTres2">
            <h2 className="mb-0">
              <buttoninicio className="btn btn-link w-100 " type="buttoninicio" data-toggle="collapse" data-target="#texto6" aria-expanded="false" aria-controls="texto6">
                 PLANES
              </buttoninicio>
            </h2>
          </div>
          <div id="texto6" className="collapse" aria-labelledby="headingTres2" data-parent="#accordionEjemplo2">
            <div className="card-body">
                    <p class="m-0 p-0"><strong>1 MES: </strong> $5.000</p>
                    <p class="m-0 p-0"><strong>2 MESES: </strong> $9.000</p>
                    <p class="m-0 p-0"><strong>3 MESES: </strong> $13.000</p>  
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <img src={musculacion} alt="Imagen" className="img-fluid w-100" />
    </div>
  </div>
</div>


{/* <--SETP-------------------------------------------------------------------------------------------------------> */}
<div className="container-fluid my-container bg-dark">
  <div className="row justify-content-center mt-4">
    <div className="col-md-6">
        <h1 className="text-white text-center">STEP</h1>
      <div className="accordion" id="accordionEjemplo2">
        <div className="card">
          <div className="card-header" id="headingCuatro2">
            <h2 className="mb-0">
              <button className="btn btn-link w-100 " type="button" data-toggle="collapse" data-target="#texto4-2" aria-expanded="true" aria-controls="texto4-2">
                  ¿QUE ES STEP?
              </button>
            </h2>
          </div>

          <div id="texto4-2" className="collapse" aria-labelledby="headingCuatro2" data-parent="#accordionEjemplo2">
            <div className="card-body">
                <strong>Step </strong>es una actividad física variante del aeróbic que consiste en la realización de una secuencia de ejercicios sobre un escalón, denominado step. Principalmente se asocia con beneficios cardiovasculares y musculares, aunque gracias a las subidas y bajadas que se realizan sobre el step, también se le atribuye la mejora de la resistencia aeróbica, la fuerza física y la flexibilidad corporal.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" id="headingCinco2">
            <h2 className="mb-0">
              <button className="btn btn-link w-100 " type="button" data-toggle="collapse" data-target="#texto5-2" aria-expanded="false" aria-controls="texto5-2">
                DIAS Y HORARIOS
              </button>
            </h2>
          </div>

          <div id="texto5-2" className="collapse" aria-labelledby="headingCinco2" data-parent="#accordionEjemplo2">
            <div className="card-body">
                <strong>Martes y Jueves: </strong>8:00 AM, 9:00 AM, 10:00 AM Y 11:00 AM
            </div>
          </div>

        </div>
        <div className="card">
          <div className="card-header" id="headingSeis2">
            <h2 className="mb-0">
              <button className="btn btn-link w-100 " type="button" data-toggle="collapse" data-target="#texto6-2" aria-expanded="false" aria-controls="texto6-2">
                PLANES
              </button>
            </h2>
          </div>

          <div id="texto6-2" className="collapse" aria-labelledby="headingSeis2" data-parent="#accordionEjemplo2">
            <div className="card-body">
                    <p class="m-0 p-0"><strong>1 MES: </strong> $4.000</p>
                    <p class="m-0 p-0"><strong>2 MESES: </strong> $7.000</p>
                    <p class="m-0 p-0"><strong>3 MESES: </strong> $10.000</p>  
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="col-md-6">
        <img src={step} alt="Imagen" className="img-fluid w-100" />
    </div>
  </div>
</div>

<div class="container-fluid bg-dark text-center">
        <div id="footer" class="row p-5">
            <div class="col">
                
                <a href="../index.html" class=" align-items-center mb-3 link-light text-decoration-none">
                    <img src={logogym} alt="logo gimnasio" width="60" height="60"/>
                </a>
                <p class="text-light">&copy; 2023</p>
                <p class="text-light">SITIO CREADO POR <strong>SABIO BEZUS ALEJANDRO</strong></p>

            </div>
            <div class="col">
            
                <h5 class="text-light">Redes Sociales</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="https://www.instagram.com/alejandrogsabio/" target="_blank" class="nav-link p-0 btn-instagram">Instagram</a></li>
                </ul>

            </div>
            <div class="col">
                
                <h5 class="text-light">Ubicacion</h5>
                <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Posadas, Misiones</a></li>
                </ul>

            </div>
        </div>
    </div>

    </>

  );
};
