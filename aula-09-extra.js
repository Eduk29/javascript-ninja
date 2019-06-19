function calculadora(numero1, numero2) {
    return function(callback) {
        return callback(numero1, numero2);
    };
};

function soma(numero1, numero2) {
    return numero1 + numero2;
};

function subtracao(numero1, numero2) {
    return numero1 - numero2;
};

function multiplicacao(numero1, numero2) {
    return numero1 * numero2;
};

function divisao(numero1, numero2) {
    return numero1 / numero2;
};

function resto(numero1, numero2) {
    return numero1 % numero2;
};

var sum = calculadora(4, 5);
var sub = calculadora(21, 8);
var mul = calculadora(12, 9);
var div = calculadora(8, 4);
var mod = calculadora(13, 3);

console.log('Testes');
console.log('------');
console.log('4 + 5 = ', sum(soma));
console.log('21 - 8 = ', sub(subtracao));
console.log('12 x 9 = ', mul(multiplicacao));
console.log('8 / 4 = ', div(divisao));
console.log('13 % 3 = ', mod(resto));

// console.log('Soma: ', sum(soma(3,5)));
