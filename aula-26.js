// Propriedades Do DOM

// ParentNode
console.log("ParentNode");
console.log("----------");
(function(){
    'use-strict';
    
    var $main = document.querySelector('.main');
    console.log('Obtendo parentNode de .main: ', $main.parentNode);
})();
console.log();

// ChildNode
console.log("ChildNodes");
console.log("----------");
(function(){
    'use-strict';
    
    var $main = document.querySelector('.main');
    console.log('Obtendo childNodes de .main: ', $main.childNodes);
})();
console.log();

// FirstChild
console.log("FirstChild");
console.log("----------");
(function(){
    'use-strict';
    
    var $main = document.querySelector('.main');
    console.log('Obtendo firstChild de .main: ', $main.firstChild);
})();
console.log(); 

// LastChild
console.log("LastChild");
console.log("---------");
(function(){
    'use-strict';
    
    var $main = document.querySelector('.main');
    console.log('Obtendo lastChild de .main: ', $main.lastChild);
})();
console.log(); 

// NextSibilings
console.log("NextSiblings");
console.log("------------");
(function(){
    'use-strict';
    
    var $main = document.querySelector('.main');
    console.log('Obtendo nextSibling de .main: ', $main.nextSibling);
})();
console.log(); 

// Previous Siblings
console.log("PreviousSiblings");
console.log("----------------");
(function(){
    'use-strict';
    
    var $main = document.querySelector('.main');
    console.log('Obtendo previousSibling de .main: ', $main.previousSibling);
})();
console.log();

// Node Type
console.log("NodeType");
console.log("--------");
(function(){
    'use-strict';
    
    var $main = document.querySelector('.main');
    console.log('Obtendo nodeType de .main: ', $main.nodeType);
})();
console.log();

// Node Value
console.log("NodeValue");
console.log("---------");
(function(){
    'use-strict';
    
    var $main = document.querySelector('.main-content');
    console.log('Obtendo nodeValue de .main-content: ', $main.firstChild.nodeValue);
})();
console.log();

// Node Name
console.log("NodeName");
console.log("--------");
(function(){
    'use-strict';
    
    var $main = document.querySelector('.main-content');
    console.log('Obtendo nodeName de .main-content: ', $main.firstChild.nodeName);
})();
console.log();

// Node Value
console.log("Children");
console.log("--------");
(function(){
    'use-strict';
    
    var $main = document.querySelector('.main');
    console.log('Obtendo childNodes de .main: ', $main.childNodes);
    console.log('Obtendo children de .main: ', $main.children);
})();
console.log();

// First Element Child
console.log("FirstElementChild");
console.log("-----------------");
(function(){
    'use-strict';
    
    var $main = document.querySelector('.main');
    console.log('Obtendo firstElementChild de .main: ', $main.firstElementChild);
})();
console.log();

// Last Element Child
console.log("LastElementChild");
console.log("----------------");
(function(){
    'use-strict';
    
    var $main = document.querySelector('.main');
    console.log('Obtendo lastElementChild de .main: ', $main.lastElementChild);
})();
console.log(); 

// Next Element Sibilings
console.log("NextElementSiblings");
console.log("-------------------");
(function(){
    'use-strict';
    
    var $main = document.querySelector('.main');
    console.log('Obtendo nextElementSibling de .main: ', $main.nextElementSibling);
})();
console.log(); 

// Previous Element Siblings
console.log("PreviousElementSiblings");
console.log("----------------");
(function(){
    'use-strict';
    
    var $main = document.querySelector('.main-content');
    console.log('Obtendo previousElementSibling de .main-content: ', $main.previousElementSibling);
})();
console.log();

// Child Element Count
console.log("Child Element Count");
console.log("-------------------");
(function(){
    'use-strict';
    
    var $main = document.querySelector('.main');
    console.log('Obtendo childElementCount de .main: ', $main.childElementCount);
    console.log('Obtendo children.length de .main: ', $main.children.length);
})();
console.log();


// Métodos do DOM

// hasAttribute
console.log("hasAttribute()");
console.log("--------------");
(function(){
    'use-strict';
    
    var $main = document.querySelector('.main');
    console.log('Verificando a existencia de um atribute class no main: ', $main.hasAttribute('class'));
})();

// hasAttributes
console.log("hasAttributes()");
console.log("---------------");
(function(){
    'use-strict';
    
    var $main = document.querySelector('.main-content');
    console.log('Verificando a existencia de atributos no main: ', $main.firstElementChild.firstElementChild.hasAttributes());
    console.log('Verificando a existencia de atributos no main: ', $main.firstElementChild.hasAttributes());
})();

// Append Child
console.log('AppendChild');
console.log('-----------');
(function () {
    'use strict';

    var $main = document.querySelector('.main');
    var $mainContent = document.querySelector('.main-content');
    var $mainHeader = document.querySelector('.main-header');

    console.log($mainContent.appendChild($mainHeader));
})();

// Insert Before
console.log('InsertBefore');
console.log('------------');
(function () {
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
(function () {
    'use strict';

    var $main = document.querySelector('.main');
    var $mainContent = document.querySelector('.main-content');
    var $mainHeader = document.querySelector('.main-header');
    var $cloneMainHeader = $mainHeader.cloneNode(true);
    $mainContent.appendChild($cloneMainHeader);

    console.log(document.querySelectorAll('.main-header').length);
})();

// Has Child Nodes
console.log('hasChildNodes');
console.log('-------------');
(function () {
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
(function () {
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
(function () {
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
(function () {
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
(function () {
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
(function () {
    'use strict';

    var $main = document.querySelector('.main');

    console.log($main.id)

})();

// getAttribute
console.log('Get Attribute');
console.log('-------------');
(function () {
    'use strict';

    var $main = document.querySelector('.main');

    console.log($main.getAttribute('data-js'));

})();

// setAttribute
console.log('Set Attribute');
console.log('-------------');
(function () {
    'use strict';

    var $main = document.querySelector('.main');

    $main.setAttribute('data-js', 'main-datajs');
})();