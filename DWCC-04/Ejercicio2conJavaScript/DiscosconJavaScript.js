class Disco {

  nome;
  grupo; 
  ano; 
  tipo;
  prestado;

  // el propio constructos sirve para cargar los discos
  constructor(nome, grupo, ano, tipo, prestado) {
    this.nome = nome;
    this.grupo = grupo;
    this.ano = ano;
    this.tipo = tipo;
    this.prestado = prestado;
  }


  mostrarInformacion() {
    document.write("Nome do disco:", this.nome, "<br>");
    document.write("Grupo de música ou cantante:", this.grupo,"<br>");
    document.write("Ano de publicación:", this.ano, "<br>");
    document.write("Tipo de música:", this.tipoMusica, "<br>");
    document.write("Prestado:", this.prestado ? "Si" : "Non", "<br>");
    document.write("------ --------------------------<br>");
}

  infoDisco(disco) {
    return  document.write (`Nome do disco: ${this.nome}, Grupo: ${this.grupo}, Ano de publicación: ${this.ano}, Tipo de música: ${this.tipo}, Prestado: ${this.prestado ? 'Si' : 'No'}, <br><br><br>`);
  }

}

let disco1 = new Disco("Chenoa", "Chenoa", 2019, "pop", false);
let disco2 = new Disco("Bisbal", "Bisbal", 2020, "latino", true);
let disco3 = new Disco("Alejandro Sanz", "Corazon Partido", 2018, "romantico", true);
let disco4 = new Disco("Izal", "Que Bien", 2021, "indi", false);


// Función para cargar datos de un disco
function cargarDisco(disco, nome, grupo, ano, tipoMusica, prestado) {
  disco.nome = nome;
  disco.grupo = grupo;
  disco.ano = ano;
  disco.tipoMusica = tipoMusica;
  disco.prestado = prestado;
}

let disco5= new Disco ();
let disco6= new Disco ();

// Cargar datos de los discos utilizando la función
cargarDisco(disco5, "Dani Martin", "Cero", 2015, "Pop", false);
cargarDisco(disco6, "Vetusta Morla", "Valiente", 2018, "Pop", true);


document.write("<br> <br>");
document.write ("lOS DATOS DEL DISCO1 SON: <br><br>");
console.log(disco1.infoDisco());
console.log("<br> <br> <br>");



// Creamos un array
let discos = [disco1, disco2, disco3, disco4, disco5, disco6];

function mostrarTodosLosDiscos() {
  document.write("LOS DATOS DE TODOS LOS DISCOS SON:"+ "<br><br>");
  discos.forEach(disco => {
    
    console.log(disco.mostrarInformacion()+ "<br>");
    console.log('------------------------');
  });
}

// Llama a la función para mostrar la información de todos los discos
mostrarTodosLosDiscos();
