
let  nuevaVentana;
let permiso; 

//En todo momento que a ventá emerxente estea aberta
window.addEventListener('click', function() {
    if (nuevaVentana && !nuevaVentana.closed) {
        nuevaVentana.focus();
    }
});


function abrirVentana() {

    //Pide permiso ao usuario e, só se o da, abre a nova ventá
     permiso = confirm("¿Quieres abrir una nueva ventana?");


    if (permiso) {

        // Es el metodo que genera una nueva ventana, contiene la url, nombre de la ventana y las caracteristicas.
        nuevaVentana = window.open("nuevo.html", "nueva", "width=300, height=300, top=400, left=400");
        
    }else {
        alert("A pulsado cancelar");
      }
}



function cerrarVentana() {
    if (nuevaVentana ) {
        nuevaVentana.close(); nuevaVentana  =  null;
        
       alert("La ventana se ha cerrado.");


    } else {
        alert("La ventana ya está cerrada.");
    }
}

//Mueve la ventana relativa a su posición actual

function desplazarVentana() {
    if (nuevaVentana) {
        nuevaVentana.moveBy(250, 250);
    } else {
        alert("La ventana está cerrada.");
    }
}

//Mueve la ventana a una posición absoluta en la pantalla.

function desplazarVentana2() {
    if (nuevaVentana ) {
        nuevaVentana.moveTo(0, 0);
    } else {
        alert("La ventana está cerrada.");
    }
}



function aumentar() {
    if (nuevaVentana) {
        nuevaVentana.resizeBy(50, 50);
    } else {
        alert("La ventana está cerrada.");
    }
}

function redimensionar() {
    if (nuevaVentana) {
        nuevaVentana.resizeTo(500, 500);
    } else {
        alert("La ventana está cerrada.");
    }
}
