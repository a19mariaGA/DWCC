

//O número de parágrafos da páxina.


    let numb = document.getElementsByTagName("p").length;
    console.log("El número total de parrafos es: " + numb );

//O texto do segundo parágrafo.

  
let segParrafo= document.getElementsByTagName("p")[1].textContent;
console.log("El segundo parrafo dice: " + segParrafo );

//O número de ligazóns da páxina.    
 
let numeroEnlaces= document.getElementsByTagName("a").length;
console.log("El numero de enlaces de la web es: " + numeroEnlaces );

//Enderezo da primeira ligazón. 

let primerSrc = document.getElementsByTagName("a")[0].href;
console.log("La direccion del primer enlace es: " + primerSrc );

//Enderezo da penúltima ligazón.


let penultimoSrc =  document.getElementsByTagName('a');

penultimoSrc =document.getElementsByTagName('a')[penultimoSrc.length - 2].getAttribute('href');
console.log("La direccion del penúltima enlace es: " + penultimoSrc );

//Número de ligazóns do primeiro parágrafo
 
let enlPriParrafo = document.getElementsByTagName("p")[0].getElementsByTagName("a").length;
console.log("Número de enlaces del parrafo es: " + enlPriParrafo);


   




