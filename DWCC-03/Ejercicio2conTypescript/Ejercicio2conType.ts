
import * as readlineSync from "readline-sync";

// Mostrar el número de días que quedan desde hoy (día actual) hasta el final de
// curso (por ejemplo, el 25 de Junio).

// Obtener la fecha y hora actual
let fechaActual: Date = new Date();

// a esta fecha le doy yo el valor 
let finCurso: Date = new Date(2024, 5, 25); // El mes sería 5 pq serían indexados y empezamos en 0

let diasqueFaltan: number = 0;

function diashastafinCurso(): number {
    diasqueFaltan = Math.ceil((finCurso.getTime() - fechaActual.getTime()) / (24 * 60 * 60 * 1000));
    return diasqueFaltan;
}

diasqueFaltan = diashastafinCurso();
document.write("Desde hoy hasta final de curso faltan: " + diasqueFaltan + " dias </br>");

document.write(" </br>");
document.write(" </br>");

// Pide la fecha de tu cumpleaños (no hace falta el año) y muestra todos los años en
// los que tu cumpleaños caerá en fin de semana desde este año hasta el año 2100.

let process = require('process');
let stdin = process.stdin;

console.log("¿Qué día es tu cumpleaños?");
stdin.addListener("data", (data) => {
    console.log("Tu cumpleaños es: " + data.toString().trim());
    process.exit(); // Esto es importante para salir del programa después de recibir la entrada
});




// de la fecha actual me quedo solo con el año actual 
let añoActual: number = new Date().getFullYear();

// al mes se le resta 1 pq los meses en javaScrip empiezan en 0
let cumpleaños: Date = new Date(añoActual, mesCumpleaños - 1, diaCumpleaños);

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


console.log("Selecciona un formato de fecha:\n 1. 17/02/2016\n 2. Miércoles, 17 de febrero de 2016 \n 3. Wednesday, February 17, 2016");
let opcionFormatoFecha = process.openStdin();

stdin.addListener("data", (data) => {
    console.log("Tu nombre es: " + data.toString());
    
})



if (!isNaN(opcionFormatoFecha)) {
  formatearFecha(opcionFormatoFecha);
} else {
  document.write("La entrada no es válida");
}

function formatearFecha(opcion: number): void {
    switch (opcion) {
        case 1:
            //  17/02/2016
            document.write(fechaActual.toLocaleDateString('es-ES'));
            break;
        case 2:
            //  Miércoles, 17 de febrero de 2016
            document.write(fechaActual.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
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

/* Muestra la hora actual en diferentes formatos según el valor que meta el
usuario por parámetro (usa un switch):
1. 14:35:07 (hora detallada con minutos e segundos)
2. 02:35 PM o 02:35 AM (hora con minutos y AM o PM según sea antes
o después de mediodía) */

let horaActual: number = fechaActual.getHours();  // me quedo con la hora de la fecha actual 
let minutoActual: number = fechaActual.getMinutes(); // me quedo con los minutos de la fecha actual 
let segundoActual: number = fechaActual.getSeconds(); // me quedo con los segundos de la fecha actual 
let ampm: string = horaActual >= 12 ? 'PM' : 'AM';

let opcionFormatoHora: number | null = parseInt(prompt("Selecciona un formato de hora:\n 1. 14:35:07 \n 2. 02:35 PM o 02:35 AM")) ?? null;

// Verificar si la entrada es válida
if (!isNaN(opcionFormatoHora)) {
    obtenerHora(opcionFormatoHora);
} else {
    document.write("La entrada no es válida");
}

function obtenerHora(opcion2: number): void {
    switch (opcion2) {
        case 1:
            // 14:35:07
            document.write(horaActual + ":" + minutoActual + ":" + segundoActual);
            break;
        case 2:
            // 02:35 PM o 02:35 AM
            if (horaActual > 12) horaActual -= 12;
            document.write(`${horaActual}:${minutoActual}:${segundoActual} ${ampm}`);
            break;
        default:
            document.write("No ha elegido la opción correcta");
    }
}

obtenerHora(opcionFormatoHora);
