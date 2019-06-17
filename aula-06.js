function myFunc() {
  var a = 1,
    b = 2,
    c = 3;
  return [a, b, c];
}

function myFunc2() {
  var x = 0;
  console.log("x = ", x);
  return (x += 1), x;
}

function mySwitch(argumento) {
  switch (argumento) {
    case 1:
      console.log("Valor é igual a 1");
      break;

    case 2:
      console.log("Valor igual a 2");
      break;

    default:
      console.log("Não é 1 ou 2");
  }
}

function myWhile() {
    var counter = 1;
    while(counter <= 10) {
        console.log('Counter: ', counter);
        counter++;
    }
}

// Operador Vírgula
console.log("Operador Vírgula");
console.log("----------------");

console.log();

console.log("var a = 1, b = 2, c = 3 <===> var a = 1; var b = 2; var c = 3");
console.log("Declarando com virgula => a, b e c: ", myFunc());
console.log("Retornando com virgula: ", myFunc2());

console.log();

// Switch
console.log("Switch");
console.log("------");

console.log();

console.log('Chamando o switch com 1');
mySwitch(1);

console.log('Chamando o switch com 2');
mySwitch(2);

console.log('Chamando o switch com 3');
mySwitch(3);

console.log();

// While
console.log("While");
console.log("-----");

console.log();

console.log('Chamando o while 10 vezes');
myWhile();