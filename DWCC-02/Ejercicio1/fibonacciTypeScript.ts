
    let a = 0;  // primer número
    let b = 1;  // segundo número

    let i = 0;   // empezamos en 0
    const n = 10  // un bucle de 10 números 

    while (i < n) {
      const numero = a + b;
      a = b;
      b = numero;
      i++;

      console.log(numero); 
    }
 
  
 
  