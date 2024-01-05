var Discos = /** @class */ (function () {
    function Discos(nome, grupo, ano, tipo, prestamo) {
        this.nome = nome;
        this.grupo = grupo;
        this.ano = ano;
        this.tipo = tipo;
        this.prestamo = prestamo;
    }
    Discos.prototype.informacionDisco = function () {
        return "Nome do disco: ".concat(this.nome, ", Grupo: ").concat(this.grupo, ", Ano de publicaci\u00F3n: ").concat(this.ano, ", Tipo de m\u00FAsica: ").concat(this.tipo, ", Prestado: ").concat(this.prestamo ? 'Si' : 'No');
    };
    return Discos;
}());
// Creamos los objetos
var dis1 = new Discos("Chenoa", "Chenoa", 2019, "pop", false);
var dis2 = new Discos("Bisbal", "Bisbal", 2020, "latino", true);
var dis3 = new Discos("Alejandro Sanz", "Corazon Partido", 2018, "Romantico", true);
var dis4 = new Discos("Izal", "Que Bien", 2021, "indi", false);
// Llamamos al método para ver la información de un objeto
console.log(dis1.informacionDisco());
// Creamos un array
var discosnew = [];
// Añadimos los objetos creados al array
discosnew.push(dis1, dis2, dis3, dis4);
// Mostramos los discos que están dentro del array creado
function mostrarTodosLosDiscosnew() {
    discosnew.forEach(function (disco) {
        console.log(disco.informacionDisco());
        console.log('------------------------');
    });
}
mostrarTodosLosDiscosnew();
