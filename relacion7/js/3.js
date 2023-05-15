function enviar() {
    var Nombre = document.getElementById("nombre").value;
    var Edad = document.getElementById("edad").value;
    var Interés = document.getElementById("interes").value;

    if ( Nombre === "" || Edad === "" || Interés === "") {
        alert("Porfavor, Rellena los campos para continuar")
        return;
    }

    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("interes").value = "";
} 

    function borrar() {
    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("interes").value = "";
}

function validarEdad() {
var edadUsuario = document.getElementById("edad").value;

if (isNaN(edadUsuario)) {
document.getElementById("resultado").textContent = "Edad no válida";
return false;
}

var edadInt = parseInt(edadUsuario, 10);
if (edadInt >= 18 && edadInt <= 100) {
document.getElementById("resultado").textContent = "Edad válida";
} else {
document.getElementById("resultado").textContent = "Edad no válida";
}
}