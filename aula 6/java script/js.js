//------------aula 6 -------

console.log("\ntipo Number agora\n");

var numero= 1;
var float= 5.2;

//typeof serve para ver o tipo da variavel
console.log(typeof numero);
console.log(typeof float);

var textComNumero= "1234";
var SoNumero= 1234;

console.log(textComNumero);
console.log(SoNumero);
var juntando=textComNumero+SoNumero;
console.log(juntando);

console.log(typeof textComNumero);
console.log(typeof SoNumero);

console.log(textComNumero+textComNumero);
console.log(SoNumero+SoNumero);

//------------aula 7 -------
console.log("\ntipo String agora\n");

var nome= "vanubia"
console.log(nome);
console.log(nome+nome);
console.log(typeof nome);
console.log(typeof "nome");
console.log(typeof "50000765");
console.log(nome+ " é o meu nome");
var frase = " é o meu nome";
console.log(nome + frase);

//função basica para aparcer mensagem no html usando java script

document.write(nome + frase + "e essa é uma frase feita com java script com a funcção de document.write(nome + frase + )");

console.log('ola "mundo"');


//------------aula 8 -------

//Boolean
console.log("\ntipo booleano agora\n");
var verdadeiro = true;
console.log(verdadeiro);
console.log(typeof verdadeiro);
console.log(typeof true);



var falso = false;
console.log(falso);
console.log(typeof falso);
console.log(typeof true);

//----palavras reservadas---

/*
var var=1;
var false= 1;
var true= 1;
var let= 1;
var function = 1;
var typeof=1;
var const=1;
*/

//------------aula 9 -------

// tipo undefined e null

console.log("\ntipo  undefined e null agora\n");

//hosting - se trata do carregamento das variaveis no topo ao inicar o java script, entaõ
// se eu dou um console.log(semNome) ela vai dizer undefined, mas já sabe que a variavel vai ser criada;
console.log(semNome);
var nome = null;

console.log(nome);
console.log(typeof nome);//tipo objeto

nome = 'vanubia'
console.log(nome);
console.log(typeof nome);//tipo string, porque antes ele era só um objeto com o valor nulo

var semNome
console.log(semNome);
console.log(typeof semNome);

semNome="vanubia 2"
console.log(semNome);
console.log(typeof semNome);






