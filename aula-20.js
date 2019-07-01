// Parametros com IIFE
console.log('Paramentos com IIFE');
console.log('-------------------');
(function(win) {
    ' use-strict';
    console.log(win === window);
})(window);
console.log();

// Alert
console.log('Alert');
console.log('-----');
alert('Isso é um alerta');
console.log();

// Prompt
console.log('Prompt');
console.log('------');
prompt('Isso é um prompt?');
console.log();

// Confirm
console.log('Confirm');
console.log('-------');
prompt('Isso é um confirm?');
console.log();

// D.O.M
console.log('DOM');
console.log('---');
console.log();

console.log('GetElementById');
console.log('--------------');
console.log(document.getElementById('my-link'))
console.log();


console.log('GetElementByClassName');
console.log('---------------------');
console.log(document.getElementsByClassName('my-class"'))
console.log();

console.log('GetElementByTagName');
console.log('-------------------');
console.log(document.getElementsByTagName('h4"'))
console.log();