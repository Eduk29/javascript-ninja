console.log('setTimeout');
console.log('----------');

console.log('Executando timer de 10 segundos com setTimeout: ');
var counter = 0;

function timer() {
    console.log('Timer: ', counter++);
    if (counter > 10) {
        return;
    }
    var temporizador = setTimeout(timer, 1000);
}

// timer();
console.log();

console.log('setInterval');
console.log('-----------');

console.log('Executando console.log() com setInterval: ');

setInterval(function () {
    console.log('Chamando setInterval');
    counter++;
}, 1000)