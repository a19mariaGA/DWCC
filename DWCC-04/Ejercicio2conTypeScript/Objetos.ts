class Disco {

    nome: string;
    grupo: string;
    ano: number;
    tipo: string;
    prestado: boolean;

    constructor(nome: string, grupo: string, ano: number, tipo: string, prestado: boolean) {
        this.nome = nome;
        this.grupo = grupo;
        this.ano = ano;
        this.tipo = tipo;
        this.prestado = prestado;
    }

    get Nome() { return this.nome; }
    get Grupo() { return this.grupo; }
    get Ano() { return this.ano; }
    get Tipo() { return this.tipo; }
    get Prestado() { return this.prestado; }

    set Nome(n: string) { this.nome = n; }
    set Grupo(g: string) { this.grupo = g; }
    set Ano(a: number) { this.ano = a; }
    set Tipo(t: string) { this.tipo = t; }
    set Prestado(p: boolean) { this.prestado = p; }

    mostrarInformacion(): void {
        document.write("Nome do disco: "+ this.nome +
        ",   Grupo de música ou cantante: " +this.grupo +
        ',   Ano de publicación: ' + this.ano +
        ",   Tipo de música: " + this.tipo +
        ",   Prestado: " + (this.prestado ? "Si" : "Non") +
        "<br>");
        
    }

    infoDisco(): void {
        document.write('Nome do disco: ' + this.nome + "<br>" +
                       'Grupo: ' + this.grupo + "<br>" +
                       'Ano de publicación: ' + this.ano + "<br>" +
                       'Tipo de música: ' + this.tipo + "<br>" +
                       'Prestado: ' + (this.prestado ? 'Si' : 'No') + "<br>");
    }
}


let disco1 = new Disco("Pereza", "Chenoa", 2019, "pop", false);
let disco2 = new Disco("MasPereza", "Bisbal", 2020, "latino", true);
let disco3 = new Disco("Corazon Partido", "Alejandro Sanz", 2018, "romantico", true);
let disco4 = new Disco("Izal", "Que Bien", 2021, "indi", false);



function cargarDisco(): Disco[] {
    let agregarMas: boolean;
    let discos: Disco[] = [];
    discos = [disco1, disco2, disco3, disco4];

    do {
        let nome: string | null = prompt("Cal e o nome do disco que queres dar de alta?");
        if (nome === null) {
            
            break;
        }

        let grupo: string | null = prompt("Cal e o nome do grupo ou do cantante?");
        if (grupo === null) {
            break;
        }

        let ano: number = parseInt(prompt("Ano de publicación:") || "0000");

        let tipo: string | null = prompt("Tipo de música?");
        if (tipo === null) {
            break;
        }

        let prestadoInput: string | null = prompt("¿Está prestado? (Si/No)");
        let prestado: boolean = prestadoInput ? prestadoInput.toLowerCase() === 'si' : false;

        let nuevoDisco = new Disco(nome, grupo, ano, tipo, prestado);
        discos.push(nuevoDisco);

        let agregarMasInput: string | null = prompt("¿Quieres añadir más discos? (Si/No)");
        agregarMas = agregarMasInput ? agregarMasInput.toLowerCase() === 'si' : false;

    } while (agregarMas);

    return discos;
}

let discos = cargarDisco();

document.write("<br> <br>");
document.write("LOS DATOS DEL DISCO1 SON: <br><br>");
discos[0].infoDisco(); 
document.write("<br> <br> <br>");

function mostrarTodosLosDiscos(): void {
    document.write("LOS DATOS DE TODOS LOS DISCOS SON:" + "<br><br>");
    discos.forEach(disco => {
        disco.mostrarInformacion();
    });
}

mostrarTodosLosDiscos();

document.write("<br><br> MOSTRAMOS LOS DATOS DEL DISCO 4 A TRAVÉS DE GET  <br> <br>");

function mostrarDiscoconGET(): void {
    document.write("Nombre del disco: "+ discos[3].Nome +  "<br>" +
    " Grupo de música o cantante: " +  discos[3].Grupo +  "<br>" +
    " Año de publicación: " + discos[3].Ano.toString() +  "<br>" +
    " Tipo de música: ", discos[3].Tipo +  "<br>" +
    " ¿Está prestado?" +  discos[3].Prestado ? "Si" : "No");
}

mostrarDiscoconGET();
