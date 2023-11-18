
// Creamos el array 

let paises = ["España", "Italia", "Francia", "Marruecos", "Turkia", "Grecia"];


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
  document.write(paisesInverso + ", ");
  document.write("</br>");
}


// Añadir un país al comienzo del Array

function agregarPaisAlInicio(pais) {
  document.write("Ahora el número de paises son: " + paises.unshift(pais) + " = ");
  mostrarPaises();
}

// Añadir un país al final del Array

function agregarPaisAlFinal(pais) {
  document.write("Ahora el número de paises son: " + paises.push(pais) + " = ");
  mostrarPaises();
}

// Eliminar un elemento al comienzo del Array e indicar cuál fue

function eliminarPaisAlInicio() {
  document.write("</br>Pais eliminado: " + paises.shift());
  document.write("</br>Nueva lista de paises: ");
  mostrarPaises();
}

// Eliminar un elemento al final del Array e indicar cuál fue

function eliminarPaisAlFinal() {
  document.write("</br>Pais eliminado: " + paises.pop());
  document.write("</br>Nueva lista de paises: ");
  mostrarPaises();
}


// Mostrar el elemento que se encuentre en la posición que el usuario indique

function mostrarPaisEnPosicion() {
  let posicionUsuario = prompt("Introduce la posición del país que quieres ver:");
  let posicion = parseInt(posicionUsuario);

  if (posicion >= 0 && posicion < paises.length) {
    let paisEnPosicion = paises[posicion];
    document.write("</br>El país en la posición " + posicion + " es: " + paisEnPosicion);
  } else {
    document.write("</br>No hay tantos paises en la lista");
  }
}


// Mostrar la posición en la que se encuentra un elemento indicado por el usuario

function mostrarPosicionDePais() {
  let paisUsuario = prompt("Introduce el nombre del país que quieres buscar:");
  let posicion = paises.indexOf(paisUsuario);

  if (posicion >= 0 && posicion < paises.length) {
    document.write("</br>La posición de " + paisUsuario + " en el array es: " + posicion);
  } else {
    document.write("</br>" + paisUsuario + " no se encuentra en el array");
  }
}

// Mostrar los elementos que se encuentran entre dos posiciones indicadas por el usuario

function mostrarElementosEntrePosiciones() {
  let primeraPosicion = prompt("Indique la primera posición:");
  let segundaPosicion = prompt("Indique la segunda posición:");

  let posicionInicio = parseInt(primeraPosicion);
  let posicionFin = parseInt(segundaPosicion);

  if (
    posicionInicio >= 0 &&
    posicionInicio < paises.length &&
    posicionFin >= 0 &&
    posicionFin < paises.length &&
    posicionInicio <= posicionFin
  ) {
    let elementosEntrePosiciones = paises.slice(posicionInicio, posicionFin + 1);
    document.write("<br> Los elementos entre las posiciones " +primeraPosicion + " y " + segundaPosicion + " son: " + elementosEntrePosiciones + " ");
  } else {
    document.write("<br> No existen las posiciones");
  }
}


mostrarNumeroElementos();
mostrarPaises();
mostrarPaisesInverso();
agregarPaisAlInicio("Irlanda");
agregarPaisAlFinal("Alemania");
eliminarPaisAlInicio();
eliminarPaisAlFinal();
mostrarPaisEnPosicion();
mostrarPosicionDePais();
mostrarElementosEntrePosiciones();
