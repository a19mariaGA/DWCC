
// Número de párrafos en la página.
let numb: number = document.getElementsByTagName("p").length;
console.log("El número total de párrafos es: " + numb);

// Texto del segundo párrafo.
let segParrafo: string = document.getElementsByTagName("p")[1].textContent || '';
console.log("El segundo párrafo dice: " + segParrafo);

// Número de enlaces en la página.
let numeroEnlaces: number = document.getElementsByTagName("a").length;
console.log("El número de enlaces de la web es: " + numeroEnlaces);

// Dirección del primer enlace.
let primerSrc: string = document.getElementsByTagName("a")[0].href || '';
console.log("La dirección del primer enlace es: " + primerSrc);

// Dirección del penúltimo enlace.
let penultimoSrc: string | null =  document.getElementsByTagName('a')[document.getElementsByTagName('a').length - 2]?.getAttribute('href') || null;
console.log("La dirección del penúltimo enlace es: " + penultimoSrc);

// Número de enlaces en el primer párrafo.
let enlPriParrafo: number = document.getElementsByTagName("p")[0].getElementsByTagName("a").length;
console.log("Número de enlaces en el primer párrafo es: " + enlPriParrafo);

