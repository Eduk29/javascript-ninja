function myFunction() {
    var number1 = 1;
    var number2 = 2;
    function sum() {
        return number1 + number2;
    }
    return sum();
}

function hoisting() {
    var number1 = 1;
    var number2 = 2;
    return sum();

    function sum() {
        return number1 + number2;
    }

}

// Escopo de funções
console.log('Escopo de Funções dentro de Funções');
console.log('-----------------------------------');
console.log();

console.log('Executando myFunction: ', myFunction());
console.log('Sum não esta disponivel fora de myFunction!');

// Hoisting
console.log('Hoisting');
console.log('-----------------------------------');
console.log();

console.log('Executando função com Hoisting: ', hoisting());


