var edad = prompt("  Cal e a tua idade: ");
var edadValidada = parseInt(edad);


function queEres (edad) {
    switch (true) {
      case edad >= 0 && edad <= 12:
         return " <h2> Ainda eres un neno  </h2>";
      case edad >= 13 && edad <= 18:
        return "<h2> Eres un adolescente  </h2>";
      case edad >= 19 && edad <= 30:
        return  "<h2> Eres xoven  </h2>";
      case edad >= 31 && edad <= 64:
        return "<h2> Xa eres un adulto  </h2>.";
      case edad >= 65 && edad <= 100:
        return  "<h2> Deberias estar xubilado  </h2>";
      default:
        return "<h2> A idade debe ser un numero entre 0 e 100 </h2>";
    }
  }
  
 
  if (isNaN(edadValidada)) {
    document.write(" <h2> Debe introduccir un numero enteiro entre 0 e 100. </h2>");
  } else {
    
    var categoriaEdad = queEres(edadValidada);
    document.write (categoriaEdad);
  }
  