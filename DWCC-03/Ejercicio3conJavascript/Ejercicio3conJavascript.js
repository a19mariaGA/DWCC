

//Pide ao usuario o seu nome e apelidos nunha única petición (pode ser un prompt)

let nombreApellidos  = prompt("Introduce tu nombre y apellidos:");

//O tamaño do nome e dos apelidos.

let totalNombre = nombreApellidos.length; 
document.write ("El total de letras de tu nombre con espacios incluidos es: " + totalNombre); 


document.write ("</br>"); 
document.write ("</br>"); 
//O tamaño do nome e dos apelidos sen espazos

let totalSinEspacios = nombreApellidos.replace(/\s/g, "").length;
document.write ("El total de letras de tu nombre sin espacios es: " + totalSinEspacios); 

document.write ("</br>"); 
document.write ("</br>"); 


// O nome e os apelidos en minúsculas

let nombreMinusculas =  nombreApellidos.toLowerCase();
document.write ("Tu nombre en minusculas es: " + nombreMinusculas); 


document.write ("</br>"); 
document.write ("</br>"); 

// E en maiúsculas

let nombreMayusculas =  nombreApellidos.toUpperCase();
document.write ("Tu nombre en mayusculas es: " + nombreMayusculas); 

// Que amose separado Nome, Apelido1 e Apelido2.

document.write ("</br>"); 
document.write ("</br>"); 


let partes = nombreApellidos.split(" ");
let nombre = partes[0];
let apellido1 = partes[1];
let apellido2 = partes[2];

document.write (partes); 

 /*Unha proposta de nome de usuario co nome en minúsculas, a incial do
primeiro apelido en maiúsculas e a inicial do segundo apelido tamén en
maiúsculas. Por exemplo, para Gerardo Otero Rodriguez: gerardoOR*/

document.write ("</br>"); 
document.write ("</br>"); 

let newNombre = nombre.toLowerCase() + apellido1.charAt(0).toUpperCase() + apellido2.charAt(0).toUpperCase();

document.write ("Tu nombre con el nuevo formato es: " + newNombre);


document.write ("</br>"); 
document.write ("</br>"); 

 // Pide agora unha contrasinal y comprobaremos que cumpre coas seguintes premisas


 let contrasinal = prompt("Introduce una contraseña: ");

 /*
 function validacion(contrasinal) {
     // Longitud entre 8 y 16 caracteres
     var longitudValida = contrasinal.length >= 8 && contrasinal.length <= 16;
 
     // Al menos una mayúscula
     var tieneMayuscula = /[A-Z]/.test(contrasinal);
 
     // Al menos una minúscula
     var tieneMinuscula = /[a-z]/.test(contrasinal);
 
     // Al menos un número
     var tieneNumero = /\d/.test(contrasinal);
 
     // Al menos un carácter especial
     var tieneEspecial = /[_\-@#$%&]/.test(contrasinal);
 
     // Comprobar todas las condiciones
     if (longitudValida && tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial) {
         return true;
     } else {
         return false;
     }
 }
 
 if (validacion(contrasinal)) {
     document.write("<strong>¡Contraseña valida!<strong>");
 } else {
        document.write("<strong> ¡La contraseña no es valida! <strong>");
 }*/
 
 function comprobarContrasinal(contrasinal) {
    // Comprobar a lonxitude
    if (contrasinal.length < 8 || contrasinal.length > 16) {
      return false;
    }
  
    // Comprobar se hai algúnha maiúscula
    if (!/[A-Z]/.test(contrasinal)) {
      return false;
    }
  
    // Comprobar se hai algúnha minúscula
    if (!/[a-z]/.test(contrasinal)) {
      return false;
    }
  
    // Comprobar se hai algún número
    if (!/\d/.test(contrasinal)) {
      return false;
    }
  
    // Comprobar se hai algún caracter especial
    if (!/[_,\-@#$%&]/.test(contrasinal)) {
      return false;
    }
  
    // Se todas as condicións son cumpridas, a contrasinal é válida
    return true;
  }
  
  // Chamar a función e mostrar o resultado
  if (comprobarContrasinal(contrasinal)) {
    document.write("<strong>¡Contraseña válida!</strong>");
  } else {
    document.write("<strong>¡La contraseña no es válida!</strong>");
  }