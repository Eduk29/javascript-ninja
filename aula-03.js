// Objetos
console.log('Objetos');
console.log('-------');

console.log();

console.log('Declarando objeto Pessoa');
var pessoa = {
    nome: 'Eduardo',
    sobrenome: 'Marques',
    sexo: 'masculino',
    idade: 1,
    altura: 1.65,
    peso: 115,
    andando: false,
    caminhouQuantosMetros: 0
}
console.log('Pessoa: ', pessoa);
console.log();

console.log('Adicionando método fazerAniversario...');
pessoa.fazerAniversario = function() {
    pessoa.idade++;
}

console.log('Adicionando método andar...');
pessoa.andar = function(distancia) {
    pessoa.caminhouQuantosMetros += distancia;
    pessoa.andando = true;
}

console.log('Adicionando método parar...');
pessoa.parar = function() {
    pessoa.andando = false;
}

console.log('Adicionando método nomeCompleto...');
pessoa.nomeCompleto = function() {
    return `Olá! Meu nome é ${pessoa.nome} ${pessoa.sobrenome}`;
}

console.log('Adicionando método mostrarIdade...');
pessoa.mostrarIdade = function() {
    return `Olá, eu tenho ${pessoa.idade} anos`;
}

console.log('Adicionando método mostrarPeso...');
pessoa.mostrarPeso = function() {
    return `Eu peso ${pessoa.peso}kg`;
}

console.log('Adicionando método mostrarAltura...');
pessoa.mostrarAltura = function() {
    return `Minha altura é ${pessoa.altura}m`;
}

console.log('Adicionando método apresentacao...');
pessoa.mostrarAltura = function() {
    return `Minha altura é ${pessoa.altura}m`;
}

pessoa.apresentacao = function() {
    
    var sexo = pessoa.sexo == 'masculino' ? 'o' : 'a'; 
    var idade = pessoa.idade <= 1 ? 'ano' : 'anos';
    var distancia = pessoa.caminhouQuantosMetros <= 1 ? 'metro' : 'metros';

    return `Olá, eu sou ${sexo} ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} ${idade}, ${pessoa.altura}, meu peso é ${pessoa.peso} e, só hoje, eu ja caminhei ${pessoa.caminhouQuantosMetros} ${distancia}`;
}

console.log();

console.log('Testando Objeto');
console.log(pessoa.nomeCompleto());
console.log(pessoa.mostrarIdade());
console.log(pessoa.mostrarPeso());
console.log(pessoa.mostrarAltura());
console.log('Fazendo 3 aniversarios');
// pessoa.fazerAniversario();
// pessoa.fazerAniversario();
// pessoa.fazerAniversario();
console.log(pessoa.mostrarIdade());
console.log('Andando 2 metros');
// pessoa.andar(2);
// console.log('Andando 4 metros');
// pessoa.andar(4);
// console.log('Andando 6 metros');
// pessoa.andar(6);
// console.log('A pessoa esta andando? ', pessoa.andando);
pessoa.parar();
console.log('A pessoa esta andando? ', pessoa.andando);
console.log('A pessoa andou: ', pessoa.caminhouQuantosMetros);

console.log('Apresentação: ');
console.log(pessoa.apresentacao());
