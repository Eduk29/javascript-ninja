// Codigo anterior

// Append Child
console.log('AppendChild');
console.log('-----------');
(function(){
    'use strict';
    
    var $main = document.querySelector('.main');
    var $mainContent = document.querySelector('.main-content');
    var $mainHeader = document.querySelector('.main-header');

    console.log( $mainContent.appendChild($mainHeader) );
})();

// Insert Before
console.log('InsertBefore');
console.log('------------');
(function(){
    'use strict';
    
    var $main = document.querySelector('.main');
    var $mainContent = document.querySelector('.main-content');
    var $mainHeader = document.querySelector('.main-header');
    var $firstText = $mainContent.firstChild;

    $mainContent.insertBefore($mainHeader, $firstText)
})();

// Clone Node
console.log('Clone Node');
console.log('----------');
(function(){
    'use strict';
    
    var $main = document.querySelector('.main');
    var $mainContent = document.querySelector('.main-content');
    var $mainHeader = document.querySelector('.main-header');
    var $cloneMainHeader = $mainHeader.cloneNode(true);
    $mainContent.appendChild($cloneMainHeader);

    console.log( document.querySelectorAll('.main-header').length );
})();

// Has Child Nodes
console.log('hasChildNodes');
console.log('-------------');
(function(){
    'use strict';
    
    var $main = document.querySelector('.main');
    var $mainContent = document.querySelector('.main-content');
    var $mainHeader = document.querySelector('.main-header');
    var $h1 = $mainHeader.firstElementChild;

    console.log($h1.hasChildNodes());
    
})();

// Remove Child
console.log('Remove Child');
console.log('------------');
(function(){
    'use strict';
    
    var $main = document.querySelector('.main');
    var $mainContent = document.querySelector('.main-content');
    var $mainHeader = document.querySelector('.main-header');
    var $h1 = $mainHeader.firstElementChild;
    $mainHeader.removeChild($h1);
    
})();

// Replace Child
console.log('Replace Child');
console.log('-------------');
(function(){
    'use strict';
    
    var $main = document.querySelector('.main');
    var $mainContent = document.querySelector('.main-content');
    var $mainHeader = document.querySelector('.main-header');
    var $mainFooter = document.querySelector('.main-footer');

    $main.replaceChild($mainHeader, $mainFooter);
})();

// CreateTextNode
console.log('Create Text Node');
console.log('----------------');
(function(){
    'use strict';
    
    var $main = document.querySelector('.main');
    var $mainContent = document.querySelector('.main-content');
    var $mainHeader = document.querySelector('.main-header');
    var $mainFooter = document.querySelector('.main-footer');

    var newTextNode = document.createTextNode('Opa!');

    $main.appendChild(newTextNode);
    
})();

// CreateElement
console.log('Create Element');
console.log('--------------');
(function(){
    'use strict';
    
    var $main = document.querySelector('.main');
    var $mainContent = document.querySelector('.main-content');
    var $mainHeader = document.querySelector('.main-header');
    var $mainFooter = document.querySelector('.main-footer');

    var newTextNode = document.createTextNode('Novo p!');
    var newP = document.createElement('p');
    newP.appendChild(newTextNode);

    $main.appendChild(newP);
    
})();

// Atributos no DOM

// Element.id
console.log('Element Id');
console.log('----------');
(function(){
    'use strict';
    
    var $main = document.querySelector('.main');

    console.log($main.id)
    
})();

// getAttribute
console.log('Get Attribute');
console.log('-------------');
(function(){
    'use strict';
    
    var $main = document.querySelector('.main');

    console.log($main.getAttribute('data-js'));
    
})();

// setAttribute
console.log('Set Attribute');
console.log('-------------');
(function(){
    'use strict';
    
    var $main = document.querySelector('.main');

    $main.setAttribute('data-js', 'main-datajs');
    
})();