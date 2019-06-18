// Atributos
var add;
var car = {
    color: 'yellow'
}

// Métodos
function myFuncNomeada() {
    return 'Olá Função Nomeada';
}

var myFuncNaoNomeada = function() {
    return 'Olá Função Não Nomeada';
}

function funcoesRetornandoObjetos() {
    var myObj = {
        nome: 'Eduardo',
        sobrenome: 'Marques',
        idade: ''
    }
    return myObj;
}

function adder(x) {
    return function(y) {
        return x + y;
    }
}

function getCarColor(myCar) {
    return myCar.color;
}

function returnText() { 
    return 'Retornando um texto por meio da function';
}

function funcaoParametro(func){
    return func();
}


// Nomear Funções
console.log('Nomear funções');
console.log('--------------');

console.log();

console.log('Exemplo 1');
console.log(myFuncNomeada.name);
console.log(myFuncNomeada());

console.log('Exemplo 2');
console.log(myFuncNaoNomeada());

console.log();

// Programação Funcional
console.log('Programação Funcional');
console.log('---------------------');
console.log();

console.log('Funções retornando objetos');
console.log(funcoesRetornandoObjetos);
console.log(funcoesRetornandoObjetos());
console.log();

console.log('Funções retornando funções');
console.log('Chamando adder(2): ', add = adder(2));
console.log('Chamando add(3): ', add(3));
console.log();

console.log('Passando objetos por parametros');
console.log('Cor do Carro: ', getCarColor(car));
console.log();

console.log('Passando funcoes por parametros');
console.log(funcaoParametro(returnText));
console.log();

