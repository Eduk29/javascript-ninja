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
// alert('Isso é um alerta');
console.log();

// Prompt
console.log('Prompt');
console.log('------');
// prompt('Isso é um prompt?');
console.log();

// Confirm
console.log('Confirm');
console.log('-------');
// confirm('Isso é um confirm?');
console.log();

// D.O.M
console.log('DOM');
console.log('---');
console.log();

console.log('GetElementById');
console.log('--------------');
// console.log(document.getElementById('my-link'));
console.log();


console.log('GetElementByClassName');
console.log('---------------------');
// console.log(document.getElementsByClassName('my-class'));
console.log();

console.log('GetElementByTagName');
console.log('-------------------');
// console.log(document.getElementsByTagName('h4'));
console.log();

console.log('GetElementByName');
console.log('----------------');
// console.log(document.getElementsByName('username'));
console.log();

console.log('QuerySelector');
console.log('-------------');
console.log(document.querySelector('input'));
console.log();

console.log('QuerySelectorAll');
console.log('----------------');
console.log(document.querySelectorAll('input'));
console.log();

console.log('Input Values');
console.log('------------');
var $inputPassword = document.querySelector('#password');
var $inputUsername = document.querySelector('#username');
console.log($inputUsername.value, $inputPassword.value);

console.log('Eventos');
console.log('-------');
var $button = document.querySelector('button').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Clique no Botão');
}, false);
