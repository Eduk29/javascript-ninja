// Ajax
console.log('Ajax');
console.log('----');

//XMLHttpRequest();
(function() {
    console.log('XMLHttpRequest()');
    console.log('----------------');
    var ajax = new XMLHttpRequest();
    ajax.open('GET', '');
    ajax.send();

    ajax.addEventListener('readystatechange', function(){
        console.log('Terminou a requisição!!');
    }, false);
})();

// readystatechange;
(function() {
    console.log('readystatechange');
    console.log('----------------');
    var ajax = new XMLHttpRequest();
    ajax.open('GET', '');
    ajax.send();

    ajax.addEventListener('readystatechange', function(){
        console.log('Terminou a requisição!!');
    }, false);
})();


// readystate;//
(function() {
    console.log('readystate');
    console.log('----------');
    var ajax = new XMLHttpRequest();
    console.log(ajax.readyState);
    ajax.open('GET', '');
    ajax.send();
    console.log(ajax.readyState);

    ajax.addEventListener('readystatechange', function(){
        console.log('Terminou a requisição!!');
        console.log(ajax.readyState, ajax.status);
    }, false);
})();

// ResponseText
(function() {
    console.log('responseText');
    console.log('------------');
    var ajax = new XMLHttpRequest();
    ajax.open('GET', './data/data.json');
    ajax.send();

    console.log('Carregando...');
    ajax.addEventListener('readystatechange', function(){
        if (isRequestOk()) {
            console.log('Requisição OK!', ajax.responseText);
        }
    }, false);

    function isRequestOk() {
        return ajax.readyState === 4 && ajax.status === 200;
    }
})();

// JSON.parse
(function() {
    console.log('JSON.parse');
    console.log('----------');
    var ajax = new XMLHttpRequest();
    ajax.open('GET', './data/data.json');
    ajax.send();

    console.log('Carregando...');
    ajax.addEventListener('readystatechange', function(){
        if (isRequestOk()) {
            var data = JSON.parse(ajax.responseText);
            console.log('Requisição OK!', data.message);
        }
    }, false);

    function isRequestOk() {
        return ajax.readyState === 4 && ajax.status === 200;
    }
})();

// Throw Error
(function() {
    console.log('Throw Error');
    console.log('-----------');
    var ajax = new XMLHttpRequest();
    ajax.open('GET', './data/data.json');
    ajax.send();

    console.log('Carregando...');
    ajax.addEventListener('readystatechange', function(){
        if (isRequestOk()) {
            throw new Error('Mensagem do Erro');
        }
    }, false);

    function isRequestOk() {
        return ajax.readyState === 4 && ajax.status === 200;
    }
})();

// try/catch
(function() {
    console.log('try/catch');
    console.log('---------');
    var ajax = new XMLHttpRequest();
    ajax.open('GET', './data/data.json');
    ajax.send();

    console.log('Carregando...');
    ajax.addEventListener('readystatechange', function(){
        if (isRequestOk()) {
            try {
                throw new Error('Mensagem do Erro');
            } catch(e) {
                console.log(e);
            }
            
        }
    }, false);

    function isRequestOk() {
        return ajax.readyState === 4 && ajax.status === 200;
    }
})();