/* Utilizado o every 
    Esse é um método usado para verificar se todos os elementos de um array 
    passam por um teste especificado por uma função fornecida. Ele retorna 
    true se todos os elementos passarem no teste ou false se algum dos 
    elementos não passar.
*/

// Crio o array - Números
let numeros = [
    1, 12, 14, 20,
    31, 72, 64, 80
];
//console.log(numeros); Realizado para verificação do array 

console.log("------------ Exemplo 1 ------------"); // Realizado somente para separar
console.log("Todos os números são maiore que 0?");

/* Método every 1

    const newVariable = array.every(element => element > 0);

*/
// Essa linha verifica se todos os elementos do array satisfazem a condição.
// Troquei o "const" por let 
// Troquei o "newVariable" pelo nome "todosMaioreQueZero"
// Troquei o "array" pelo nome do meu array "numeros"
let todosMaioresQueZero = numeros.every(element => element > 0);

//Exibe a resposta
console.log(todosMaioresQueZero);

console.log("------------ Exemplo 2 ------------"); // Realizado somente para separar
console.log("Todos os números são pares?");

/* Método every 2

    const newVariable = array.every(element => element % 2 === 0);

*/
// Essa linha verifica se todos os elementos do array satisfazem a condição.
// Troquei o "const" por let 
// Troquei o "newVariable" pelo nome "todosPares"
// Troquei o "array" pelo nome do meu array "numeros"
let todosPares = numeros.every(element => element % 2 === 0);

//Exibe a resposta 
console.log(todosPares);