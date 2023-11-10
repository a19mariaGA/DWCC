var nombreCompleto = prompt("Introduce tu nombre y apellidos:");
// Verifica si el usuario ha cancelado la entrada
if (nombreCompleto !== null && nombreCompleto.trim() !== "") {
    var totalNombre = nombreCompleto.length;
    document.write("El total de letras de tu nombre con espacios incluidos es: " + totalNombre);
    document.write("</br>");
    document.write("</br>");
    var totalSinEspacios = nombreCompleto.replace(/\s/g, "").length;
    document.write("El total de letras de tu nombre sin espacios es: " + totalSinEspacios);
    document.write("</br>");
    document.write("</br>");
    var nombreMinusculas = nombreCompleto.toLowerCase();
    document.write("Tu nombre en minúsculas es: " + nombreMinusculas);
    document.write("</br>");
    document.write("</br>");
    var nombreMayusculas = nombreCompleto.toUpperCase();
    document.write("Tu nombre en mayúsculas es: " + nombreMayusculas);
    document.write("</br>");
    document.write("</br>");
    var partes = nombreCompleto.split(" ");
    var nombre = partes[0];
    var apellido1 = partes[1];
    var apellido2 = partes[2];
    document.write(partes.join(" "));
    document.write("</br>");
    document.write("</br>");
    var newNombre = nombre.toLowerCase() + apellido1.charAt(0).toUpperCase() + apellido2.charAt(0).toUpperCase();
    document.write("Tu nombre con el nuevo formato es: " + newNombre);
    document.write("</br>");
    document.write("</br>");
}
else {
    document.write("No ha introduccido ningun nombre. </br></br>");
}
var contrasena = prompt("Introduce tu contraseña:");
// Verifica si el usuario ha cancelado la entrada
if (contrasena !== null && contrasena.trim() !== "") {
    function validacion(contrasena) {
        // Longitud entre 8 y 16 caracteres
        var longitudValida = contrasena.length >= 8 && contrasena.length <= 16;
        // Al menos una mayúscula
        var tieneMayuscula = /[A-Z]/.test(contrasena);
        // Al menos una minúscula
        var tieneMinuscula = /[a-z]/.test(contrasena);
        // Al menos un número
        var tieneNumero = /\d/.test(contrasena);
        // Al menos un carácter especial
        var tieneEspecial = /[_\-@#$%&]/.test(contrasena);
        // Comprobar todas las condiciones
        if (longitudValida && tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial) {
            return true;
        }
        else {
            return false;
        }
    }
    if (validacion(contrasena)) {
        document.write("<strong>¡Contraseña válida!<strong>");
    }
    else {
        document.write("<strong>¡La contraseña no es válida!<strong>");
    }
}
else {
    document.write("No ha introducido la contraseña.");
}
