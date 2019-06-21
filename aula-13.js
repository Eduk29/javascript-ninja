// Métodos de Arrays
console.log('Métodos de Arrays');
console.log('-----------------');
console.log();
var array = [1, 2, 3];

// Método toString()
console.log('Método toString');
console.log('array: ', array);
console.log('array.toString(): ', array.toString());
console.log();

// Método concat()
console.log('Método concat');
console.log('Exemplo 1');
console.log('array.concat(20): ', array.concat(20));

console.log('Exemplo 2');
console.log('Criando array secundário...');
var array2 = [4, 5, 6];
console.log('array secundário: ', array2);
console.log('Concatenando arrays...');
console.log(array.concat(array2));
console.log();

// Método unshift()
console.log('Método unshift');
console.log('array: ', array);
console.log('Exemplo 1');
array.unshift(12);
console.log('array: ', array);
console.log();

// Método shift()
console.log('Método shift');
console.log('array: ', array);
console.log('Exemplo 1');
array.shift();
console.log('array: ', array);
console.log();

// Método Slice()
console.log('Método slice');
console.log('array: ', array);
console.log('Exemplo 1');
console.log('Array.slice(0, 2)', array.slice(0, 2));

console.log('Exemplo 2');
console.log('Array.slice(1, 2)', array.slice(1, 2));

console.log('Exemplo 3');
console.log('Array.slice(-2)', array.slice(-2));

console.log('array: ', array);
console.log();

// Método Splice()
console.log('Método splice');
console.log('array: ', array);

console.log('Exemplo 1');
console.log('Array.splice(2)', array.splice(2));
console.log('array: ', array);

array = [1, 2, 3];

console.log('Exemplo 2');
console.log('Array.splice(0, 2)', array.splice(1, 2));
console.log('array: ', array);

array = [1, 2, 3];

console.log('Exemplo 3');
console.log("Array.splice(0, 1, 'Teste')", array.splice(1, 2, 'Teste'));
console.log('array: ', array);

array = [1, 2, 3];
console.log();

// Método ForEach()
console.log('Método forEach');
console.log('array: ', array);
array.forEach(function( item, index, array ){
    console.log('item: ', item);
    console.log('index: ', index);
    console.log('array: ', array);
})

console.log();

// Método Every()
console.log('Método Every');
console.log('array: ', array);
var arrayEvery = array.every(function(item){
    return item < 3;
})
console.log('Every Array: ', arrayEvery);
console.log();

// Método Some()
console.log('Método Some');
console.log('array: ', array);
var arraySome = array.some(function(item){
    return item < 3;
})
console.log('some Array: ', arraySome);
console.log();

// Método map()
console.log('Método map');
console.log('array: ', array);
var array = [1, 2, 3, 4, 5];
var map = array.map(function(item, index, array) {
    return item + 1;
})
console.log('Array apos o map: ', map);
console.log();

// Método filter()
console.log('Método filter');
console.log('array: ', array);
var array = [1, 2, 3, 4, 5];
var filter = array.filter(function(item, index, array) {
    return item > 2;
})
console.log('Array apos o filter: ', map);
console.log();