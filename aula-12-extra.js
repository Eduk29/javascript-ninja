// Herança
console.log('Herança');
console.log('-------');
console.log();

console.log('Declarando objetos obj1 e obj2');
var obj1 = {
    nome: 'Eduardo',
    idade: 28
}
var obj2 = obj1;
console.log('obj1: ', obj1);
console.log('obj2: ', obj2);
console.log();

console.log('Alterando obj2');
obj2.nome = 'John';

console.log('obj1: ', obj1);
console.log('obj2: ', obj2);

console.log('Criando objeto obj3');
var obj3 = Object.create(obj1);
console.log('obj3: ', obj3);

console.log('Alterando o objeto obj3');
obj3.nome = 'Eduardo';
obj3.idade = 28;

console.log('obj1: ', obj1);
console.log('obj2: ', obj2);
console.log('obj3: ', obj3);


