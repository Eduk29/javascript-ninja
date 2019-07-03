// Funções
console.log('Funções');
console.log('-------');
console.log();

// Propriedade Length
console.log('Propriedade Length');
function myFunction(a, b, c, d) {
    console.log('Esta é minha função');
    return;
}
console.log('Número de argumentos na função: ', myFunction.length);
console.log();

// Método toString()
console.log('Método toString');
console.log('Função: ', myFunction.toString());
console.log();

// Método call()
console.log('Método call');
var object = {
    prop1: 'Esta é uma propriedade deste contexto'
}
function myFunction2() {
    console.log(this.prop1);
}
console.log('Executando myFunction2 no contexto do Object: ');
myFunction2.call(object)
console.log();

// Método apply()
console.log('Método apply');
function myFunction3(a, b, c, d) {
    console.log(this.prop1, a, b, c, d);
}
var array = [1, 2, 3, 4];
myFunction3.apply(object, array);
console.log();

// Método Prototypes
console.log('Método Prototypes');
function MyFunction4(name, lastName) {
    this.name = name;
    this.lastName = lastName;
}
console.log('Adicionando propriedade fullName no construtor com name e lastName');
MyFunction4.prototype.fullName = function() {
    return `${this.name} ${this.lastName}`;
}
var user = new MyFunction4('Eduardo', 'Marques');
console.log('Imprimindo Construtor Completo: ', user);
console.log('Imprimindo Nome Completo: ', user.fullName());
console.log('Tentando alterar propriedade vai prototypes');
MyFunction4.prototype.name = 'João';
console.log('Imprimindo Construtor Completo: ', user);
