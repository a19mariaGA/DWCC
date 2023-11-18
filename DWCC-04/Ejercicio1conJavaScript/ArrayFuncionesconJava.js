
// Creamos el array 

let paises = ["España","Italia","Francia","Marruecos","Turkia", "Grecia"]

//Amosa o número de elementos do Array

document.write("El número de elementos que hay en el array es de: " + paises.length + "<br>");

//Amosa todos os países


for (let i in paises){

   
    document.write (paises[i] + ", ");

}

document.write ( "</br>");
//Amosa todos os países en sentido inverso. Ollo, que o Array
//orixinal non quede modificado, é dicir, que non quede ordenado ao revés.


let paisesInverso = paises.slice().reverse();
document.write( paisesInverso + ", ");


//Engade un país ao comezo do Array

document.write ( "</br>");

document.write ("Ahora el número de paises son: " + paises.unshift("Irlanda")+" = ");

for (let i in paises){
 document.write ( paises[i] + ", ");
}


//Engade un país ao final do Array

document.write ( "</br>");

document.write ("Ahora el número de paises son: " + paises.push("Alemania")+" = ");

for (let i in paises){
 document.write ( paises[i] + ", ");
}

//Elimina un elemento ao comezo do Array e indica cal foi.

document.write ("</br>Pais eliminado: "+  paises.shift());

document.write ( "</br>Nueva lista de paises: ");
for (let i in paises){
    document.write (  paises[i] + ", ");
   }

//Elimina un elemento ao final do Array e indica cal foi.

document.write ("</br>Pais eliminado: "+  paises.pop());

document.write ( "</br>Nueva lista de paises: ");
for (let i in paises){
    document.write (  paises[i] + ", ");
   }


//Amosa o elemento que se atope na posición que che indique o usuario.


let posicionUsuario = prompt("Introduce la posición del país que quieres ver: ");


let posicion = parseInt(posicionUsuario);

if (posicion >= 0 && posicion < paises.length) {

    let paisEnPosicion = paises[posicion];

    document.write("</br>El país en la posición " + posicion + " es: "+ paisEnPosicion);
  } else {
    document.write("</br>No hay tantos paises en la lista");
  }


  //Amosa a posición na que se atopa un elemento indicado polo usuario.


let paisUsuario = prompt("Introduce el nombre del país que quieres buscar:");

let posicion2 = paises.indexOf(paisUsuario);

if (posicion2 >= 0 && posicion2 < paises.length) {
  document.write("</br>La posición de "+ paisUsuario +  " en el array es: " + posicion);
} else {
    document.write("</br>" +paisUsuario +" no se encuentra en el array");
}

//Amosa os elementos que se atopan entre dúas posicións indicadas polo usuario.

let primeraPosicion = prompt("Indique la primera posición:");
let segundaPosicion = prompt("Indique la segunda posición:");

// Convertir las entradas del usuario a números
let posicionInicio = parseInt(primeraPosicion);
let posicionFin = parseInt(segundaPosicion);

// Verificar si las posiciones son válidas
if ( posicionInicio >= 0 && posicionInicio < paises.length && posicionFin >= 0 &&
  posicionFin < paises.length &&  posicionInicio <= posicionFin
) {
  let elementosEntrePosiciones = paises.slice(posicionInicio, posicionFin + 1);
  document.write("<br> Los elementos entre las posiciones son:", elementosEntrePosiciones);
} else {
    document.write("<br> No existen esas posiciones");
}