// Loops 
console.log('Loops');
console.log('-----');
console.log();

console.log('Do-While');
console.log('--------');
console.log('Exemplo 1: ');
var counter = 1;
console.log('Counter: ', counter);
console.log('Condição: counter < 1');
do {
    console.log('Counter: ', counter);
    counter++;
    
} while (counter < 1);
console.log('Counter: ', counter);
console.log();

console.log('For In');
console.log('------');
console.log('Exemplo 1: ');
console.log('Declarando Objeto...');
var obj = { 
    prop1: 'Propriedade 1',
    prop2: 'Propriedade 2',
    prop3: 'Propriedade 3',
    prop4: 'Propriedade 4'
}
console.log('Objeto: ', obj);
console.log('Percorrendo Objeto');
for( var prop in obj) {
    console.log(`Propriedade ${prop} do obj= ${obj[prop]}`);
}
console.log();

// Saltos
console.log('Saltos');
console.log('-----');
console.log();

console.log('Exemplo 1');
console.log('Return Statement');
(function saltoComReturn() {
    var number1 = 15;
    
    if (number1 === 15){
        console.log('Number1: ', number1);
        console.log('Pulando console  abaixo...');
        return true;
    }

    console.log('Esse codigo será pulado se number1 = 15');

})();
console.log();

console.log('Exemplo 2');
console.log('Break Statement');

console.log('Esquecendo Break no Switch');
(function saltoSemBreak() {
    var number1 = 1;
    switch(number1) {
        case 1: 
            console.log('Executei o primeiro statement');
        case 2: 
            console.log('Executei o segundo statement');
        case 3: 
            console.log('Executei o terceiro statement');
        default:
            console.log('Executei o Default');
    }

})();
console.log();
console.log('Colocando Break no Switch');
(function saltoComBreak() {
    var number1 = 1;
    switch(number1) {
        case 1: 
            console.log('Executei o primeiro statement');
            break;
        case 2: 
            console.log('Executei o segundo statement');
            break;
        case 3: 
            console.log('Executei o terceiro statement');
            break;
        default:
            console.log('Executei o Default');
            break;
    }

})();

console.log();
console.log('Break no For');
console.log('Contando de 0 a 10 com break em 5');
for (var i = 0; i < 10; i++){
    if (i === 5){
        console.log('Pulando a partir do i =', i);
        break;
    }
    console.log('i = ', i);
}

console.log();
console.log('Continue no For');
console.log('Contando de 0 a 10 com break em 5');
for (var i = 0; i < 10; i++){
    if (i === 5){
        console.log('Pulando o i =', i);
        continue;
    }
    console.log('i = ', i);
}