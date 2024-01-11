var Disco = /** @class */ (function () {
    function Disco(nome, grupo, ano, tipo, prestado) {
        this.nome = nome;
        this.grupo = grupo;
        this.ano = ano;
        this.tipo = tipo;
        this.prestado = prestado;
    }
    Object.defineProperty(Disco.prototype, "Nome", {
        get: function () { return this.nome; },
        set: function (n) { this.nome = n; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Disco.prototype, "Grupo", {
        get: function () { return this.grupo; },
        set: function (g) { this.grupo = g; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Disco.prototype, "Ano", {
        get: function () { return this.ano; },
        set: function (a) { this.ano = a; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Disco.prototype, "Tipo", {
        get: function () { return this.tipo; },
        set: function (t) { this.tipo = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Disco.prototype, "Prestado", {
        get: function () { return this.prestado; },
        set: function (p) { this.prestado = p; },
        enumerable: false,
        configurable: true
    });
    Disco.prototype.mostrarInformacion = function () {
        document.write("Nome do disco: " + this.nome +
            ",   Grupo de música ou cantante: " + this.grupo +
            ',   Ano de publicación: ' + this.ano +
            ",   Tipo de música:" + this.tipo +
            ",   Prestado: " + (this.prestado ? "Si" : "Non") +
            "<br>");
    };
    Disco.prototype.infoDisco = function () {
        document.write('Nome do disco: ' + this.nome + "<br>" +
            'Grupo: ' + this.grupo + "<br>" +
            'Ano de publicación: ' + this.ano + "<br>" +
            'Tipo de música: ' + this.tipo + "<br>" +
            'Prestado: ' + (this.prestado ? 'Si' : 'No') + "<br>");
    };
    return Disco;
}());
var disco1 = new Disco("Pereza", "Chenoa", 2019, "pop", false);
var disco2 = new Disco("MasPereza", "Bisbal", 2020, "latino", true);
var disco3 = new Disco("Corazon Partido", "Alejandro Sanz", 2018, "romantico", true);
var disco4 = new Disco("Izal", "Que Bien", 2021, "indi", false);
function cargarDisco() {
    var agregarMas;
    var discos = [];
    discos = [disco1, disco2, disco3, disco4];
    do {
        var nome = prompt("Cal e o nome do disco que queres dar de alta?");
        if (nome === null) {
            break;
        }
        var grupo = prompt("Cal e o nome do grupo ou do cantante?");
        if (grupo === null) {
            break;
        }
        var ano = parseInt(prompt("Ano de publicación:") || "0000");
        var tipo = prompt("Tipo de música?");
        if (tipo === null) {
            break;
        }
        var prestadoInput = prompt("¿Está prestado? (Si/No)");
        var prestado = prestadoInput ? prestadoInput.toLowerCase() === 'si' : false;
        var nuevoDisco = new Disco(nome, grupo, ano, tipo, prestado);
        discos.push(nuevoDisco);
        var agregarMasInput = prompt("¿Quieres añadir más discos? (Si/No)");
        agregarMas = agregarMasInput ? agregarMasInput.toLowerCase() === 'si' : false;
    } while (agregarMas);
    return discos;
}
var discos = cargarDisco();
document.write("<br> <br>");
document.write("LOS DATOS DEL DISCO1 SON: <br><br>");
discos[0].infoDisco();
document.write("<br> <br> <br>");
function mostrarTodosLosDiscos() {
    document.write("LOS DATOS DE TODOS LOS DISCOS SON:" + "<br><br>");
    discos.forEach(function (disco) {
        disco.mostrarInformacion();
    });
}
mostrarTodosLosDiscos();
document.write("<br><br> MOSTRAMOS LOS DATOS DEL DISCO 4 A TRAVÉS DE GET  <br> <br>");
function mostrarDiscoconGET() {
    document.write("Nombre del disco: " + discos[3].Nome + "<br>" +
        " Grupo de música o cantante: " + discos[3].Grupo + "<br>" +
        " Año de publicación: " + discos[3].Ano.toString() + "<br>" +
        " Tipo de música: ", discos[3].Tipo + "<br>" +
        " ¿Está prestado?" + discos[3].Prestado ? "Si" : "No");
}
mostrarDiscoconGET();
