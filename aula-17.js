// Regular Expressions
console.log('Regular Expressions');
console.log('-------------------');
console.log();
var texto = 'Mussum Ipsum 2019, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga (28 de junho de 1928). Cacilds, viva Forevis aptent taciti sociosqu ad litora torquent. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis (29 de junho 1990), cacilds. In elementis mé pra quem é amistosis quis leo.';

console.log('Regex sempre entre duas barras: ', /Isto é um regex!!/);
console.log();

var regex = /Isto é um regex!!/;
console.log('O Regex pode ser atribuito a uma variável => ', regex);
console.log();

regex = /cacilds/;
console.log('Para validar se uma string tem o regex: ', texto.match(regex));
console.log();

regex = /cacilds/g;
console.log('Para validar uma regex em todo texto: ', texto.match(regex));
console.log();

regex = /cacilds/gi;
console.log('Para ignorar letras maiusculas e minusculas: ', texto.match(regex));
console.log();

regex = /[cacilds]/gi;
console.log('Para criar classes de caracteres e buscar no texto: ', texto.match(regex));
console.log();

regex = /(cacilds)/gi;
console.log('Para criar agrupamento de caracteres e buscar no texto: ', texto.match(regex));
console.log();

regex = /((cacilds)|(Mussum))/gi;
console.log('Para buscar no texto uma sequencia ou outra: ', texto.match(regex));
console.log();

regex = /\w\w\w/gi;
console.log('Para buscar qualquer caracter alfanumérico no texto: ', texto.match(regex));
console.log();

regex = /\d\d/gi;
console.log('Para buscar qualquer caracter numérico no texto: ', texto.match(regex));
console.log();

regex = /[0-9]/gi;
console.log('Para buscar sequencia de caracteres no texto (De acordo com a tabela ASCII): ', texto.match(regex));
console.log();