
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
  


/*
  

function esFindeSemana(){
    for (añoActual; añoActual <= 2100; añoActual++) {
        cumpleaños.setFullYear(añoActual);

        // El domingo es 0 y el sábado 6
        if (diaSemana === 0 || diaSemana === 6) {
            añosEnFinSemana.push(añoActual);
        }
    }

    return añosEnFinSemana;
}

const años = esFindeSemana();
document.write("Los años en los que tu cumpleaños cae en fin de semana hasta el 2100 son: " + años.join(', '));

*/


/*

function findAniversarioFinesDeSemana() {
    const aniversarioStr = prompt("Introduce tu fecha de aniversario (formato MM/DD): ");
    const aniversario = new Date(new Date().getFullYear(), ...aniversarioStr.split('/').map(e => parseInt(e) - 1));

    for (let year = new Date().getFullYear(); year <= 2100; year++) {
        aniversario.setFullYear(year);

        const diaSemana = aniversario.getDay();
        if (diaSemana === 0 || diaSemana === 6) {
            document.write(`Tu aniversario cae en fin de semana en el año ${year}.`);
        }
    }
    return
}





function calcularDiasRestantes() {
    const fechaFinDeCurso = new Date(new Date().getFullYear(), 5, 25); // 25 de junio
    const hoy = new Date();

    const tiempoRestante = fechaFinDeCurso - hoy;
    const diasRestantes = Math.ceil(tiempoRestante / (1000 * 60 * 60 * 24));

    console.log(`Quedan ${diasRestantes} días hasta el final del curso.`);
}

function findAniversarioFinesDeSemana() {
    const aniversarioStr = prompt("Introduce tu fecha de aniversario (formato MM/DD): ");
    const aniversario = new Date(new Date().getFullYear(), ...aniversarioStr.split('/').map(e => parseInt(e) - 1));

    for (let year = new Date().getFullYear(); year <= 2100; year++) {
        aniversario.setFullYear(year);

        const diaSemana = aniversario.getDay();
        if (diaSemana === 0 || diaSemana === 6) {
            console.log(`Tu aniversario cae en fin de semana en el año ${year}.`);
        }
    }
}

function mostrarFecha(formato) {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
    };

    const fechaActual = new Date();

    switch (formato) {
        case 1:
            console.log(fechaActual.toLocaleDateString('en-US'));
            break;
        case 2:
            console.log(fechaActual.toLocaleDateString('en-US', options));
            break;
        case 3:
            console.log(fechaActual.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
            break;
        default:
            console.log("Formato no válido.");
    }
}

function mostrarHora(formato) {
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };

    const horaActual = new Date();

    switch (formato) {
        case 1:
            console.log(horaActual.toLocaleTimeString('en-US', options));
            break;
        case 2:
            console.log(horaActual.toLocaleTimeString('en-US', { hour12: true }));
            break;
        default:
            console.log("Formato no válido.");
    }
}

// Ejemplos de uso
calcularDiasRestantes();
findAniversarioFinesDeSemana();
mostrarFecha(2);
mostrarHora(1);
*/