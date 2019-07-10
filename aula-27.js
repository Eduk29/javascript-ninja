// Create Document Fragment
console.log('Create Document Fragment');
console.log('------------------------');
(function(){
    'use strict';

    var fragment = document.createDocumentFragment();
    var childP = document.createElement('p');
    var textChildP = document.createTextNode('Texto da tag P!');

    childP.appendChild(textChildP);
    fragment.appendChild(childP);
    
    document.body.appendChild(fragment);

})(); 

// Eventos
(function(doc){
    
    function afterDomContentLoader() {
        alert('Carreguei o DOM');
    }

    function afterWindowLoad() {
        alert('Carreguei tudo da tela');
    }

    doc.addEventListener('DOMContentLoaded', afterDomContentLoader, false);
    window.addEventListener('load', afterWindowLoad, false);
})(document);

// Tecnicas Ninjas
console.log('Copiar Arrays');
console.log('-------------');

console.log('Modo 1');
(function(){
    'use strict';

    var array = [1, 2, 3, 4, 5];

    var array2 = array.map(function(item, index, array) {
        return item;
    });

    console.log('Array 1: ', array);
    console.log('Array 2: ', array2);
    console.log('Array === Array2: ', array === array2);
})();
console.log();

console.log('Modo 2');
(function(){
    'use strict';

    var array = [1, 2, 3, 4, 5];

    var array2 = array.slice(0);

    console.log('Array 1: ', array);
    console.log('Array 2: ', array2);
    console.log('Array === Array2: ', array === array2);
})();
console.log();

console.log('Saber tipo real do Objeto');
console.log('-------------------------');

(function(){
    var obj = {prop1: 1, prop2: 2};
    var arr = [1, 2, 4];

    function myFunc() { return 'teste'};
    
    console.log('arr.prototype.toString(): ', Object.prototype.toString.call(arr));
    console.log('obj.prototype.toString(): ', Object.prototype.toString.call(obj));
    console.log('obj.prototype.toString(): ', Object.prototype.toString.call(myFunc));
})();
