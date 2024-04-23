function Disco(nome, grupo, ano, tipo, prestado) {
    this.nome = nome;
    this.grupo = grupo;
    this.ano = ano;
    this.tipo = tipo;
    this.prestado = prestado;
  
    // Getters
    this.getNome = function() { return this.nome; }
    this.getGrupo = function() { return this.grupo; }
    this.getAno = function() { return this.ano; }
    this.getTipo = function() { return this.tipo; }
    this.getPrestado = function() { return this.prestado; }
  
    // Setters
    this.setNome = function(n) { this.nome = n; }
    this.setGrupo = function(g) { this.grupo = g; }
    this.setAno = function(a) { this.ano = a; }
    this.setTipo = function(t) { this.tipo = t; }
    this.setPrestado = function(p) { this.prestado = p; }
  }
  
  function mostrarInformacion(disco) {
    document.write("Nome do disco:", disco.nome, "<br>");
    document.write("Grupo de música ou cantante:", disco.grupo, "<br>");
    document.write("Ano de publicación:", disco.ano, "<br>");
    document.write("Tipo de música:", disco.tipo, "<br>");
    document.write("Prestado:", disco.prestado ? "Si" : "Non", "<br>");
    document.write("------ --------------------------<br><br>");
  }
  
  function infoDisco(disco) {
    return `Nome do disco: ${disco.nome}, Grupo: ${disco.grupo}, Ano de publicación: ${disco.ano}, Tipo de música: ${disco.tipo}, Prestado: ${disco.prestado ? 'Si' : 'No'}, <br>`;
  }
  
  let disco1 = new Disco("Soy humana", "Chenoa", 2019, "pop", false);
  let disco2 = new Disco("Me siento vivo", "Bisbal", 2020, "latino", true);
  let disco3 = new Disco("Corazon Partido", "Alejandro Sanz", 2018, "romantico", true);
  let disco4 = new Disco("Que Bien", "Izal", 2021, "indi", false);
  let disco5 = new Disco("Las mujeres ya no lloran", "Shakira", 2021, "indi", false);
  let disco6 = new Disco("Cowboy Carter", "Izal", 2021, "Beyoncé", false);



//acceder a algunhas das propiedades do obxecto (non todas). Faino usando funcións frecha tamén.

/* He utilizado ya el objeto creado disco3 y utilizando la funcion flecha disco10 accedo a las propiedades
nombre del disco y nombre del grupo, disco3 es el obj que se pasa como argumento a la funcion, es la
función la que realiza la desestructuración */




document.write("<br> <br>");
document.write("LOS DATOS DEL DISCO3 USANDO DESESTRUCTURING: <br><br>");

const disco10 = ({nome, grupo}) => `Nome do disco: ${nome}, nome do grupo: ${grupo}`;
document.write(disco10(disco3));

//Fai unha copia dun obxecto.
/* Utilizamos el operador de propagación (...) y  spread operator para copiar todas las propiedades 
y valores del objeto disco4 en un nuevo objeto llamado novoDisco4  */

document.write("<br> <br>");
document.write("UNA COPIA EXACTA DEL DISCO 4: <br><br>");

const novoDisco4 = { ...disco4 };
document.write(novoDisco4.nome, " ", novoDisco4.grupo, " ", novoDisco4.ano, " ", novoDisco4.tipo, " ", novoDisco4.prestado);


//Fai unha copia dun obxecto e redefine algún valor dalgunha propiedade do obxecto

/* Utilizamos el operador de propagación (...) y  spread operator para copiar todas las propiedades
y luego a cada propiedad le asignamos un nuevo valor  */

document.write("<br> <br>");
document.write("COPIAMOS Y REDEFINIMOS LOS VALORES EL DISCO 1: <br><br>");

const novoDisco1={
  ...disco1,
  nome : "Nuclear",
  grupo : "Leyva",
  ano: 2019,
  tipo: "pop",
  prestado: false
};

