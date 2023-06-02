/* Variable para almacenar la simulación */

let simulacionActual = null;

/* Guardar datos en el Storage */

const botonGuardar = document.getElementById('botonGuardar');
botonGuardar.addEventListener('click', (event) => {
  event.preventDefault();
  const nombreCompleto = document.getElementById('nombreCompleto').value;
  const dni = document.getElementById('dni').value;

  const datosLocalStorage = localStorage.getItem('datos');
  let datos = {};

  if (datosLocalStorage) {
    datos = JSON.parse(datosLocalStorage);
  }

  const simulacionesUsuario = datos[nombreCompleto] || [];
  const nuevaSimulacion = {
    dni: dni,
    rentabilidad: null 
  };

  simulacionesUsuario.push(nuevaSimulacion);

  datos[nombreCompleto] = simulacionesUsuario;
  localStorage.setItem('datos', JSON.stringify(datos));

  simulacionActual = nuevaSimulacion;

});

/* Funcion del Simulador */

const TASAPFXDIA = 97 / 36500;

function calculoDeInversion() {
  const datosLocalStorage = localStorage.getItem('datos');
  let datos = {};

  if (datosLocalStorage) {
    datos = JSON.parse(datosLocalStorage);
  }

  const nombreCompleto = document.getElementById('nombreCompleto').value;

  const simulacionesUsuario = datos[nombreCompleto] || [];

  const nuevaSimulacion = {
    dni: document.getElementById('dni').value,
    rentabilidad: null
  };

  simulacionesUsuario.push(nuevaSimulacion);

  datos[nombreCompleto] = simulacionesUsuario;
  localStorage.setItem('datos', JSON.stringify(datos));

  simulacionActual = nuevaSimulacion;

  const importe = document.getElementById('import').value;
  const dias = document.getElementById('days').value;
  const rentabilidad = importe * dias * TASAPFXDIA;

  if (simulacionActual) {
    simulacionActual.rentabilidad = rentabilidad.toFixed(2);

    datos[nombreCompleto] = simulacionesUsuario;
    localStorage.setItem('datos', JSON.stringify(datos));
  }

  const resultado = document.getElementById('profit');
  resultado.value = rentabilidad.toFixed(2);
  resultado.textContent = `La rentabilidad es de ${rentabilidad.toFixed(2)} pesos.`;
}
/* Boton para resetear formulario y datos del storage */

const resetear = document.getElementById('resetear');
resetear.addEventListener('click', function() {
  document.getElementById('nombreCompleto').value = '';
  document.getElementById('dni').value = '';
  document.getElementById('profit').value = '';
  document.getElementById('import').value = '';
  document.getElementById('days').value = '';
  
  const resultado = document.getElementById('profit');
  resultado.textContent = '';

  localStorage.removeItem('datos');
})

/* API para cotizacion de dolar*/

function obtenerCotizacionDolar() {
  const token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTcyMDkyMjgsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJ2YXJlbGFqb3NlamF2aWVyQGdtYWlsLmNvbSJ9.tquXUuWVyIphTB3G5x9YG4uokdqgDXbSz7XJE60E2kSjtE1GO61rEhzjPk4cqqzoUZsoYVhcOs5lNouBgOKJrQ';

  fetch('https://api.estadisticasbcra.com/usd', {
    headers: {
      'Authorization': 'BEARER ' + token
    }
  })
    .then(response => response.json())
    .then(data => {
      // Obtener la cotización del dólar
      const cotizacion = data[data.length - 1].v;
      
      // Mostrar la cotización en el elemento HTML
      const cotizacionElement = document.getElementById('cotizacion');
      cotizacionElement.textContent = `Cotización del dólar: ${cotizacion}`;
    })
    .catch(error => {
      // Manejo de errores en caso de que la solicitud falle
      console.log(error);
    });
}
obtenerCotizacionDolar();

