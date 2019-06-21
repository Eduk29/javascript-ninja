// Objetos
console.log("Objetos");
console.log("-------");
console.log();

console.log("Objetos são Mutáveis");
console.log("--------------------");
console.log("Criando objeto obj1");
var obj1 = {
  prop1: "Propriedade 1",
  prop2: "Propriedade 2",
  prop3: "Propriedade 3",
  prop4: "Propriedade 4"
};
console.log("obj1 = ", obj1);

console.log("Exemplo 1");
console.log("Alterando o obj1...");
obj1.prop1 = "prop 1";
console.log("obj1 = ", obj1);
console.log();

console.log("Exemplo 2");
console.log("Deletando prop1");
delete obj1.prop1;
console.log("obj1 = ", obj1);
console.log();

console.log("Exemplo 3");
console.log("Adicionando prop1");
obj1.prop1 = "Propriedade 1";
console.log("obj1 = ", obj1);

console.log();

console.log("Objetos Manipulados por referência");
console.log("----------------------------------");
console.log("Exemplo 1");
console.log("Criando objeto obj1");
var obj1 = {
  prop1: "Propriedade 1",
  prop2: "Propriedade 2",
  prop3: "Propriedade 3",
  prop4: "Propriedade 4"
};
console.log('Atribuindo obj1 para obj2');
var obj2 = obj1;
console.log('obj1 = ', obj1);
console.log('obj2 = ', obj2);
console.log('Alterando obj1...');
obj1.prop1 = 'Propriedade 1 do obj1';
obj1.prop2 = 'Propriedade 2 do obj1';
obj1.prop3 = 'Propriedade 3 do obj1';
obj1.prop4 = 'Propriedade 4 do obj1';
console.log('obj1 = ', obj1);
console.log('obj2 = ', obj2);
console.log('O objeto obj2 também foi alterado, pois aponta para a mesma referência que obj1');
console.log();

console.log('Criando objetos');
console.log("---------------");
console.log('Criando objetos via literais => var newObj1 = {}');
var newObj1 = {};
console.log('newObj1 = ', newObj1);
console.log();

console.log('Criando objetos via construtores => var newObj2 = new Object()');
var newObj2 = new Object();
console.log('newObj2 = ', newObj2);
console.log();

console.log('Criando objetos via Object.create => var newObj3 = Object.create({})');
var newObj3 = Object.create(newObj1);
console.log('newObj3 = ', newObj3);
console.log();

console.log('Propriedade hasOwnProperty');
console.log("--------------------------");
var objeto1 = { x: 1, y: 2 };
var objeto2 = Object.create(objeto1);
console.log('objeto1.hasOWnPropery(x)', objeto1.hasOwnProperty('x'));
console.log('objeto1.hasOWnPropery(y)', objeto1.hasOwnProperty('y'));
console.log('objeto2.hasOWnPropery(x)', objeto2.hasOwnProperty('x'));
console.log('objeto2.hasOWnPropery(y)', objeto2.hasOwnProperty('y'));
console.log('Adicionando a propriedade x no objeto2');
objeto2.x = 3;
console.log('objeto2.hasOWnPropery(x)', objeto2.hasOwnProperty('x'));
console.log('objeto2.hasOWnPropery(y)', objeto2.hasOwnProperty('y'));
console.log();

console.log('Método keys');
console.log("-----------");
console.log('Propriedades exsitentes no obj1: ', Object.keys(obj1));
console.log();


console.log('Método isProtoypeOf');
console.log("-------------------");
console.log('obj1 é prototipo de obj2? ',obj1.isPrototypeOf(obj2));
console.log('newObj3 é prototipo de newObj1? ',newObj1.isPrototypeOf(newObj3));
console.log();

console.log('Manipulações com JSON');
console.log("----------------------");
var objJson = {
    prop1: 'propriedade1',
    prop2: 'propriedade2',
    prop3: 'propriedade3',
    prop4: 'propriedade4'
}
console.log('Convertendo em JSON => JSON.stringify');
var json = JSON.stringify(objJson);
console.log('JSON: ', json);
console.log('Convertendo de JSON para Objeto...');
var jsonObj = JSON.parse(json);
console.log('Objeto: ', jsonObj);


