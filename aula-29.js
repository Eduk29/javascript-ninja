// Exported Module
console.log('Exported Module');
console.log('---------------');
var $input = new DOM('[data-js="inputExemplo"]');
console.log($input);

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
            }, 
            add: add,
            sub: sub,
            mul: mul,
            div: div
        };
    }

    app().init();
    console.log('soma: ', app().add(1,2));
    
})();
//  var app = new APP();
//  console.log(window.app);


// app();
//     window.app = app;