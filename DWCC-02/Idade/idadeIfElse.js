

// Pedir al usuario que introduzca la edad
var edad = prompt("Cal e a tua idade:");

// Convertir la entrada a un número
edad = parseInt(edad);

// Verificar si la entrada es un número válido
if (isNaN(edad)) {
    document.write (" <h2> Debe introduccir un numero entre 0 y 100  </h2> ");
} else {
  // Determinar la categoría de edad
  if (edad >= 0 && edad <= 12) { 
    document.write(" <h2> Eres un neno. </h2>");
  } else if (edad >= 13 && edad <= 18) {
    document.write("<h2> Eres un adolescente. </h2>");
  } else if (edad >= 19 && edad <= 30) {
    document.write("<h2> Eres xoven.</h2>");
  } else if (edad >= 31 && edad <= 64) {
    document.write("<h2> Eres un adulto.</h2>");
  } else if (edad >= 65 && edad <= 100) {
    document.write("<h2> Eres un xubilado.</h2>");
  } else {
    document.write("<h2> Idade non valida. </h2> ");
  }
}
