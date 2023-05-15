function enviar() {
  var Nombre = document.getElementById("nombre").value;
  var Apellidos = document.getElementById("apellidos").value;
  var Edad = document.getElementById("edad").value;

  if ( Nombre === "" || Apellidos === "" || Edad === "") {
      alert("Porfavor, Rellena los campos para continuar")
      return;
  }

    document.getElementById("nombre").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("edad").value = "";
      } 

          function borrar() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("edad").value = "";
  }

function validarEdad() {
var edadUsuario = document.getElementById("edad").value;

if (isNaN(edadUsuario)) {
document.getElementById("resultado").textContent = "Edad no válida";
return false;
}

var edadInt = parseInt(edadUsuario, 10);
if (edadInt >= 1 && edadInt <= 100) {
document.getElementById("resultado").textContent = "Edad válida";
} else {
document.getElementById("resultado").textContent = "Edad no válida";
}
}