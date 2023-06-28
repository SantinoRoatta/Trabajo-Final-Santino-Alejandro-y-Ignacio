function comprarViaje() {
  window.location.href = "comprar-viaje-new-york.html";
}

function opcion2() {
  window.location.href = "formulario-compra-new-york.html";
}

function opcion1() {
  window.location.href = "comprar-viaje-new-york-paypal.html";
}

const numerotarjeta = document.getElementById('numerotarjeta').value;
const nombreyapellido = document.getElementById('nombreyapellido').value;
const fechavencimiento = document.getElementById('fechavencimiento').value;
const codigodeseguridad = document.getElementById('codigodeseguridad').value;
const regexFecha = /^(0[1-9]|1[0-2])\/\d{2}$/;

if (numerotarjeta.length === 16 &&
    nombreyapellido.length >= 3 &&
    regexFecha.test(fechavencimiento) &&
    codigodeseguridad.length === 3) {
  console.log('Todas las validaciones son correctas. Redireccionando...');
  redireccionar();
} else {
  alert('Por favor, revise los datos ingresados.');
}
function redireccionar() {
  window.location.href = "viaje-comprado.html";
}

