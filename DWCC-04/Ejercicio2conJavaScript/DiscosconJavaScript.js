class Disco {
  
    //propiedades
    nome;
    grupo;
    ano; 
    tipo;
    prestamo; 
    
  /* 
     //constructor por defecto
    constructor (){
    
    }*/
    
     //constructor definido por nosotros
    constructor (nome, grupo, ano, tipo, prestamo){
    this.nome= nome;
    this.grupo= grupo;
    this.ano=ano;
    this.tipo= tipo;
    this.prestamo= prestamo;
    }
    
    
    //creamos un método para cargar la información
    //el metodo recibe todas las propiedades de los discos 
    cargarDatos(nome, grupo, ano, tipo, prestamo) {
                this.nome = nome;
                this.grupo = grupo;
                this.ano = ano;
                this.tipo = tipo;
                this.prestamo = prestamo;
    }
    
    //metodo para mostrar la información
    informacion() {
    

        return `Nome do disco: ${this.nome}, Grupo: ${this.grupo}, Ano de publicación: ${this.ano}, Tipo de música: ${this.tipo} Prestado: ${this.prestamo ? 'Si' : 'No'} `;
        
    
            }
          
        }
    
    //creamos los objetos
    let disco1= new Disco("Chenoa","Chenoa",2019, "false");
    let disco2= new Disco("Bisbal","Bisbal",2020, "true");
    let disco3= new Disco("Alejandro Sanz","Corazon Partido",2018, "true");
    let disco4= new Disco("Izal","Que Bien",2021, "false");
    
    
    //llamamos al metodo para ver la información de los objetos
    document.write(disco1.informacion());
    document.write(disco2.informacion());
    document.write(disco3.informacion());
    document.write(disco4.informacion());
    
    
    
    //creamos un array
    let discos = [];
    
    //añadimos los objetos creados al array 
    discos.push(disco1, disco2,disco3,disco4);
    
    //mostramos los discos que están dentro del array creado
    
    discos.forEach(disco => console.log(disco));
     