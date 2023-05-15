function validarFormulario() {
    var nombre = document.forms["miFormulario"]["nombre"].value;
    var apellidos = document.forms["miFormulario"]["apellidos"].value;
    var direccion = document.forms["miFormulario"]["direccion"].value;
    var comentarios = document.forms["miFormulario"]["comentarios"].value;

    if (nombre == "" || apellidos == "" || direccion == "" || comentarios == "") {
      alert("Por favor, complete todos los campos de texto.");
      return false;
    }

    var telefono = document.forms["miFormulario"]["telefono"].value;
    var codigoPostal = document.forms["miFormulario"]["codigoPostal"].value;
    var edad = document.forms["miFormulario"]["edad"].value;

    if (isNaN(telefono) || isNaN(codigoPostal) || isNaN(edad)) {
      alert("Por favor, ingrese valores numéricos válidos en los campos correspondientes.");
      return false;
    }

    var email = document.forms["miFormulario"]["email"].value;

    if (!validarEmail(email)) {
      alert("Por favor, ingrese una dirección de correo electrónico válida.");
      return false;
    }

    var provincia = document.forms["miFormulario"]["provincia"].value;
    var sexo = document.forms["miFormulario"]["sexo"].value;

    if (provincia == "" || sexo == "") {
      alert("Por favor, seleccione una opción de la lista desplegable.");
      return false;
    }

    var condicionesGenerales = document.forms["miFormulario"]["condicionesGenerales"].checked;
    var avisoLegal = document.forms["miFormulario"]["avisoLegal"].checked;

    if (!condicionesGenerales || !avisoLegal) {
      alert("Por favor, acepte las condiciones generales y el aviso legal para continuar.");
      return false;
    }

    return true;
  }

  function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function seleccionarOpcion(opcion) {
    var resultado = document.getElementById('resultado');
  }    

  window.onload = function() {
var checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.id = 'micaja';
checkbox.name = 'micaja';

var label = document.createElement('label');
label.htmlFor = 'micaja';
label.appendChild(document.createTextNode('Condiciones Generales y Avisos Legales'));

var caja = document.getElementById('caja');
caja.appendChild(checkbox);
caja.appendChild(label);
};
