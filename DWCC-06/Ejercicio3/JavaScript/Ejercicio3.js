
   
   function anadirFrutas() {

    //preguntamos la fruta a añadir
    let fruta = prompt("Introduzca un nombre de fruta");

    if (fruta !== null && fruta !== "") {

          // Crea un nuevo elemento li
    let nuevaLi = document.createElement("li");

    //nueva fruta que vamos a añadir
    let nuevaFruta = document.createTextNode(fruta);

    //añadimos  la nueva fruta a la lista
    nuevaLi.appendChild(nuevaFruta);

    //insertamos el nuevo li como un hijo de la actual lista
    document.getElementById("listaFrutas").appendChild(nuevaLi);

    // lista actualizada 
    let listaActualizada = document.getElementById('listaFrutas').getElementsByTagName('li');

    for (let i = 0; i < listaActualizada.length; i++) {
     console.log("La nueva lista es: " + listaActualizada[i].textContent);
       }

    } else{

      alert("No ha introducido ninguna fruta");
    }
 
}


  function borrarPriFruta() {

    let listaActual = document.getElementById("listaFrutas");

    if (listaActual.firstChild) {
        // Elimina el primer elemento li de la lista
        listaActual.removeChild(listaActual.firstChild);
    } else {
        alert("No existe ninguna fruta");
    }

    // lista actualizada
    let listaActualizada = document.getElementById('listaFrutas').getElementsByTagName('li');

    for (let i = 0; i < listaActualizada.length; i++) {
        console.log("La nueva lista es: " + listaActualizada[i].textContent);
    }
}




function borrarUltFruta() {

  let listaActual = document.getElementById("listaFrutas");

  if (listaActual.lastChild) {
      // Elimina el primer elemento li de la lista
      listaActual.removeChild(listaActual.lastChild);
  } else {
      alert("No existe ninguna fruta");
  }

  // lista actualizada
  let listaActualizada = document.getElementById('listaFrutas').getElementsByTagName('li');

  for (let i = 0; i < listaActualizada.length; i++) {
      console.log("La nueva lista es: " + listaActualizada[i].textContent);
  }
}