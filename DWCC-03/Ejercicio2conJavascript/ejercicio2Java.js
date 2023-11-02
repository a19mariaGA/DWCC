
//Amosar o número de días que quedan dende hoxe (día actual) ata final de
//curso (por exemplo, o 25 de Xuño). 

 // Obtener la fecha actual
let fechaActual = new Date();

let finCurso = new Date(2024, 5, 25); // El mes sería 5 pq  serían indexados y empezamos en 0
let diasqueFaltan = new Date(); 


function diashastafinCurso(){

    diasqueFaltan=  Math.ceil((finCurso - fechaActual)/ (24 * 60 * 60 * 1000) ); 
     return diasqueFaltan;

  
}

 diasqueFaltan=diashastafinCurso();
 document.write("Desde hoy hasta final de curso faltan: " + diasqueFaltan + " dias </br>"); 



document.write(" </br>"); 
document.write(" </br>");  

//Pide a data do teu aniversario (non fai falla o ano) e saque todos os anos no
//que o teu aniversario vai caer en fin de semana dende este ano ata o ano 2100.


let diaCumpleaños = prompt("¿Qué día es tu cumpleaños?");
let mesCumpleaños = prompt("¿Qué mes es tu cumpleaños?");
let añoActual = new Date().getFullYear();
let cumpleaños = new Date(añoActual, mesCumpleaños - 1, diaCumpleaños);

// Obtengo el día de la semana

//let diaSemana = cumpleaños.getDay(); 

function esFindeSemana() {

    // Bucle para imprimir los años en los que el cumpleaños es fin de semana hasta el año 2100
    for (añoActual; añoActual <= 2100; añoActual++) {
        cumpleaños.setFullYear(añoActual);
  
      // Verificar si el día de cumpleaños es fin de semana (0 = domingo, 6 = sábado)
      if (cumpleaños.getDay() === 0 || cumpleaños.getDay() === 6) {

        document.write("Tu cumpleaños coincide en fin de semana los años: " + añoActual + "</br>");
        
      }
    }
  }
  esFindeSemana();
  
  document.write(" </br>"); 
  document.write(" </br>"); 

  let opcionFormato = parseInt(prompt("Selecciona un formato de fecha:\n 1. 17/02/2016\n 2. dia de la semana, dia mes año \n 3. Wednesday, February 17, 2016"));
  var fechaHoy = new Date();


  function formatearFecha(opcion) {

    switch (opcion) {
        case 1:
            // Formato: 17/02/2016
            document.write(fechaHoy.toLocaleDateString('es-ES'));
            break;
        case 2:
            // Formato: Mércores, 17 de febreiro de 2016
            document.write(fechaHoy.toLocaleDateString('gl-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
            break;
        case 3:
            // Formato: Wednesday, February 17, 2016
            document.write(fechaHoy.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
            break;
        default:
            document.write('No ha elegido la opción correcta');
    }
}

// Llamada a la función
formatearFecha(opcionFormato);


document.write(" </br>"); 
document.write(" </br>"); 