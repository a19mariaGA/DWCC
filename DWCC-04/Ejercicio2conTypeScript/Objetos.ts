class Discos {
    public nome: string;
    public grupo: string;
    public ano: number;
    public tipo: string;
    public prestamo: boolean;
    
    constructor(nome: string, grupo: string, ano: number, tipo: string, prestamo: boolean) {
        this.nome = nome;
        this.grupo = grupo;
        this.ano = ano;
        this.tipo = tipo;
        this.prestamo = prestamo;
    }

    public informacionDisco(): string {
        return `Nome do disco: ${this.nome}, Grupo: ${this.grupo}, Ano de publicación: ${this.ano}, Tipo de música: ${this.tipo}, Prestado: ${this.prestamo ? 'Si' : 'No'}`;
    }
}

// Creamos los objetos
let dis1 = new Discos("Chenoa", "Chenoa", 2019, "pop", false);
let dis2 = new Discos("Bisbal", "Bisbal", 2020, "latino", true);
let dis3 = new Discos("Alejandro Sanz", "Corazon Partido", 2018, "Romantico", true);
let dis4 = new Discos("Izal", "Que Bien", 2021, "indi", false);

// Llamamos al método para ver la información de un objeto
console.log(dis1.informacionDisco());

// Creamos un array
let discosnew: Discos[] = [];

// Añadimos los objetos creados al array
discosnew.push(dis1, dis2, dis3, dis4);

// Mostramos los discos que están dentro del array creado
function mostrarTodosLosDiscosnew() {
    discosnew.forEach(disco => {
        console.log(disco.informacionDisco());
        console.log('------------------------');
    });
}

mostrarTodosLosDiscosnew();


document.write ("holaaaaaaa");