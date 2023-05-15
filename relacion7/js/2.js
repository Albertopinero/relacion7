function enviar() {
    var jugador1 = document.getElementById("nombre").value;
    var jugador2 = document.getElementById("apellidos").value;
    var jugador3 = document.getElementById("edad").value;

    if ( jugador1 === "" || jugador2 === "" || jugador3 === "") {
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