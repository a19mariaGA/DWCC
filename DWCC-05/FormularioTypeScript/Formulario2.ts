// Describimos los atributos y de que tipo son   que vamos a utilizar en el resto
// del ejercicio
interface FormularioData  {
    nombre: string;
    apellidos: string;
    edad: number;
    nif: string;
    email: string;
    provincia: string;
    contrasinal: string;
    fechaNacimiento: string;
    telefono: string;
    vehiculos: string[];
    lenguajeFavorito: string;
  }
  

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

const formularioEvent = document.getElementById('formulario') as HTMLFormElement;
  formularioEvent.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  
    // Recoger los datos del formulario
    const nombre = obtenerValorInput('nombre');
    const apellidos = obtenerValorInput('apellidos');
    const edad = obtenerValorNumerico('edad');
    const nif = obtenerValorInput('nif');
    const email = obtenerValorInput('email');
    const provincias = obtenerValorSelect('provincias');
    const contrasinal = obtenerValorInput('contrasinal');
    const fechaNacimiento = obtenerValorInput('fechaNacimiento');
    const telefono = obtenerValorInput('telefono');
    const vehiculos = obtenerCheckboxSeleccionados(['bicicleta', 'coche', 'moto']);
    const lenguajeFavorito = obtenerRadioSeleccionado('fav_language');
  
    // Validaciones
    const nifRegex = /^[0-9]{8}[A-Za-z]$/;
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

function obtenerValorInput(id: string): string {
    const elemento = document.getElementById(id) as HTMLInputElement;
    return elemento ? elemento.value : '';
  }
  
  function obtenerValorNumerico(id: string): number {
    const elemento = document.getElementById(id) as HTMLInputElement;
    return elemento ? parseInt(elemento.value, 10) : 0;
  }
  
  function obtenerValorSelect(id: string): string {
    const elemento = document.getElementById(id) as HTMLSelectElement;
    return elemento ? elemento.value : '';
  }
  
  function obtenerCheckboxSeleccionados(checkboxIds: string[]): string[] {
    return checkboxIds.filter(id => (document.getElementById(id) as HTMLInputElement).checked).map(id => id);
  }
  
  function obtenerRadioSeleccionado(radioName: string): string {
    const radioSeleccionado = document.querySelector(`input[name="${radioName}"]:checked`) as HTMLInputElement;
    return radioSeleccionado ? radioSeleccionado.value : '';
  }

  // checkValidity() validamos el formulario

  function validarDatosFormulario(formData: FormularioData): boolean {
    let formulario = document.getElementById("formulario") as HTMLFormElement;
    let mensaje = "";
    let mensaxeElement = document.getElementById("mensaxe");
  
    if (formulario.checkValidity()) {
      mensaje = "Formulario validado correctamente";
    } else {
      mensaje = "Error en la validación del formulario: " + formulario.validationMessage;
    }
  
    if (mensaxeElement) {
      mensaxeElement.innerHTML = mensaje;
    } else {
      console.error("Elemento 'mensaxe' no encontrado");
    }
  
    return formulario.checkValidity();  // Devuelve true solo si el formulario es válido
  }
  
  

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
    if (user != "") {
      alert("Bienvenido nuevamente " + user);
    } else {
      let userInput: string | null = prompt("Por favor, ingresa tu nombre:", "");
      if (userInput !== null && userInput !== "") {
        setCookie("username", userInput, 30);
      }
    }
  }
  
  // Borramos la cookie
  function borrarCookie(): void {
    document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
    alert('Cookie borrada');
  }


  
function amosaForm(): void {
    const nombre = obtenerValorInput("nombre");
    const apellidos = obtenerValorInput("apellidos");
    const edad = obtenerValorInput("edad");
    const nif = obtenerValorInput("nif");
    const email = obtenerValorInput("email");
    const provincia = obtenerValorSelect("provincias");
    const contrasinal = obtenerValorInput("contrasinal");
    const fechaNacimiento = obtenerValorInput("fechaNacimiento");
    const telefono = obtenerValorInput("telefono");
  
    const vehiculos = obtenerCheckboxSeleccionados(['bicicleta', 'coche', 'moto']);
    const lenguajeFavorito = obtenerRadioSeleccionado("fav_language");
  
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
  
  function raton(): void {
    const elementoUno = document.getElementById("uno");
    if (elementoUno) {
      elementoUno.style.color = "red";
    } else {
      console.error('No se encontró el elemento con el ID "uno"');
    }
  }
  function pag(): void {
    alert("Página cargada");
  }
  
  function despe(): void {
    console.log("¡Adiós!");
  }
  
  function cambioSelect(): void {
    alert("Ha cambiado la provincia seleccionada: " + (document.getElementById("provincias") as HTMLSelectElement).value);
  }
  
  function formul(): void {
    alert("Formulario enviado");
  }
  