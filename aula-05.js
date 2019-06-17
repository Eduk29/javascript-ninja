// Funções - Retornos diferentes de Tipo Primitivos
const retornoNumber = function() {
    return 1;
}

const retornoString = function() {
    return 'String';
}

const retornoBoolean = function() {
    return true;
}

const retornoNull = function() {
    return null;
}

const retornoUndefined = function() {
    return undefined;
}

const retornoArray = function() {
    return [1, 2, 3];
}

const retornoObjeto = function() {
    return {
        nome: 'Eduardo',
        idade: 28,
        isMaiorIdade: true
    }
}

const argumentoArray = function (array) {
    return array;
}

const argumentoObjeto = function (objeto) {
    return objeto;
}

array = [3, 2, 4];
objeto = { nome: 'Eduardo', sobrenome: 'Marques', idade: 28};

console.log('Retornos primitivos');
console.log('-------------------');

console.log();

console.log('Retorno Number: ', retornoNumber());
console.log('Retorno String: ', retornoString());
console.log('Retorno Boolean: ', retornoBoolean());
console.log('Retorno Null: ', retornoNull());
console.log('Retorno Undefined: ', retornoUndefined());

console.log('Retornos não Primitivos');
console.log('-----------------------');

console.log();

console.log('Retorno Array: ', retornoArray());
console.log('Posição 0 do retorno: ', retornoArray()[0]);
console.log('Posição 1 do retorno: ', retornoArray()[1]);
console.log('Posição 2 do retorno: ', retornoArray()[2]);

console.log();

console.log('Retorno Objeto: ', retornoObjeto());
console.log('Propriedade nome do retorno: ', retornoObjeto().nome);
console.log('Propriedade idade do retorno: ', retornoObjeto().idade);
console.log('Propriedade isMaiorIdade do retorno: ', retornoObjeto().isMaiorIdade);

console.log();

console.log('Passando Array como Argumento');
console.log('-----------------------------');

console.log();

console.log('Argumento Array: ', argumentoArray(array));
console.log('Argumento Objeto: ', argumentoObjeto(objeto));
