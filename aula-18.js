// Regular Expressions
console.log('Regular Expressions');
console.log('-------------------');
console.log();
var texto = 'Mussum Ipsum 2019, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga (28 de junho de 1928). Cacilds, viva Forevis aptent taciti sociosqu ad litora torquent. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis (29 de junho 1990), cacilds. In elementis mé pra quem é amistosis quis leo.';

var regex = /\s/g;
console.log('Buscar espaços no texto => ', texto.match(regex));
console.log();

regex = /\n/g;
console.log('Buscar pular linha no texto => ', texto.match(regex));
console.log();

regex = /[^abc|^ABC]/g;
console.log('Buscar todas as letras no texto, exceto a, b, c => ', texto.match(regex));
console.log();

regex = /[\W]/g;
console.log('Buscar todas as letras no texto, exceto alfanumericos => ', texto.match(regex));
console.log();

regex = /[\D]/g;
console.log('Buscar todas as letras no texto, exceto numeros => ', texto.match(regex));
console.log();

regex = /[\S]/g;
console.log('Buscar todas as letras no texto, exceto espaços => ', texto.match(regex));
console.log();

regex = /\d{2,4}/g;
console.log('Buscar de 2 à 4 digitos seguidos no textos => ', texto.match(regex));
console.log();

regex = /\d{2,}/g;
console.log('Buscar no texto conjuntos com pelo menos 2 digitos => ', texto.match(regex));
console.log();

regex = /\d{2}/g;
console.log('Buscar no texto conjuntos com exatamente 2 digitos => ', texto.match(regex));
console.log();

regex = /\d{2}/g;
console.log('Buscar no texto conjuntos com exatamente 2 digitos => ', texto.match(regex));
console.log();

regex = /(\s\d{2}?)/g;
console.log('Buscar no texto conjuntos com espaço em branco e opcional de 2 digitos => ', texto.match(regex));
console.log();

regex = /(ss)+/g;
console.log('Buscar no texto pelo menos 2 s => ', texto.match(regex));
console.log();