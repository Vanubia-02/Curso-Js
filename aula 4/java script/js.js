var varsemnada;

var teste= 1;
console.log(teste);

teste = "vanúbia";
console.log(teste);

a= teste + 1;
console.log(teste);

teste = 1 +1 
console.log(teste);
/* declaração de variavel de forma global:
essa declaração de variavel pode ser perigosa, pois 
pode acabar sobrescrevendo outra variavel 

uma boa maneira é colocar o var antes de declarar uma variavel
*/

//os unicos caracteres especiais que podem ser usados para declarar uma variavel é o _ e o $ \nveja o exemplo a seguir

var _num = 10;
console.log(_num);
var $num = 20;
console.log($num);

//não posso começar uma variavel com numero, mas posos add numero no meio da declaração da varavel. A seguir:

var num1 = "numero1";
var num2 = "numero2";
console.log(num1, num2);

// a declaração da variavel pode ser feita com letras maiusculas no meio

var numeroUm = "numero um"; //camelcase - deixa a leitura do codigo mais fluida

//tem três  formas de declarar variaveis:
// var , let e const  

var numero1 = 1;
let numero2 = 2;
const numero3 = 3;

console.log(numero1, numero2, numero3);

//é comum declarar variaveis sem nada e depois usar elas para armazenar algum valor ao longo do codigo
varsemnada = numero1 + numero2 + numero3;
console.log(varsemnada);

















