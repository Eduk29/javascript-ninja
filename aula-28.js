// Ajax
console.log('Ajax');
console.log('----');

// XMLHttpRequest();
(function() {
    console.log('XMLHttpRequest()');
    console.log('----------------');
    var ajax = new XMLHttpRequest();
    ajax.open('GET', '');
    ajax.send();   
})();
