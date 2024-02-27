function anadirFrutas(): void {
    // preguntamos la fruta a añadir
    let fruta: string | null = prompt("Introduzca un nombre de fruta");

    if (fruta !== null && fruta !== "") {
        // Crea un nuevo elemento li
        let nuevaLi: HTMLLIElement = document.createElement("li");

        // nueva fruta que vamos a añadir
        let nuevaFruta: Text = document.createTextNode(fruta);

        // añadimos la nueva fruta a la lista
        nuevaLi.appendChild(nuevaFruta);

        // insertamos el nuevo li como un hijo de la actual lista
        document.getElementById("listaFrutas")?.appendChild(nuevaLi);

        // lista actualizada 
        let listaActualizada: HTMLCollectionOf<HTMLLIElement> = document.getElementById('listaFrutas')?.getElementsByTagName('li') as HTMLCollectionOf<HTMLLIElement> || [];

        for (let i = 0; i < listaActualizada.length; i++) {
            console.log("La nueva lista es: " + listaActualizada[i].textContent);
        }

    } else {
        alert("No ha introducido ninguna fruta");
    }
}

function borrarPriFruta(): void {
    let listaActual: HTMLElement | null = document.getElementById("listaFrutas");

    if (listaActual?.firstChild) {
        // Elimina el primer elemento li de la lista
        listaActual.removeChild(listaActual.firstChild);
    } else {
        alert("No existe ninguna fruta");
    }

    // lista actualizada
    let listaActualizada: HTMLCollectionOf<HTMLLIElement> = document.getElementById('listaFrutas')?.getElementsByTagName('li') as HTMLCollectionOf<HTMLLIElement> || [];

    for (let i = 0; i < listaActualizada.length; i++) {
        console.log("La nueva lista es: " + listaActualizada[i].textContent);
    }
}

function borrarUltFruta(): void {
    let listaActual: HTMLElement | null = document.getElementById("listaFrutas");

    if (listaActual?.lastChild) {
        // Elimina el último elemento li de la lista
        listaActual.removeChild(listaActual.lastChild);
    } else {
        alert("No existe ninguna fruta");
    }

    // lista actualizada
    let listaActualizada: HTMLCollectionOf<HTMLLIElement> = document.getElementById('listaFrutas')?.getElementsByTagName('li') as HTMLCollectionOf<HTMLLIElement> || [];

    for (let i = 0; i < listaActualizada.length; i++) {
        console.log("La nueva lista es: " + listaActualizada[i].textContent);
    }
}
