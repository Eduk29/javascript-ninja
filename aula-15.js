// Testando script no Browser
console.log('Teste de import de arquivos JS no Browser');
console.log('-----------------------------------------');
console.log();

// Contexto this
console.log('Contexto this');
console.log('-------------');
console.log('Exemplo 1');
(function() {
    var myObject = {
        myProperty: 1,
        init: function init() {
            return this;
        }
    };
    console.log(myObject);
}());

console.log('Exemplo 2');
(function() {
    var myObject = {
        myProperty: 1,
        init: function init() {
            return this.myProperty;
        }
    };
    console.log(myObject);
}());

console.log('Exemplo 3');
(function() {
    function escopoFunção() {
        return this;
    }
    console.log('Escopo de Função: ', escopoFunção());

    var escopoObjeto = {
        myProperty: 1,
        init: function init() {
            return this;
        }
    };
    console.log('Escopo de Objeto: ', escopoObjeto.init());
}());
console.log();

// Construtores no Javascript
console.log('Construtores no Javascript');
console.log('--------------------------');
console.log('Exemplo 1');
console.log('Criando constructor');
function MyConstructor() {
    this.prop1 = 'prop1';
    this.prop2 = 'prop2';
}
console.log('Instanciando construtor...');
var constructor = new MyConstructor();
console.log('Constructor: ', constructor);
console.log();

// Arguments
console.log('Arguments');
console.log('---------');
console.log('Criando função com 3 argumentos...');
function argumentsFunction(arg1, arg2, arg3) {
    return arguments;
}
console.log('Chamando a função com argumentos: ', argumentsFunction(1, 3, 5));
