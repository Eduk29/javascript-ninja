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
        console.log(number1 + number2);
        return number1 + number2;
    }

}

// Escopo de funções
console.log('Escopo de Funções dentro de Funções');
console.log('-----------------------------------');
console.log();

console.log('Executando myFunction: ', myFunction());
console.log('Sum não esta disponivel fora de myFunction!');
console.log();

// Hoisting
console.log('Hoisting');
console.log('-----------------------------------');
console.log();

console.log('Exemplo 1');
console.log('Executando função com Hoisting: ', hoisting());
console.log();

// IIFE
console.log('IIFE - Immediately Invoked Function Expression (Funções auto executadas');
console.log('-----------------------------------------------------------------------');
console.log();

console.log('Exemplo 1');
(function() {
    console.log(1 + 2);
})();
console.log();

console.log('Exemplo 2');
(function() {
    console.log(4 + 2);
}());
