// Operadores Lógico
var x = 7;
var y = 3;
var verdadeiro = true;
var animal = 'cachorro';
var Animal = 'macaco';

console.log('Operadores Lógicos');
console.log('------------------');
console.log();

console.log('Operador AND/E => &&');
console.log('x = ', x);
console.log('y = ', y);
console.log('x = 7 e y = 3?');
console.log((x === 7) && (y === 3));
console.log('x = 3 e y = 3?');
console.log((x === 3) && (y === 3));
console.log('x = 7 e y = 5?');
console.log((x === 7) && (y === 5));
console.log('x = 3 e y = 7?');
console.log((x === 3) && (y === 7));

console.log();

console.log('Operador OR/OU => ||');
console.log('x = ', x);
console.log('y = ', y);
console.log('x = 7 OU y = 3?');
console.log((x === 7) || (y === 3));
console.log('x = 3 OU y = 3?');
console.log((x === 3) || (y === 3));
console.log('x = 7 OU y = 5?');
console.log((x === 7) || (y === 5));
console.log('x = 2 OU y = 4?');
console.log((x === 2) || (y === 4));

console.log();

console.log('Operador NOT/Inversor => !');
console.log('verdadeiro = ', verdadeiro);
console.log('!verdadeiro = ', !verdadeiro);

console.log();

// Estrutura Léxica
console.log('Estrutura Léxica');
console.log('------------------');
console.log();

console.log('Case Sensitive');
console.log('animal: ', animal);
console.log('Animal: ', Animal);
console.log('animal !== Animal =>', animal !== Animal);

console.log('Comentários');
console.log('// -> Linha única');
console.log('/* */ -> Bloco de linhas');

console.log();

// Instruções Condicionais
console.log('Instruções Condicionais => if statement');
console.log('---------------------------------------');
console.log();

console.log('Exemplo 1:');
console.log('x = ', x);
if (x > 5) {
    console.log('x é maior que 5');
} else {
    console.log('x é menor ou igual a 5');
}

console.log();

console.log('Exemplo 2:');
console.log('y = ', y);
if (y > 5) {
    console.log('y é maior que 5');
} else {
    console.log('y é menor ou igual a 5');
}

console.log();

console.log('Exemplo 3:');
console.log('x = ', x);
if (x > 7) {
    console.log('x é maior que 7');
} else if ( x == 7 ){
    console.log('x é igual a 7');
} else {
    console.log('x é menor que 7')
}
