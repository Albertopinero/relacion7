function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var edad = document.getElementById('edad').value;
    var correo = document.getElementById('correo').value;
    var fecha = document.getElementById('fecha').value;
    var combo = document.getElementById('combo').value;

    if (nombre.trim() === '') {
      alert('El campo Nombre es obligatorio');
      return false;
    }

    if (isNaN(edad) || edad.trim() === '') {
      alert('El campo Edad debe ser un número válido');
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(correo)) {
      alert('El campo Correo Electrónico debe tener un formato válido');
      return false;
    }

    if (!validarFecha(fecha)) {
      alert('El campo Fecha debe tener un formato válido (dd/mm/aaaa)');
      return false;
    }

    if (combo === 'default') {
      alert('Debe seleccionar una opción del listado desplegable');
      return false;
    }

    return true;
  }

  function validarFecha(fecha) {
    var pattern = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    if (!pattern.test(fecha))
      return false;

    var dia = parseInt(fecha.replace(pattern, '$1'), 10);
    var mes = parseInt(fecha.replace(pattern, '$2'), 10) - 1; 
    var anio = parseInt(fecha.replace(pattern, '$3'), 10);

    var fechaObj = new Date(anio, mes, dia);
    return (fechaObj.getFullYear() === anio && fechaObj.getMonth() === mes && fechaObj.getDate() === dia);
  }

  window.onload = function() {
var checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.id = 'micaja';
checkbox.name = 'micaja';

var label = document.createElement('label');
label.htmlFor = 'micaja';
label.appendChild(document.createTextNode('Mayor de Edad'));

var caja = document.getElementById('caja');
caja.appendChild(checkbox);
caja.appendChild(label);
};

function seleccionarOpcion(opcion) {
var resultado = document.getElementById('resultado');
resultado.innerHTML = 'Cursará ' + opcion;
}