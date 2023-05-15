function enviar() {
    var jugador1 = document.getElementById("Jugador1").value;
    var jugador2 = document.getElementById("Jugador2").value;
    var jugador3 = document.getElementById("Jugador3").value;

    if ( jugador1 === "" || jugador2 === "" || jugador3 === "") {
        alert("Porfavor, Rellena los campos para continuar")
        return;
    }

    document.getElementById("jugador1").value = "";
    document.getElementById("jugador2").value = "";
    document.getElementById("jugador3").value = "";
} 

    function borrar() {
    document.getElementById("jugador1").value = "";
    document.getElementById("jugador2").value = "";
    document.getElementById("jugador3").value = "";
}