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
    if (user !== "") {
        alert("Welcome again " + user);
    }
    else {
        user = prompt("Please enter your name:", "");
        if (user !== "" && user !== null) {
            setCookie("username", user, 30);
        }
    }
}
// Borramos la cookie
function borrarCookie() {
    document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
    alert('Cookie borrada');
}
document.addEventListener("DOMContentLoaded", function () {
    var _a;
    (_a = document.getElementById("formulario")) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', validarformulario);
});
function validarformulario(evento) {
    evento.preventDefault();
    // Recoger los datos del formulario
    var nombre = document.getElementById('nombre').value;
    var apellidos = document.getElementById('apellidos').value;
    var edad = parseInt(document.getElementById('edad').value);
    var nif = document.getElementById('nif').value;
    var email = document.getElementById('email').value;
    var provincias = document.getElementById('provincias').value;
    var contrasinal = document.getElementById('contrasinal').value;
    var fechaNacimiento = document.getElementById('fechaNacimiento').value;
    var telefono = document.getElementById('telefono').value;
    // Validamos el DNI
    var nifRegex = /^[0-9]{8}[A-Za-z]$/;
    if (!nifRegex.test(nif)) {
        alert('El NIF no es válido. Debe tener 8 dígitos seguidos de una letra.');
        return;
    }
    else {
        alert('DNI validado correctamente');
    }
    // Validamos que la edad esté dentro de un rango
    if (edad < 18 || edad > 100) {
        alert('La edad debe estar entre 18 y 99 años');
        return;
    }
    // El campo radio debe tener algo seleccionado
    var radios = document.getElementsByName('fav_language');
    var radioSeleccionado = false;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            radioSeleccionado = true;
            break;
        }
    }
    if (!radioSeleccionado) {
        alert('Debes seleccionar un lenguaje de programación');
        return;
    }
    // Validar al menos una casilla de checkbox seleccionada
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var alMenosUnoSeleccionado = false;
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            alMenosUnoSeleccionado = true;
        }
    });
    if (!alMenosUnoSeleccionado) {
        alert('Debes seleccionar al menos un vehículo');
        return;
    }
    // Validamos el email
    if (!email.includes('@')) {
        alert("El correo electrónico debe contener al menos un símbolo '@'");
        return;
    }
    alert("El formulario ha sido validado y enviado");
    document.getElementById('formulario').submit();
}
function amosaForm() {
    var _a;
    var consulta = document.getElementById('consultar');
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var edad = parseInt(document.getElementById("edad").value);
    var nif = document.getElementById("nif").value;
    var email = document.getElementById("email").value;
    var provincia = document.getElementById("provincias").value;
    var contrasinal = document.getElementById("contrasinal").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var telefono = document.getElementById("telefono").value;
    var vehiculos = [];
    if (document.getElementById("bicicleta").checked) {
        vehiculos.push("Bicicleta");
    }
    if (document.getElementById("coche").checked) {
        vehiculos.push("Coche");
    }
    if (document.getElementById("moto").checked) {
        vehiculos.push("Moto");
    }
    var lenguajeFavorito = (_a = document.querySelector('input[name="fav_language"]:checked')) === null || _a === void 0 ? void 0 : _a.value;
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
function cambioSelect() {
    alert("Ha cambiado la provincia seleccionada: " + document.getElementById("provincias").value);
}
function cambiarInput(event, nextInputId) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById(nextInputId).focus();
    }
}
