/* Saludo de Bienvenida */

//let nombre = prompt("Ingrese su nombre")
//alert("Bienvenido"+" "+ nombre +" "+ "a nuestro Simulador de Inversiones")

/* Funcion del Simulador */
const TASAPFXDIA = 0.002493150684932;
function calculoDeInversion() {
    document.getElementById('profit').value = rentabilidad = (document.getElementById('import').value * document.getElementById('days').value * TASAPFXDIA);
    const resultado = document.getElementById('profit');
    resultado.textContent = `La rentabilidad es de ${rentabilidad.toFixed(2)} pesos.`;
    
}

const botonGuardar = document.getElementById('botonGuardar');
  botonGuardar.addEventListener('click', () => {
    const nombreCompleto = document.getElementById('nombreCompleto').value;
    const dni = document.getElementById('dni').value;
    const persona = {
      nombreCompleto: nombreCompleto,
      dni: dni
    };
    const personaJSON = JSON.stringify(persona);
    console.log(personaJSON);
  });
