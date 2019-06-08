// Declaração de variaveis
var myVar;

// Atribuição de valor à uma variável
myVar = 10;

// Tipos de Variáveis
var number = 10;
var float = 1.2;
var string = 'Eduardo';
var verdadeiro = true;
var falso = false;
var semValor = undefined;
var nula = null;
var arrayNumbers = [1, 2, 3];
var objeto = {
    number: 1,
    string: 'Eduardo'
}

// Funções
function isFunction() {
    console.log('Isto é uma função');
    return;
}

console.log('Tipos de dados em Javascript');
console.log('Number: ', number);
console.log('Float: ', float);
console.log('String: ', string);
console.log('Verdadeiro: ', verdadeiro);
console.log('Falso: ', falso);
console.log('Sem Valor: ', semValor);
console.log('Nulo: ', nula);
console.log('Array: ', arrayNumbers);
console.log('Array[1]: ', arrayNumbers[1]);
console.log('Objeto: ', objeto);
console.log('obejto.number: ', objeto.number);
console.log();

// Operadores Aritiméticos
console.log('Operadores Aritméticos');
console.log('Soma (+) => 5 + 6 = ', 5+6);
console.log('Subtração (-) => 10 - 6 = ', 10-6);
console.log('Multiplicação (*) => 5 * 6 = ', 5*6);
console.log('Divisão (/) => 12 / 6 = ', 12/6);
var num = 1;
console.log('Pré-Incremento => ++1 = ', ++num);
var num = 1;
console.log('Pós-Incremento => 1++ = ', num++);
console.log();

// Operadores Relacionais
console.log('Operadores Relacionais');
console.log('5 == 5: ', 5 == 5);
console.log('5 != 5: ', 5 != 5);
console.log('5 < 5: ', 5 < 5);
console.log('5 > 5: ', 5 > 5);
console.log('5 <= 5: ', 5 <= 5);
console.log('5 >= 5: ', 5 >= 5);
console.log("Valor e tipo => 5 === '5'", 5 === '5');
console.log('Valor e tipo => 5 !== 5', 5 !== 5);
console.log();

// Funções
console.log("Funções");
console.log(isFunction());
console.log();

// Escopo
console.log("Escopo");
function escopo() {
    var escopoFuncao = 'Isso é o escopo da função';
    console.log(escopoFuncao);
    console.log('A variavel escopoFuncao pertence SOMENTE ao escopo da função, não disponível fora dela.');
}
escopo();
