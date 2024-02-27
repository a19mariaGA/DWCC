var _a;
// Número de párrafos en la página.
var numb = document.getElementsByTagName("p").length;
console.log("El número total de párrafos es: " + numb);
// Texto del segundo párrafo.
var segParrafo = document.getElementsByTagName("p")[1].textContent || '';
console.log("El segundo párrafo dice: " + segParrafo);
// Número de enlaces en la página.
var numeroEnlaces = document.getElementsByTagName("a").length;
console.log("El número de enlaces de la web es: " + numeroEnlaces);
// Dirección del primer enlace.
var primerSrc = document.getElementsByTagName("a")[0].href || '';
console.log("La dirección del primer enlace es: " + primerSrc);
// Dirección del penúltimo enlace.
var penultimoSrc = ((_a = document.getElementsByTagName('a')[document.getElementsByTagName('a').length - 2]) === null || _a === void 0 ? void 0 : _a.getAttribute('href')) || null;
console.log("La dirección del penúltimo enlace es: " + penultimoSrc);
// Número de enlaces en el primer párrafo.
var enlPriParrafo = document.getElementsByTagName("p")[0].getElementsByTagName("a").length;
console.log("Número de enlaces en el primer párrafo es: " + enlPriParrafo);
