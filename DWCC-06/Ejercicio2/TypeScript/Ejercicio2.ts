function setCookie(cname: string, cvalue: string, exdays: number): void {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname: string): string {
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

function checkCookie(): void {
    let user = getCookie("username");
    if (user !== "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user !== "" && user !== null) {
            setCookie("username", user, 30);
        }
    }
}

// Borramos la cookie
function borrarCookie(): void {
    document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
    alert('Cookie borrada');
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario")?.addEventListener('submit', validarformulario);
});

function validarformulario(evento: Event): void {
    evento.preventDefault();

    // Recoger los datos del formulario
    const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
    const apellidos = (document.getElementById('apellidos') as HTMLInputElement).value;
    const edad = parseInt((document.getElementById('edad') as HTMLInputElement).value);
    const nif = (document.getElementById('nif') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const provincias = (document.getElementById('provincias') as HTMLInputElement).value;
    const contrasinal = (document.getElementById('contrasinal') as HTMLInputElement).value;
    const fechaNacimiento = (document.getElementById('fechaNacimiento') as HTMLInputElement).value;
    const telefono = (document.getElementById('telefono') as HTMLInputElement).value;

    // Validamos el DNI
    const nifRegex = /^[0-9]{8}[A-Za-z]$/;
    if (!nifRegex.test(nif)) {
        alert('El NIF no es válido. Debe tener 8 dígitos seguidos de una letra.');
        return;
    } else {
        alert('DNI validado correctamente');
    }

    // Validamos que la edad esté dentro de un rango
    if (edad < 18 || edad > 100) {
        alert('La edad debe estar entre 18 y 99 años');
        return;
    }

    // El campo radio debe tener algo seleccionado
    const radios = document.getElementsByName('fav_language');
    let radioSeleccionado = false;

    for (let i = 0; i < radios.length; i++) {
        if ((radios[i] as HTMLInputElement).checked) {
            radioSeleccionado = true;
            break;
        }
    }

    if (!radioSeleccionado) {
        alert('Debes seleccionar un lenguaje de programación');
        return;
    }

    // Validar al menos una casilla de checkbox seleccionada
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let alMenosUnoSeleccionado = false;

    checkboxes.forEach(checkbox => {
        if ((checkbox as HTMLInputElement).checked) {
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
    (document.getElementById('formulario') as HTMLFormElement).submit();
}

function amosaForm(): void {
    var consulta = document.getElementById('consultar');

    const nombre = (document.getElementById("nombre") as HTMLInputElement).value;
    const apellidos = (document.getElementById("apellidos") as HTMLInputElement).value;
    const edad = parseInt((document.getElementById("edad") as HTMLInputElement).value);
    const nif = (document.getElementById("nif") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const provincia = (document.getElementById("provincias") as HTMLInputElement).value;
    const contrasinal = (document.getElementById("contrasinal") as HTMLInputElement).value;
    const fechaNacimiento = (document.getElementById("fechaNacimiento") as HTMLInputElement).value;
    const telefono = (document.getElementById("telefono") as HTMLInputElement).value;

    const vehiculos: string[] = [];
    if ((document.getElementById("bicicleta") as HTMLInputElement).checked) {
        vehiculos.push("Bicicleta");
    }
    if ((document.getElementById("coche") as HTMLInputElement).checked) {
        vehiculos.push("Coche");
    }
    if ((document.getElementById("moto") as HTMLInputElement).checked) {
        vehiculos.push("Moto");
    }

    const lenguajeFavorito = (document.querySelector('input[name="fav_language"]:checked') as HTMLInputElement)?.value;

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

function cambioSelect(): void {
    alert("Ha cambiado la provincia seleccionada: " + (document.getElementById("provincias") as HTMLInputElement).value);
}

function cambiarInput(event: KeyboardEvent, nextInputId: string): void {
    if (event.key === "Enter") {
        event.preventDefault();
        (document.getElementById(nextInputId) as HTMLInputElement).focus();
    }
}