document.write(novoDisco1.nome, " ", novoDisco1.grupo, " ", novoDisco1.ano, " ", novoDisco1.tipo, " ", novoDisco1.prestado);


//Fai unha copia dun obxecto e redefine algún nome dalgunha propiedade do obxecto.

/* Redifinimos las propiedades nome y grupo del objeto disco1, pasando a ser album y artista   */

document.write("<br> <br>");
document.write("COPIAMOS Y REDEFINIMOS ALGUNA PROPIEDAD DEL DISCO 1: <br><br>");

const { nome: album , grupo: artista} = disco1;

document.write("Novo nome para a propiedad nome: album <br>" + "Novo nome para a propiedad grupo: artista <br><br>");
document.write(album + " " + artista);





  function cargarDisco() {
    let agregarMas;
    let discos = [disco1, disco2, disco3, disco4, disco5,  disco6];



    //Usa algún exemplo con desestructuración e for ... of 


    document.write("<br> <br>");
  document.write("DESESTRUCTURACIÓN e for ... of : <br><br>");

    for (const {
      nome: n,
      grupo: g,
      ano: a,
      tipo: t,
      prestado: p
    } of discos) {
      document.write("Nome: " + n + " Grupo: " + g + " Ano: " + a + " Tipo: " + t + " Prestado: " + (p ? 'Si' : 'No') + "<br>");
    }


        /* Acceder a algúns dos valores dun Array, é dicir, ignora algúns dos valores. Proba polo
comezo, polo fin, polo medio,.. */



const [primerDisco, ,tercerDisco , , , ultimoDisco] = discos; // Desestructuración para obtener el primer y último disco

document.write("<br> <br>");
const { nome: nombrePrimerDisco, grupo: grupoPrimerDisco , ano: anoPrimerDisco, tipo: tipoPrimerDisco} = primerDisco; // Desestructuración del primer disco
const { nome: nombreTercerDisco, grupo: grupoTercerDisco , ano: anoTercerDisco, tipo: tipoTercerDisco } = tercerDisco; // Desestructuración del último disco
const { nome: nombreUltimoDisco, grupo: grupoUltimoDisco , ano: anoUltimoDisco, tipo: tipoUltimoDisco } = ultimoDisco; // Desestructuración del último disco

// Mostramos los valores obtenidos
document.write("Nombre, grupo, año y tipo del primer disco: ", nombrePrimerDisco, ", ", grupoPrimerDisco, ", ", anoPrimerDisco, ", ", tipoPrimerDisco, "<br>");
document.write("Nombre, grupo, año y tipo del tercer disco: ", nombreTercerDisco, ", ", grupoTercerDisco, ", ", anoTercerDisco, ", ", tipoTercerDisco, "<br>");
document.write("Nombre, grupo, año y tipo del último disco: ", nombreUltimoDisco, ", ", grupoUltimoDisco, ", ", anoUltimoDisco, ", ", tipoUltimoDisco, "<br>");



  
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
  console.log(mostrarInformacion(disco1));
  console.log("<br> <br> <br>");
  
  function mostrarTodosLosDiscos() {
    document.write("LOS DATOS DE TODOS LOS DISCOS SON:" + "<br><br>");
    discos.forEach(disco => {
      document.write(infoDisco(disco));
    });
  }
  
  mostrarTodosLosDiscos();
  
  document.write("<br> MOSTRAMOS LOS DATOS DEL DISCO 4 A TRAVES DE GET  <br> <br>");
  
  function mostrarDiscoconGET(disco) {
    document.write("Nombre del disco:", disco.getNome(), "<br>"  );
    document.write("Grupo de música o cantante:", disco.getGrupo(), "<br>");
    document.write("Año de publicación:", disco.getAno(), "<br>");
    document.write("Tipo de música:", disco.getTipo(), "<br>");
    document.write("¿Está prestado?", disco.getPrestado() ? "Si" : "No"+  "<br>");
  }
  
  mostrarDiscoconGET(disco4);
  