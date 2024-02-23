function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
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
    let user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
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
    document.getElementById("formulario").addEventListener('submit', validarformulario);
});

function validarformulario(evento) {
    evento.preventDefault();

    // Recoger los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const edad = document.getElementById('edad').value;
    const nif = document.getElementById('nif').value;
    const email = document.getElementById('email').value;
    const provincias = document.getElementById('provincias').value;
    const contrasinal = document.getElementById('contrasinal').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const telefono = document.getElementById('telefono').value;

    // Validamos el DNI
    const nifRegex = /^[0-9]{8}[A-Za-z]$/;
    if (!nifRegex.test(nif)) {
        alert('El NIF no es válido. Debe tener 8 dígitos seguidos de una letra.');
        return false;
    } else {
        alert('DNI validado correctamente');
    }

    // Validamos que la edad esté dentro de un rango
    if (edad < 18 || edad > 100) {
        alert('La edad debe estar entre 18 y 99 años');
        return false;
    }

    // El campo radio debe tener algo seleccionado
    const radios = document.getElementsByName('fav_language');
    let radioSeleccionado = false;

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            radioSeleccionado = true;
            break;
        }
    }

    if (!radioSeleccionado) {
        alert('Debes seleccionar un lenguaje de programación');
        return false;
    }

    // Validar al menos una casilla de checkbox seleccionada
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let alMenosUnoSeleccionado = false;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            alMenosUnoSeleccionado = true;
        }
    });

    if (!alMenosUnoSeleccionado) {
        alert('Debes seleccionar al menos un vehículo');
        return false;
    }

    // Validamos el email
    if (!email.includes('@')) {
        alert("El correo electrónico debe contener al menos un símbolo '@'");
        return false;
    }

    alert("El formulario ha sido validado y enviado");
    document.formulario.submit();
}

function amosaForm() {
    var consulta = document.getElementById('consultar');

    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const edad = document.getElementById("edad").value;
    const nif = document.getElementById("nif").value;
    const email = document.getElementById("email").value;
    const provincia = document.getElementById("provincias").value;
    const contrasinal = document.getElementById("contrasinal").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const telefono = document.getElementById("telefono").value;

    const vehiculos = [];
    if (document.getElementById("bicicleta").checked) {
        vehiculos.push("Bicicleta");
    }
    if (document.getElementById("coche").checked) {
        vehiculos.push("Coche");
    }
    if (document.getElementById("moto").checked) {
        vehiculos.push("Moto");
    }

    const lenguajeFavorito = document.querySelector('input[name="fav_language"]:checked').value;

    alert(
        "Datos enviados:\n" +
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
        "\nLenguaje favorito: " + lenguajeFavorito
    );
}

function cambioSelect() {
    alert("Ha cambiado la provincia seleccionada: " + document.getElementById("provincias").value);
}

/*
function validarEnvioFormulario() {
    // Obtén el formulario por su ID
    let formulario = document.getElementById('formulario');

    // Verifica si el formulario ha sido enviado
    if (formulario.submitted) {
        alert('El formulario ha sido enviado correctamente.');
    } else {
        alert('El formulario NO ha sido enviado correctamente..');
    }
}*/


/*

document.addEventListener("keydown", cambiarInput);
const input = document.getElementsByTagName("input")[0]; // Tomamos el primer input

function cambiarInput(e) {
    let valorHorizontal = parseInt(getComputedStyle(input).getPropertyValue("left"), 10) || 0;

    if (e.key === "ArrowRight") {
        valorHorizontal += 10;
        input.style.left = valorHorizontal + "px";
    } else if (e.key === "ArrowLeft") {
        valorHorizontal -= 10;
        input.style.left = valorHorizontal + "px";
    }
}*/



function saltar(e,id)
{
	// Obtenemos la tecla pulsada
	(e.keyCode)?k=e.keyCode:k=e.which;
 
	// Si la tecla pulsada es enter (codigo ascii 13)
	if(k==13)
	{
		// Si la variable id contiene "submit" enviamos el formulario
		if(id=="submit")
		{
			document.forms[0].submit();
		}else{
			// nos posicionamos en el siguiente input
			document.getElementById(id).focus();
		}
	}
}