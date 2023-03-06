import React, { useState } from 'react';
import './Calculoimc.css';

export function Calculoimc() {
  // definir los estados iniciales de los valores del formulario
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState("");

  // función que se ejecuta cuando se envía el formulario
  const calcularImc = (event) => {
    event.preventDefault(); // evitar que se recargue la página

    // calcular el IMC y actualizar el estado
    const imcCalculado = (peso / (altura * altura)).toFixed(2);
    setImc(imcCalculado);
  };

  return (
    <>

<body>
    <div class="intro">
      <h1>CALCULADORA DE IMC</h1>
      <p>El índice de masa corporal (IMC) es un número que se calcula con base en el peso y la estatura de la persona. Para la mayoría de las personas, el IMC es un indicador confiable de la gordura y se usa para identificar las categorías de peso que pueden llevar a problemas de salud.</p>
    </div>

    <div>
    <form className="form" onSubmit={calcularImc}>
    <p class="heading">INGRESAR VALORES</p>
      <input type="number" className="input" placeholder="PESO" value={peso} onChange={(event) => setPeso(event.target.value)} />
      <input type="number" className="input" placeholder="ALTURA EN METROS" value={altura} onChange={(event) => setAltura(event.target.value)} />
      <button type="submit" class="buttonimc">CALCULAR IMC</button>
      {imc && (
        <p className="imc">TU IMC ES: <strong>{imc}</strong></p>
      )}
      <div class="table-container text-center">
  <table>
    <thead>
      <tr>
        <th>Descripción</th>
        <th>IMC</th>
      </tr>
    </thead>
    <tbody>
        <tr className={imc < 16 ? "severa" : ""}>
        <td>Delgadez severa</td>
        <td>&lt; 16.00</td>
        </tr>
  
      <tr className={ imc >= 16 && imc < 17 ? "moderada" : ""}>
        <td>Delgadez moderada</td>
        <td>16.00 - 16.99</td>
      </tr>

      <tr className={ imc >= 17 && imc < 18.50 ? "aceptable" : ""}>
        <td>Delgadez aceptable</td>
        <td>17.00 - 18.49</td>
      </tr>

      <tr className={ imc >= 18.50 && imc < 25 ? "normal" : ""}>
        <td>Peso normal</td>
        <td>18.50 - 24.99</td>
      </tr>

      <tr className={ imc >= 25 && imc < 30 ? "sobrepeso" : ""}>
        <td>Sobrepeso</td>
        <td>25.00 - 29.99</td>
      </tr>

      <tr className={ imc >= 30 && imc < 35 ? "obeso-1" : ""}>
        <td>Obeso I</td>
        <td>30.00 - 34.99</td>
      </tr>

      <tr className={ imc >= 35 && imc < 40 ? "obeso-2" : ""}>
        <td>Obeso II</td>
        <td>35.00 - 39.99</td>
      </tr>

      <tr className={ imc >= 40 ? "obeso-3" : ""}>
        <td>Obeso III</td>
        <td>&gt;= 40.00</td>
      </tr>
    </tbody>
  </table>
</div>
    </form>
    
    </div>
    

    
</body>
  </>
);}
