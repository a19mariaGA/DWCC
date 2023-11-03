
//Amosar o número de días que quedan dende hoxe (día actual) ata final de
//curso (por exemplo, o 25 de Xuño). 

 // Obtener la fecha y hora actual
let fechaActual = new Date();

// a esta fecha le doy yo el valor 
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

// de la fecha actual me quedo solo con el año actual 
let añoActual = new Date().getFullYear();

// al mes se le resta 1 pq los meses en javaScrip empiezan en 0
let cumpleaños = new Date(añoActual, mesCumpleaños - 1, diaCumpleaños);


 

function esFindeSemana() {

    // Bucle para imprimir los años en los que el cumpleaños es fin de semana hasta el año 2100
    for (añoActual; añoActual <= 2100; añoActual++) {
        cumpleaños.setFullYear(añoActual);
  
      // Verificar si el día de cumpleaños es fin de semana (0 = domingo, 6 = sábado)
      // con getDay me quedo solo con el dia 
      if (cumpleaños.getDay() === 0 || cumpleaños.getDay() === 6) {

        document.write("Tu cumpleaños coincide en fin de semana los años: " + añoActual + "</br>");
        
      }
    }
  }
  esFindeSemana();
  
  document.write(" </br>"); 
  document.write(" </br>"); 

  let opcionFormatoFecha = parseInt(prompt("Selecciona un formato de fecha:\n 1. 17/02/2016\n 2. Mércores, 17 de febreiro de 2016 \n 3. Wednesday, February 17, 2016"));
  //var fechaHoy = new Date();


  function formatearFecha(opcion) {

    switch (opcion) {
        case 1:
            //  17/02/2016
            document.write(fechaActual.toLocaleDateString('es-ES'));
            break;
        case 2:
            //  Mércores, 17 de febreiro de 2016
            document.write(fechaActual.toLocaleDateString('gl-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
            break;
        case 3:
            // Formato: Wednesday, February 17, 2016
            document.write(fechaActual.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
            break;
        default:
            document.write('No ha elegido la opción correcta');
    }
}

// Llamada a la función
formatearFecha(opcionFormatoFecha);


document.write(" </br>"); 
document.write(" </br>"); 


/*Amosa a hora actual en diferentes formatos segundo o valor que meta o
usuario por parámetro (usa un
switch):
1.14:35:07 (hora detallada con minutos e segundos)
2.02:35 PM ou 02:35 AM (hora con minutos e AM ou PM segundo sexa antes
ou despois de mediodía)*/


let horaActual = fechaActual.getHours();  // me quedo con la hora de la fecha actual 
let minutoActual = fechaActual.getMinutes(); // me quedo con los minutos de la fecha actual 
let segundoActual = fechaActual.getSeconds(); // me quedo con los segundos de la fecha actual 
let ampm = horaActual >= 12 ? 'PM' : 'AM';

let opcionFormatoHora = parseInt(prompt("Selecciona un formato de hora:\n 1. 14:35:07 \n 2. 02:35 PM ou 02:35 AM"));


function obtenerHora(opcion2) {
  switch (opcion2) {
    case 1:
      // 14:35:07
      document.write(horaActual +":" + minutoActual+":" +segundoActual);
      break;
    case 2:
      // 02:35 PM ou 02:35 AM
       if (horaActual > 12) horaActual -= 12;
       document.write(`${horaActual}:${minutoActual}:${segundoActual} ${ampm}`);
  
      break;
    default:
      document.write("No ha elegido la opción correcta");
  }
}

obtenerHora(opcionFormatoHora);
