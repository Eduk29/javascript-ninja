// Exported Module
console.log('Exported Module');
console.log('---------------');
var $input = new DOM('[data-js="inputExemplo"]');
console.log($input);
console.log();

// Module Pattern
console.log('Module Pattern');
console.log('--------------');
(function() {
    
    function app() {

        function add(num1, num2){
            return num1 + num2;
        };
        
        function sub(num1, num2){
            return num1 - num2;
        };
        
        function mul(num1, num2){
            return num1 * num2;
        };
        
        function div(num1, num2){
            return num1 / num2;
        };

        return {
            init: function() {
                console.log('Iniciando biblioteca');
                console.log('Soma => 1 + 2 = ', add(1, 2));
                console.log('Subtração => 2 - 1 =', add(2, 1));
                console.log('Multiplicação => 4 x 9 =', add(4, 9));
                console.log('Divisão => 123 / 3 =', add(123, 3));
            }
        };
    }

    app().init();
})();
console.log();

console.log('Revelling Module Pattern');
console.log('------------------------');
(function() {
    
    function app() {

        function add(num1, num2){
            return num1 + num2;
        };
        
        function sub(num1, num2){
            return num1 - num2;
        };
        
        function mul(num1, num2){
            return num1 * num2;
        };
        
        function div(num1, num2){
            return num1 / num2;
        };

        return {
            init: function() {
                console.log('Iniciando biblioteca');
            }, 
            add: add,
            sub: sub,
            mul: mul,
            div: div
        };
    }

    // Deste modo, vc revela os métodos existentes no modulo;
    // window.app = app;

    // Deste modo, vc não revela os métodos existentes no modulo;
    window.app = app();

    app().init();
    console.log('soma: ', app().add(1,2));
    
})();

var app = window.app;
console.log('App: ', app);
console.log();

console.log('Clousure');
console.log('--------');
(function() {
    
    function clousure() {
        
        var $userInput = new DOM('[data-js="inputExemplo"]');

        function clearString() {
            return $userInput.get()[0].value.replace(/\D/g, '');
        }
    
        function replaceString(string) {
            return string.replace('[string]', clearString());
        }

        function init() {
            console.log('Preenchendo o input: ');
            $userInput.get()[0].value = '123sa123da'
        }
    
        return {
           replaceString: replaceString,
           init: init
        }
    
    }

    window.clousure = clousure();

})();

clousure.init()
console.log('Consolando a closure: ');
console.log(clousure.replaceString('[string]'));