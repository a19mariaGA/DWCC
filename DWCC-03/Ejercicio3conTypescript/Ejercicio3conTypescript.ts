

let nombreCompleto: string | null = prompt("Introduce tu nombre y apellidos:");

// Verifica si el usuario ha cancelado la entrada
if (nombreCompleto !== null) {
    let totalNombre: number = nombreCompleto.length; 
    document.write("El total de letras de tu nombre con espacios incluidos es: " + totalNombre); 
    
    document.write("</br>"); 
    document.write("</br>"); 

    let totalSinEspacios: number = nombreCompleto.replace(/\s/g, "").length;
    document.write("El total de letras de tu nombre sin espacios es: " + totalSinEspacios); 
    
    document.write("</br>"); 
    document.write("</br>"); 

    let nombreMinusculas: string = nombreCompleto.toLowerCase();
    document.write("Tu nombre en minúsculas es: " + nombreMinusculas); 

    document.write("</br>"); 
    document.write("</br>"); 

    let nombreMayusculas: string = nombreCompleto.toUpperCase();
    document.write("Tu nombre en mayúsculas es: " + nombreMayusculas); 

    document.write("</br>"); 
    document.write("</br>"); 

    let partes: string[] = nombreCompleto.split(" ");
    let nombre: string = partes[0];
    let apellido1: string = partes[1];
    let apellido2: string = partes[2];


    document.write(partes.join(" "));
     

    document.write("</br>"); 
    document.write("</br>"); 

    let newNombre: string = nombre.toLowerCase() + apellido1.charAt(0).toUpperCase() + apellido2.charAt(0).toUpperCase();
  
    document.write("Tu nombre con el nuevo formato es: " + newNombre);
  
    document.write("</br>"); 
    document.write("</br>"); 
} else {
    document.write("Entrada cancelada por el usuario.");
}

let contrasena: string | null = prompt("Introduce tu contraseña:");

// Verifica si el usuario ha cancelado la entrada
if (contrasena !== null) {
    function validacion(contrasena: string): boolean {
        // Longitud entre 8 y 16 caracteres
        var longitudValida: boolean = contrasena.length >= 8 && contrasena.length <= 16;
    
        // Al menos una mayúscula
        var tieneMayuscula: boolean = /[A-Z]/.test(contrasena);
    
        // Al menos una minúscula
        var tieneMinuscula: boolean = /[a-z]/.test(contrasena);
    
        // Al menos un número
        var tieneNumero: boolean = /\d/.test(contrasena);
    
        // Al menos un carácter especial
        var tieneEspecial: boolean = /[_\-@#$%&]/.test(contrasena);
    
        // Comprobar todas las condiciones
        if (longitudValida && tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial) {
            return true;
        } else {
            return false;
        }
    }
    
    if (validacion(contrasena)) {
        document.write("<strong>¡Contraseña válida!<strong>");
    } else {
        document.write("<strong>¡La contraseña no es válida!<strong>");
    } 
} else {
    document.write("Entrada cancelada por el usuario.");
}
