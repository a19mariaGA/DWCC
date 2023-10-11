var a = 0; // primer número
var b = 1; // segundo número
var i = 0; // empezamos en 0
var n = 10; // un bucle de 10 números 
while (i < n) {
    var numero = a + b;
    a = b;
    b = numero;
    i++;
    console.log(numero);
}
