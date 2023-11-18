
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
