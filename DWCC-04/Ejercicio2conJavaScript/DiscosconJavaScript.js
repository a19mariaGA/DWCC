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


     // Getters
     get Nome() { return this.nome; }
     get Grupo() { return this.grupo; }
     get Ano() { return this.ano; }
     get Tipo() { return this.tipo; }
     get Prestado() { return this.prestado; }
   
     // Setters
     set Nome(n) { this.nome = n; }
     set Grupo(g) { this.grupo = g; }
     set Ano(a) { this.ano = a; }
     set Tipo(t) { this.tipo = t; }
     set Prestado(p) { this.prestado = p; }

     

  mostrarInformacion() {
    document.write("Nome do disco:", this.nome, "<br>");
    document.write("Grupo de música ou cantante:", this.grupo,"<br>");
    document.write("Ano de publicación:", this.ano, "<br>");
    document.write("Tipo de música:", this.tipo, "<br>");
    document.write("Prestado:", this.prestado ? "Si" : "Non", "<br>");
    document.write("------ --------------------------<br><br>");
}

  infoDisco() {
    return  document.write (`Nome do disco: ${this.nome}, Grupo: ${this.grupo}, Ano de publicación: ${this.ano}, Tipo de música: ${this.tipo}, Prestado: ${this.prestado ? 'Si' : 'No'}, <br>`);
  }

}

let disco1 = new Disco("Chenoa", "Chenoa", 2019, "pop", false);
let disco2 = new Disco("Bisbal", "Bisbal", 2020, "latino", true);
let disco3 = new Disco("Corazon Partido", "Alejandro Sanz", 2018, "romantico", true);
let disco4 = new Disco("Izal", "Que Bien", 2021, "indi", false);



function cargarDisco() {
  let agregarMas;
  let discos = [];
  discos = [disco1, disco2, disco3, disco4];


  do {
    let nome = prompt("Cal e o nome do disco que queres dar de alta?");
    let grupo = prompt("Cal e o nome do grupo ou do cantante?");
    let ano = parseInt(prompt("Ano de publicación:"));
    let tipo = prompt("Tipo de música:");
    let prestado = prompt("¿Está prestado? (Si/No)").toLowerCase() === 'si';

    let nuevoDisco = new Disco(nome, grupo, ano, tipo, prestado);
    discos.push(nuevoDisco);

    agregarMas = prompt("¿Quieres añadir más discos? (Si/No)").toLowerCase();
  } while (agregarMas === 'si');

  return discos;
}

let discos = cargarDisco();


document.write("<br> <br>");
document.write("LOS DATOS DEL DISCO1 SON: <br><br>");
console.log(disco1.mostrarInformacion());
console.log("<br> <br> <br>");

function mostrarTodosLosDiscos() {
  document.write("LOS DATOS DE TODOS LOS DISCOS SON:" + "<br><br>");
  discos.forEach(disco => {
    disco. infoDisco();
  
  });
}

mostrarTodosLosDiscos();

document.write("<br> MOSTRAMOS LOS DATOS DEL DISCO 4 A TRAVES DE GET  <br> <br>");

function mostrarDiscoconGET() {
  document.write("Nombre del disco:", disco4.Nome, "<br>"  );
  document.write("Grupo de música o cantante:", disco4.Grupo, "<br>");
  document.write("Año de publicación:", disco4.Ano, "<br>");
  document.write("Tipo de música:", disco4.Tipo, "<br>");
  document.write("¿Está prestado?", disco4.Prestado ? "Si" : "No"+  "<br>");
}

mostrarDiscoconGET();


