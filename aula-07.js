// Atributos
var numero = 0;
var array = [1, 3, 5, 2, 23, 12, 16];

// Métodos
function percorrendoArrays() {
    var contador = 0;
    while ( contador < array.length) {
        console.log(`Array[${contador}] = ${array[contador]}`);
        contador++;
    }
}

function myFor() {
    for (numero = 1; numero <= 10; numero++) {
        console.log('Numero: ', numero);
    }
}

// Operador Módulo
console.log('Operador Módulo');
console.log('---------------');

console.log();

console.log('Exemplo 1');
console.log('5 / 2 = ', 5/2);
console.log('5 % 2 = ', 5%2);
console.log();

console.log('Exemplo 2');
console.log('Os numero pares entre 0 e 20 são: ')
while (numero <= 20) {
    if (numero % 2 === 0)  {
        console.log(numero);
    }
    numero++;
}

// Arrays - Propriedade Length
console.log('Array - Propriedade Length');
console.log('--------------------------');

console.log();

console.log('Exemplo 1');
console.log('Array: ', array);
console.log('Tamanho do Array (Propriedade Length): ', array.length);
console.log();

console.log('Exemplo 2');
percorrendoArrays();
console.log();

// Arrays - Propriedade Push
console.log('Array - Propriedade Push');
console.log('------------------------');

console.log();

console.log('Exemplo 1');
console.log('Array: ', array);
console.log('Tamanho: ', array.length);
console.log('Adicionando numero 666 ao array na posição: ', array.push(666));
console.log('Array: ', array);
console.log('Tamanho: ', array.length);

// Estrutura For 
console.log('Estrutura For');
console.log('-------------');

console.log();

console.log('for(inicialização; condição; expressão final)');

console.log('Exemplo 1');
console.log('Imprimindo de 1 a 10 com laço for: ');
myFor();






