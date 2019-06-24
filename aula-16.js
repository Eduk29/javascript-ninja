// Use strict
console.log('use strict');
console.log('----------');
console.log();

console.log('Exemplo 1');
(function() {
    'use strict';
    var myName = 'Eduardo Marques';
    console.log(myName);
})();
console.log();

console.log('Exemplo 2');
(function() {
    function Person( name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age
    };
    console.log(new Person('Eduardo', 'Marques', 29));
    console.log('Na ausencia do new, Person criará nas variaveis Globais');
})();
console.log();

// Use strict => delete
console.log('use strict => delete');
console.log('--------------------');
console.log();

console.log('Exemplo 1');
(function() {
    'use strict';
    var myVar = 2;
    var obj = { 
        prop1: 'prop1',
        prop2: 'prop2',
        prop3: 'prop3'
    };
    console.log('Delete nao autorizado com use strict');
    // console.log(delete myVar);
})();
console.log();

// Objeto String
var nome = new String('Eduardo');
console.log('Objeto String');
console.log('-------------');
console.log();

console.log('Propriedade Length');
console.log('------------------');
console.log('Exemplo 1');
console.log('Nome.length: ', nome.length);
console.log();

console.log('Propriedade charAt()');
console.log('--------------------');
console.log('Exemplo 1');
console.log('Nome.charAt(2): ', nome.charAt(2));
console.log();

console.log('Propriedade concat()');
console.log('--------------------');
console.log('Exemplo 1');
var str1 = 'String 1 ';
var str2 = 'String 2 ';
var str3 = 'String 3';
var newStr = str1.concat(str2, str3);
console.log('newStr: ', newStr);
console.log();

console.log('Propriedade indexOf()');
console.log('---------------------');
console.log('Exemplo 1');
console.log('newStr.indexOf(r): ', newStr.indexOf('r'));
console.log();

console.log('Propriedade lastIndexOf()');
console.log('-------------------------');
console.log('Exemplo 1');
console.log('newStr.lastIndexOf(r): ', newStr.lastIndexOf('r'));
console.log();

console.log('Propriedade replace()');
console.log('---------------------');
console.log('Exemplo 1');
var originalString = 'Maria';
console.log('Name: ', originalString);
console.log('Replace ia para ta: ', originalString.replace('ia', 'ta'));
console.log();

console.log('Propriedade slice()');
console.log('-------------------');
console.log('Exemplo 1');
var originalString = 'Maria';
console.log('Slice OriginalString: ', originalString.slice(0, 3));
console.log();

console.log('Propriedade split()');
console.log('-------------------');
console.log('Exemplo 1');
console.log('Split Eduardo: ', nome.split('d'));
console.log();

console.log('Propriedade substring()');
console.log('-----------------------');
console.log('Exemplo 1');
console.log('Substring(0,3) Eduardo: ', nome.substring(0, 3));
console.log();

console.log('Propriedade toLowerCase()');
console.log('-------------------------');
console.log('Exemplo 1');
console.log('Todo minusculo => Eduardo: ', nome.toLowerCase());
console.log();

console.log('Propriedade toUpperCase()');
console.log('-------------------------');
console.log('Exemplo 1');
console.log('Todo maiusculo => Eduardo: ', nome.toUpperCase());