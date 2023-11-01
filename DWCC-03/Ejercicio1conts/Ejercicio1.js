var newVentana;
var newpermiso;
// En todo momento que la ventana emergente esté abierta
window.addEventListener('click', function () {
    if (newVentana && !newVentana.closed) {
        newVentana.focus();
    }
});
function abrirVent() {
    // Pide permiso al usuario y, solo si lo da, abre la nueva ventana
    newpermiso = confirm("¿Quieres abrir una nueva ventana?");
    if (newpermiso) {
        // Método que genera una nueva ventana, contiene la URL, nombre de la ventana y las características.
        newVentana = window.open("nuevo.html", "nueva", "width=300, height=300, top=400, left=400");
    }
    else {
        alert("Has pulsado cancelar");
    }
}
function cerrarVent() {
    if (newVentana) {
        newVentana.close();
        newVentana = null;
        alert("La ventana se ha cerrado.");
    }
    else {
        alert("La ventana ya está cerrada.");
    }
}
// Mueve la ventana relativa a su posición actual
function desplazarVent() {
    if (newVentana) {
        newVentana.moveBy(10, -10);
    }
    else {
        alert("La ventana está cerrada.");
    }
}
// Mueve la ventana a una posición absoluta en la pantalla.
function desplazarVent2() {
    if (newVentana) {
        newVentana.moveTo(0, 0);
    }
    else {
        alert("La ventana está cerrada.");
    }
}
function aumentarVent() {
    if (newVentana) {
        newVentana.resizeBy(50, 50);
    }
    else {
        alert("La ventana está cerrada.");
    }
}
function redimensionarVent() {
    if (newVentana) {
        newVentana.resizeTo(500, 500);
    }
    else {
        alert("La ventana está cerrada.");
    }
}
