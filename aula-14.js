// Métodos de Array
console.log('Métodos de Array');
console.log('----------------');
console.log();
var array = [1, 2, 3, 4, 5];
var obj = {}; 

// Reduce
console.log('Método Reduce');
console.log('Exemplo 1');
var reduce = array.reduce(function(previous, item, index, array) {
    return previous + item;
}, 0)
console.log('Reduce: ', reduce);
console.log();

console.log('Exemplo 2');
nome = ['E', 'd', 'u', 'a', 'r', 'd', 'o'];
var reduce = nome.reduce(function(previous, item, index, array) {
    return previous + item;
})
console.log('Reduce: ', reduce);
console.log();

// ReduceRight
console.log('Método ReduceRight');
console.log('Exemplo 1');
nome = ['E', 'd', 'u', 'a', 'r', 'd', 'o'];
var reduceRight = nome.reduceRight(function(previous, item, index, array) {
    return previous + item;
})
console.log('Reduce Right: ', reduceRight);
console.log();

// Método IndexOf
console.log('Método IndexOf');
console.log('Exemplo 1');
nome = ['E', 'd', 'u', 'a', 'r', 'd', 'o'];
var indexOf = nome.indexOf('d');
console.log('Qual a posição da letra d no nome Eduardo: ', indexOf);

console.log('Exemplo 2');
var indexOf = nome.indexOf('j');
console.log('Qual a posição da letra j no nome Eduardo: ', indexOf);
console.log();

// Método lastIndexOf
console.log('Método lastIndexOf');
console.log('Exemplo 1');
nome = ['E', 'd', 'u', 'a', 'r', 'd', 'o'];
var indexOf = nome.lastIndexOf('d');
console.log('Qual a ultima posição da letra d no nome Eduardo: ', indexOf);

console.log('Exemplo 2');
var indexOf = nome.lastIndexOf('j');
console.log('Qual a ultima posição da letra j no nome Eduardo: ', indexOf);
console.log();

// Método isArray
console.log('Método isArray');
console.log('Exemplo 1');
console.log('A variável nome é um array? ', Array.isArray(nome));
console.log('Exemplo 2');
console.log('A variável obj é um array? ', Array.isArray(obj));