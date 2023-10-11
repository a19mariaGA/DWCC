
function esPrimo(numero) {
    
    if (numero <= 1) return false;
    
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    
    return true;
}

// Ejemplo de uso
let miNumero = 8;

if (esPrimo(miNumero)) {
    document.write(miNumero + " ->"  + "<h1>  es primo. </h1>");
} else {
    document.write(miNumero + " ->" +" <h1>  no es primo.</h1>");
}



// Ejemplo de uso 2
let miNumero2 = 3;

if (esPrimo(miNumero2)) {
    document.write(miNumero2 + " ->" + " <h1>es primo.</h1>");
} else {
    document.write(miNumero2 + " ->" + " <h1>no es primo.</h1>");
}