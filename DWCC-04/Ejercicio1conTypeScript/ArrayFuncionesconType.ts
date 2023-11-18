// Creamos el array 
let paises: string[] = ["España", "Italia", "Francia", "Marruecos", "Turkia", "Grecia"];

// Mostrar el número de elementos del Array
function mostrarNumeroElementos() {
    document.write("El número de elementos que hay en el array es de: " + paises.length + "<br>");
}

// Mostrar todos los países
function mostrarPaises() {
    for (let i in paises) {
        document.write(paises[i] + ", ");
    }
    document.write("</br>");
}

// Mostrar todos los países en sentido inverso
function mostrarPaisesInverso() {
    let paisesInverso = paises.slice().reverse();
    document.write(paisesInverso.join(", "));
}

// Añadir un país al comienzo del Array
function anadirPaisAlComienzo(pais: string) {
    document.write("</br>Ahora el número de paises son: " + paises.unshift(pais) + " = ");
    for (let i in paises) {
        document.write(paises[i] + ", ");
    }
}

// Añadir un país al final del Array
function anadirPaisAlFinal(pais: string) {
    document.write("</br>Ahora el número de paises son: " + paises.push(pais) + " = ");
    for (let i in paises) {
        document.write(paises[i] + ", ");
    }
}

// Eliminar un elemento al comienzo del Array e indicar cuál fue
function eliminarPaisAlComienzo() {
    document.write("</br>Pais eliminado: " + paises.shift());
    document.write("</br>Nueva lista de paises: ");
    for (let i in paises) {
        document.write(paises[i] + ", ");
    }
}

// Eliminar un elemento al final del Array e indicar cuál fue
function eliminarPaisAlFinal() {
    document.write("</br>Pais eliminado: " + paises.pop());
    document.write("</br>Nueva lista de paises: ");
    for (let i in paises) {
        document.write(paises[i] + ", ");
    }
}

// Mostrar el elemento que se encuentre en la posición que el usuario indique
function mostrarPaisEnPosicion(posicionUsuario: number) {
    if (posicionUsuario >= 0 && posicionUsuario < paises.length) {
        let paisEnPosicion: string = paises[posicionUsuario];
        document.write("</br>El país en la posición " + posicionUsuario + " es: " + paisEnPosicion);
    } else {
        document.write("</br>No hay tantos paises en la lista");
    }
}

// Mostrar la posición en la que se encuentra un elemento indicado por el usuario
function mostrarPosicionPais(paisUsuario: string | null) {
    let posicion: number = paises.indexOf(paisUsuario || "");
    if (posicion >= 0 && posicion < paises.length) {
        document.write("</br>La posición de " + paisUsuario + " en el array es: " + posicion);
    } else {
        document.write("</br>" + paisUsuario + " no se encuentra en el array");
    }
}

// Mostrar los elementos que se encuentran entre dos posiciones indicadas por el usuario
function mostrarElementosEntrePosiciones(primeraPosicion: number, segundaPosicion: number) {
    if (primeraPosicion >= 0 && primeraPosicion < paises.length && segundaPosicion >= 0 &&
        segundaPosicion < paises.length &&  primeraPosicion <= segundaPosicion) {
        let elementosEntrePosiciones: string [] = paises.slice(primeraPosicion, segundaPosicion + 1);
        document.write("<br> Los elementos entre las posiciones " +primeraPosicion + " y " + segundaPosicion + " son: "  + elementosEntrePosiciones.join(","));
    } else {
        document.write("<br> No existen esas posiciones");
    }
}


mostrarNumeroElementos();
mostrarPaises();
mostrarPaisesInverso();
anadirPaisAlComienzo("Irlanda");
anadirPaisAlFinal("Alemania");
eliminarPaisAlComienzo();
eliminarPaisAlFinal();
mostrarPaisEnPosicion(parseInt(prompt("Introduce la posición del país que quieres ver:") || "0"));
mostrarPosicionPais(prompt("Introduce el nombre del país que quieres buscar:"));
mostrarElementosEntrePosiciones(parseInt(prompt("Indique la primera posición:") || "0"), parseInt(prompt("Indique la segunda posición:") || "2"));
