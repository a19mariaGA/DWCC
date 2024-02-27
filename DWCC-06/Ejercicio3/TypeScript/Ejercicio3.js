function anadirFrutas() {
    var _a, _b;
    // preguntamos la fruta a añadir
    var fruta = prompt("Introduzca un nombre de fruta");
    if (fruta !== null && fruta !== "") {
        // Crea un nuevo elemento li
        var nuevaLi = document.createElement("li");
        // nueva fruta que vamos a añadir
        var nuevaFruta = document.createTextNode(fruta);
        // añadimos la nueva fruta a la lista
        nuevaLi.appendChild(nuevaFruta);
        // insertamos el nuevo li como un hijo de la actual lista
        (_a = document.getElementById("listaFrutas")) === null || _a === void 0 ? void 0 : _a.appendChild(nuevaLi);
        // lista actualizada 
        var listaActualizada = ((_b = document.getElementById('listaFrutas')) === null || _b === void 0 ? void 0 : _b.getElementsByTagName('li')) || [];
        for (var i = 0; i < listaActualizada.length; i++) {
            console.log("La nueva lista es: " + listaActualizada[i].textContent);
        }
    }
    else {
        alert("No ha introducido ninguna fruta");
    }
}
function borrarPriFruta() {
    var _a;
    var listaActual = document.getElementById("listaFrutas");
    if (listaActual === null || listaActual === void 0 ? void 0 : listaActual.firstChild) {
        // Elimina el primer elemento li de la lista
        listaActual.removeChild(listaActual.firstChild);
    }
    else {
        alert("No existe ninguna fruta");
    }
    // lista actualizada
    var listaActualizada = ((_a = document.getElementById('listaFrutas')) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('li')) || [];
    for (var i = 0; i < listaActualizada.length; i++) {
        console.log("La nueva lista es: " + listaActualizada[i].textContent);
    }
}
function borrarUltFruta() {
    var _a;
    var listaActual = document.getElementById("listaFrutas");
    if (listaActual === null || listaActual === void 0 ? void 0 : listaActual.lastChild) {
        // Elimina el último elemento li de la lista
        listaActual.removeChild(listaActual.lastChild);
    }
    else {
        alert("No existe ninguna fruta");
    }
    // lista actualizada
    var listaActualizada = ((_a = document.getElementById('listaFrutas')) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('li')) || [];
    for (var i = 0; i < listaActualizada.length; i++) {
        console.log("La nueva lista es: " + listaActualizada[i].textContent);
    }
}
