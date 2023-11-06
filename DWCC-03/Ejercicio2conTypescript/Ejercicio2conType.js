// Mostrar el número de días que quedan desde hoy (día actual) hasta final de
// curso (por ejemplo, el 25 de junio).
// Obtener la fecha y hora actual
var fechaActual = new Date();
// A esta fecha le doy yo el valor
var finCurso = new Date(2024, 5, 25); // El mes sería 5 pq serían indexados y empezamos en 0
var diasqueFaltan;
function diashastafinCurso() {
    diasqueFaltan = Math.ceil((finCurso.getTime() - fechaActual.getTime()) / (24 * 60 * 60 * 1000));
    return diasqueFaltan;
}
diasqueFaltan = diashastafinCurso();
document.write("Desde hoy hasta final de curso faltan: " + diasqueFaltan + " días </br>");
document.write(" </br>");
document.write(" </br>");
// Pide la fecha de tu cumpleaños (no hace falta el año) y muestra todos los años en
// los que tu cumpleaños va a caer en fin de semana desde este año hasta el año 2100.
var diaCumpleaños = parseInt(prompt("¿Qué día es tu cumpleaños?") || "0");
var mesCumpleaños = parseInt(prompt("¿Qué mes es tu cumpleaños?") || "0");
// De la fecha actual me quedo solo con el año actual
var añoActual = new Date().getFullYear();
// Al mes se le resta 1 pq los meses en JavaScript empiezan en 0
var cumpleaños = new Date(añoActual, mesCumpleaños - 1, diaCumpleaños);
function esFindeSemana() {
    // Bucle para imprimir los años en los que el cumpleaños es fin de semana hasta el año 2100
    for (añoActual; añoActual <= 2100; añoActual++) {
        cumpleaños.setFullYear(añoActual);
        // Verificar si el día de cumpleaños es fin de semana (0 = domingo, 6 = sábado)
        // con getDay me quedo solo con el día
        if (cumpleaños.getDay() === 0 || cumpleaños.getDay() === 6) {
            document.write("Tu cumpleaños coincide en fin de semana los años: " + añoActual + "</br>");
        }
    }
}
esFindeSemana();
document.write(" </br>");
document.write(" </br>");
var opcionFormatoFecha = parseInt(prompt("Selecciona un formato de fecha:\n 1. 17/02/2016\n 2. Miércoles, 17 de febrero de 2016 \n 3. Wednesday, February 17, 2016") || "1");
function formatearFecha(opcion) {
    switch (opcion) {
        case 1:
            // 17/02/2016
            document.write(fechaActual.toLocaleDateString('es-ES'));
            break;
        case 2:
            // Miércoles, 17 de febrero de 2016
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
o después de mediodía)*/
var horaActual = fechaActual.getHours(); // Me quedo con la hora de la fecha actual
var minutoActual = fechaActual.getMinutes(); // Me quedo con los minutos de la fecha actual
var segundoActual = fechaActual.getSeconds(); // Me quedo con los segundos de la fecha actual
var ampm = horaActual >= 12 ? 'PM' : 'AM';
var opcionFormatoHora = parseInt(prompt("Selecciona un formato de hora:\n 1. 14:35:07 \n 2. 02:35 PM o 02:35 AM") || "1");
function obtenerHora(opcion) {
    switch (opcion) {
        case 1:
            // 14:35:07
            document.write("".concat(horaActual, ":").concat(minutoActual, ":").concat(segundoActual));
            break;
        case 2:
            // 02:35 PM o 02:35 AM
            if (horaActual > 12)
                horaActual -= 12;
            document.write("".concat(horaActual, ":").concat(minutoActual, ":").concat(segundoActual, " ").concat(ampm));
            break;
        default:
            document.write("No ha elegido la opción correcta");
    }
}
obtenerHora(opcionFormatoHora);
