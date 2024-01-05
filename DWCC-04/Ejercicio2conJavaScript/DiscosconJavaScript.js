class Disco {

  constructor(nome, grupo, ano, tipo, prestamo) {
    this.nome = nome;
    this.grupo = grupo;
    this.ano = ano;
    this.tipo = tipo;
    this.prestamo = prestamo;
  }

    // Getters
    getNome() { return this.nome; }
    getGrupo() { return this.grupo; }
    getAno() { return this.ano; }
    getTipo() { return this.tipo; }
    getPrestamo() { return this.prestamo; }
  
    // Setters
    setNome(n) { this.nome = n; }
    setGrupo(g) { this.grupo = g; }
    setAno(a) { this.ano = a; }
    setTipo(t) { this.tipo = t; }
    setPrestamo(p) { this.prestamo = p; }


  infoDisco() {
    return `Nome do disco: ${this.nome}, Grupo: ${this.grupo}, Ano de publicación: ${this.ano}, Tipo de música: ${this.tipo}, Prestado: ${this.prestamo ? 'Si' : 'No'}`;
  }


}



//de este modo el constructor ya está incluido
function Disco  (nome, grupo, ano,tipo,prestamo) {

  this.nome = nome;
  this.grupo = grupo;
  this.ano = ano;
  this.tipo = tipo;
  this.prestamo = prestamo;
  }

  
    
    //creamos un método para cargar la información
    //el metodo recibe todas las propiedades de los discos 
     function cargarDatos(nome, grupo, ano, tipo, prestamo) {
                this.nome = nome;
                this.grupo = grupo;
                this.ano = ano;
                this.tipo = tipo;
                this.prestamo = prestamo;
    }
    
    
    let disco1 = new Disco("Chenoa", "Chenoa", 2019, "pop", false);
    let disco2 = new Disco("Bisbal", "Bisbal", 2020, "latino", true);
    let disco3 = new Disco("Alejandro Sanz", "Corazon Partido", 2018, "romantico", true);
    let disco4 = new Disco("Izal", "Que Bien", 2021, "indi", false);




          
  

         
    //llamamos al metodo para ver la información de un  objeto
    document.write(disco1.infoDisco());
 
    //creamos un array
    let discos = [];
    
    //añadimos los objetos creados al array 
    discos.push(disco1, disco2,disco3,disco4);
    
    //mostramos los discos que están dentro del array creado
  
    function mostrarTodosLosDiscos() {
      discos.forEach(disco => {
        console.log(disco.infoDisco());
        console.log('------------------------');
      });
    }
    
    // Llama a la función para mostrar la información de todos los discos
    mostrarTodosLosDiscos();
    