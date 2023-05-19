const botonGuardar = document.getElementById('botonGuardar');
  botonGuardar.addEventListener('click', (event) => {
    event.preventDefault(); 
    const nombreCompleto = document.getElementById('nombreCompleto').value;
    const dni = document.getElementById('dni').value;
    const persona = {
      nombreCompleto: nombreCompleto,
      dni: dni
    };
    const personaJSON = JSON.stringify(persona);
    console.log(personaJSON);
  });

/* Funcion del Simulador */
const TASAPFXDIA = 0.002493150684932;
function calculoDeInversion() {
    document.getElementById('profit').value = rentabilidad = (document.getElementById('import').value * document.getElementById('days').value * TASAPFXDIA);
    const resultado = document.getElementById('profit');
    resultado.textContent = `La rentabilidad es de ${rentabilidad.toFixed(2)} pesos.`;
}

const resetear = document.getElementById('resetear');
resetear.addEventListener('click', function() {
  document.getElementById('profit').value = '';
  document.getElementById('import').value = '';
  document.getElementById('days').value = '';
  
  const resultado = document.getElementById('profit');
  resultado.textContent = '';

});