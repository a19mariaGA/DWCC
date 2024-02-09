// creamos  el evento  DOMContentLoadedque se dispara cuando el HTML 
// ha sido completamente cargado y analizado, sin esperar por los
// recursos externos como imágenes y hojas de estilo.
/*
 document.addEventListener('DOMContentLoaded', () => {
   const formulario = document.getElementById('formulario') as HTMLFormElement;
   formulario.addEventListener('submit', (event) => {
     event.preventDefault();
     manejarEnvioFormulario();
   });
 });


// cuando el formulario se envia se llama a la funcion manejarEnvioFormulario
//recopila los datos del formulario y valida con el resto de funciones que hay en el codigo
 
 function manejarEnvioFormulario() {
   const formData: FormularioData  = {
     nombre: obtenerValorInput('nombre'),
     apellidos: obtenerValorInput('apellidos'),
     edad: obtenerValorNumerico('edad'),
     nif: obtenerValorInput('nif'),
     email: obtenerValorInput('email'),
     provincia: obtenerValorSelect('provincias'),
     contrasinal: obtenerValorInput('contrasinal'),
     fechaNacimiento: obtenerValorInput('fechaNacimiento'),
     telefono: obtenerValorInput('telefono'),
     vehiculos: obtenerCheckboxSeleccionados(['bicicleta', 'coche', 'moto']),
     lenguajeFavorito: obtenerRadioSeleccionado('fav_language')
   };



   // Valida los datos del formulario
   if (!validarDatosFormulario(formData )) {
     return;
   }
 
   // Realiza acciones adicionales con los datos del formulario según sea necesario
   // Por ejemplo, envíalos a un servidor o míralos en la consola
   console.log('Datos del formulario:', formData);
 
}*/
var formularioEvent = document.getElementById('formulario');
formularioEvent.addEventListener('submit', function (event) {
    event.preventDefault();
    // Recoger los datos del formulario
    var nombre = obtenerValorInput('nombre');
    var apellidos = obtenerValorInput('apellidos');
    var edad = obtenerValorNumerico('edad');
    var nif = obtenerValorInput('nif');
    var email = obtenerValorInput('email');
    var provincias = obtenerValorSelect('provincias');
    var contrasinal = obtenerValorInput('contrasinal');
    var fechaNacimiento = obtenerValorInput('fechaNacimiento');
    var telefono = obtenerValorInput('telefono');
    var vehiculos = obtenerCheckboxSeleccionados(['bicicleta', 'coche', 'moto']);
    var lenguajeFavorito = obtenerRadioSeleccionado('fav_language');
    // Validaciones
    var nifRegex = /^[0-9]{8}[A-Za-z]$/;
    if (!nifRegex.test(nif)) {
        alert('El NIF no es válido');
        return;
    }
    if (isNaN(edad) || edad < 18 || edad >= 100) {
        alert('La edad debe estar entre 18 y 99 años');
        return;
    }
    console.log('Datos del formulario:', formularioEvent);
});
//Recuperamos los datos del formulario
function obtenerValorInput(id) {
    var elemento = document.getElementById(id);
    return elemento ? elemento.value : '';
}
function obtenerValorNumerico(id) {
    var elemento = document.getElementById(id);
    return elemento ? parseInt(elemento.value, 10) : 0;
}
function obtenerValorSelect(id) {
    var elemento = document.getElementById(id);
    return elemento ? elemento.value : '';
}
function obtenerCheckboxSeleccionados(checkboxIds) {
    return checkboxIds.filter(function (id) { return document.getElementById(id).checked; }).map(function (id) { return id; });
}
function obtenerRadioSeleccionado(radioName) {
    var radioSeleccionado = document.querySelector("input[name=\"".concat(radioName, "\"]:checked"));
    return radioSeleccionado ? radioSeleccionado.value : '';
}
// checkValidity() validamos el formulario
function validarDatosFormulario(formData) {
    var formulario = document.getElementById("formulario");
    var mensaje = "";
    var mensaxeElement = document.getElementById("mensaxe");
    if (formulario.checkValidity()) {
        mensaje = "Formulario validado correctamente";
    }
    else {
        mensaje = "Error en la validación del formulario: " + formulario.validationMessage;
    }
    if (mensaxeElement) {
        mensaxeElement.innerHTML = mensaje;
    }
    else {
        console.error("Elemento 'mensaxe' no encontrado");
    }
    return formulario.checkValidity(); // Devuelve true solo si el formulario es válido
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Bienvenido nuevamente " + user);
    }
    else {
        var userInput = prompt("Por favor, ingresa tu nombre:", "");
        if (userInput !== null && userInput !== "") {
            setCookie("username", userInput, 30);
        }
    }
}
// Borramos la cookie
function borrarCookie() {
    document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
    alert('Cookie borrada');
}
function amosaForm() {
    var nombre = obtenerValorInput("nombre");
    var apellidos = obtenerValorInput("apellidos");
    var edad = obtenerValorInput("edad");
    var nif = obtenerValorInput("nif");
    var email = obtenerValorInput("email");
    var provincia = obtenerValorSelect("provincias");
    var contrasinal = obtenerValorInput("contrasinal");
    var fechaNacimiento = obtenerValorInput("fechaNacimiento");
    var telefono = obtenerValorInput("telefono");
    var vehiculos = obtenerCheckboxSeleccionados(['bicicleta', 'coche', 'moto']);
    var lenguajeFavorito = obtenerRadioSeleccionado("fav_language");
    alert("Datos enviados:\n" +
        "Nombre: " + nombre +
        "\nApellidos: " + apellidos +
        "\nEdad: " + edad +
        "\nNIF: " + nif +
        "\nEmail: " + email +
        "\nProvincia: " + provincia +
        "\nContraseña: " + contrasinal +
        "\nFecha de Nacimiento: " + fechaNacimiento +
        "\nTeléfono: " + telefono +
        "\nVehículos: " + vehiculos.join(", ") +
        "\nLenguaje favorito: " + lenguajeFavorito);
}
function raton() {
    var elementoUno = document.getElementById("uno");
    if (elementoUno) {
        elementoUno.style.color = "red";
    }
    else {
        console.error('No se encontró el elemento con el ID "uno"');
    }
}
function pag() {
    alert("Página cargada");
}
function despe() {
    console.log("¡Adiós!");
}
function cambioSelect() {
    alert("Ha cambiado la provincia seleccionada: " + document.getElementById("provincias").value);
}
function formul() {
    alert("Formulario enviado");
}
