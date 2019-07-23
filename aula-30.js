console.log('Closure');
console.log('-------');
console.log();

console.log('Exemplo 1');
(function() {
    'use strict';

    var scope = 'global scope';

    function checkScope() {
        
        var scope = 'local scope';
        
        function testScope() { 
            return scope; 
        }
        return testScope;
    }

    console.log('Scope: ', checkScope()());
})();

console.log();
console.log('Exemplo 2');
(function() {
    'use strict';

    var counter = 0;

    function increment() {
        return counter++;
    };

    function otherFunction() {
        counter = 150;
    }

    // A variável counter é compartilhado entre as duas functions (increment e otherFunction).

    otherFunction();

    console.log(increment());
    console.log(increment());
    console.log(increment());
    console.log(increment());
    console.log(increment());
})();

console.log();
console.log('Exemplo 3');
(function() {
    'use strict';

    var counter = 0;

    var increment = (function() {
        var counter = 100;

        return function() {
            return counter++;
        }
    })();

    function otherFunction() {
        counter = 150;
    }

    otherFunction();

    console.log(increment());
    console.log(increment());
    console.log(increment());
    console.log(increment());
    console.log(increment());
})();

console.log();
console.log('Estilizando CSS via DOM');
console.log('-----------------------');

console.log();
console.log('Exemplo 1');
(function() {
    'use strict';

    var $div = document.querySelector('div');
    
    $div.style.width = '100px';
    $div.style.height = '100px';
    // $div.style.backgroundColor = '#fc0';
})();

console.log();
console.log('Exemplo 2');
(function() {
    'use strict';

    var $div = document.querySelector('div');
    
    // $div.setAttribute('style', 'width: 100px; height: 100px; background: gray');
})();

console.log();
console.log('Exemplo 3 - Element classList');
(function() {
    'use strict';

    var $div = document.querySelector('div');
    // Adicionar class
    // $div.classList.add('red');

    // Verificar se há classe
    console.log('Tem a classe red: ', $div.classList.contains('red'));
    console.log('Tem a classe blue: ', $div.classList.contains('blue'));

    $div.addEventListener('click', function() {
        this.classList.toggle('red');
    }, false)
})();