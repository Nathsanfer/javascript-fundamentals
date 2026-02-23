/* Utilizando o some
    Esse é um método muito semelhante ao "every". A diferença é que o "every"
    só retorna true se todos os elementos passarem no teste. O "some" retorna 
    true se pelo menos um elemento do Array passar no teste.
*/

// Crio o array - Transferência 
let numerosTransferencia = [
    { nome: 'Julio', depositado: 50 },
    { nome: 'Anna', depositado: 20 },
    { nome: 'Marcelo', depositado: 70 }
];
//console.log(numerosTransferencia); Realizado para verificação do array 

console.log("------------ Exemplo 1 ------------"); // Realizado somente para separar
console.log("Algum elemento é igual a 50: ");

/* Método some 1

    const newVariable = array.some(element => element = 50);

*/
// Essa linha serve para verificar se pelo menos um elemento do array satisfaz uma determinada condição.
// Troquei o "const" por let 
// Troquei o "newVariable" pelo nome "numeroIgual"
// Troquei o "array" pelo nome do meu array "numerosTransferencia"
let numeroIgual = numerosTransferencia.some(element => element = 50);

// Exibe a resposta 
console.log(numeroIgual);

console.log("------------ Exemplo 2 ------------"); // Realizado somente para separar
console.log("Algum elemento é um número negativo: ");

/* Método some 2

    const newVariable1 = array.some((user, index, array) => user.name < 10);

*/
// Essa linha serve para verificar se pelo menos um elemento do array satisfaz uma determinada condição.
// Troquei o "const" por let 
// Troquei o "newVariable1" pelo nome "numerosMenorQueDez"
// Troquei o "array" pelo nome do meu array "mnumerosTrasferencia"
// Troquei o "name" por "depositado"
let numerosMenorQueDez = numerosTransferencia.some((user, index, array) => user.depositado < 10);

// Exibe a resposta 
console.log(numerosMenorQueDez);