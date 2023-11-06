


let newVentana1: Window | null;
let newpermiso1: boolean;

// En todo momento que la ventana emergente esté abierta
window.addEventListener('click', function() {
    if (newVentana1 && !newVentana1.closed) {
      newVentana1.focus();
    }
  });

function abrirVent1() {
    // Pide permiso al usuario y, solo si lo da, abre la nueva ventana
    newpermiso1 = confirm("¿Quieres abrir una nueva ventana?");

    if (newpermiso1) {
        // Método que genera una nueva ventana, contiene la URL, nombre de la ventana y las características.
        newVentana1 = window.open("NuevoType.html", "nueva", "width=300, height=300, top=400, left=400");
    } else {
        alert("Has pulsado cancelar");
    }
}

function cerrarVent1() {
    if (newVentana1) {
        newVentana1.close();
        newVentana1 = null;
        alert("La ventana se ha cerrado.");
    } else {
        alert("La ventana ya está cerrada.");
    }
}

// Mueve la ventana relativa a su posición actual
function desplazarVent1() {
    if (newVentana1) {
        newVentana1.moveBy(10, -10);
    } else {
        alert("La ventana está cerrada.");
    }
}

// Mueve la ventana a una posición absoluta en la pantalla.
function desplazarVent21() {
    if (newVentana1) {
        newVentana1.moveTo(0, 0);
    } else {
        alert("La ventana está cerrada.");
    }
}

function aumentarVent1() {
    if (newVentana1) {
        newVentana1.resizeBy(50, 50);
    } else {
        alert("La ventana está cerrada.");
    }
}

function redimensionarVent1() {
    if (newVentana1) {
        newVentana1.resizeTo(500, 500);
    } else {
        alert("La ventana está cerrada.");
    }
}
