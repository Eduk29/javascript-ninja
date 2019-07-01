// Regular Expressions
console.log('Regular Expressions');
console.log('-------------------'); 

texto = "<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>";

console.log('Texto: ', texto);
var regex = /^<p>/g;
console.log('Buscar a tag <p> no inicio do texto => ', texto.match(regex));
console.log();

console.log('Texto: ', texto);
var regex = /<\/footer>$/g;
console.log('Buscar a tag </footer> no fim do texto => ', texto.match(regex));
console.log();

// String Methods
console.log('Métodos de String utilizando Regex');
console.log('----------------------------------');
console.log();

console.log('Método Match');
console.log('------------');
var nome = 'Eduardo';
var regex = /Edu/;
console.log('Buscando Edu na palavra nome: ', nome.match(regex));
console.log();

console.log('Método Split');
console.log('------------');
var cpf = '111.222.333-44';
var regex = /\D/;
console.log('Separando cpf por grupos numéricos: ', cpf.split(regex));
console.log();

console.log('Método Search');
console.log('-------------');
var cpf = '111.222.333-44';
var regex = /2/;
console.log('Indice onde esta o regex solicitado: ', cpf.search(regex));
console.log();

// Construtor RegExp
console.log('Construtor RegExp()');
console.log('-------------------');
console.log();

console.log('Exemplo 1');
var regExp =  new RegExp('du');
console.log('Regex: ', regExp);
console.log();

console.log('Métodos do RegExp()');
console.log('-------------------');
console.log();

console.log('Método test');
console.log('-----------');
var name = 'Eduardo';
var regex = new RegExp('Edu');
console.log('Testando Edu na variavel name: ', regex.test(name));
console.log();

console.log('Método exec');
console.log('-----------');
var name = 'Eduardo123';
var regex = /\d/g;
console.log('Testando Edu na variavel name: ', regex.exec(name));
console.log('Testando Edu na variavel name: ', regex.exec(name));
console.log('Testando Edu na variavel name: ', regex.exec(name));
console.log('Testando Edu na variavel name: ', regex.exec(name));
console.log();