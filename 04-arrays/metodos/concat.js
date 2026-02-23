/* Utilizando o concat
    Esse é um método usado para mesclar dois ou mais arrays, retornando um 
    novo array com os elementos combinados.
*/

// Crio um array1 - Estados da região Sudeste
let estadosDaRegiãoSudeste = [
    'Espirito Santo',
    'Minas Gerais',
    'Rio de Janeiro',
    'São Paulo'
];
//console.log(estadosDaRegiãoSudeste); Realizado para verificação do array 

// Crio um array2 - Estados da região do Sul
let estadosDaRegiãoSul = [
    'Paraná',
    'Rio Grande do Sul',
    'Santa Catarina'
];
//console.log(estadosDaRegiãoSul);  Realizado para verificação do array 

console.log("------------ Exemplo 1 ------------"); // Realizado somente para separar
console.log("Quais são os estados da região Sul e Sudeste?");

/* Método concat 1

    const nemVariable = array1.concat(array2);

*/ 
// Essa linha serve para conectar uma array com outra array
// Troquei o "const" por let 
// Troquei o "nemVarible" pelo nome "regiãoSulSudeste"
// Troquei o "array1" pelo nome do meu array1 "estadosDaRegiãoSudeste"
// Troquei o "array2" pelo nome do meu array2 "estadosDaRegiãoSul"
let regiãoSulSudeste = estadosDaRegiãoSudeste.concat(estadosDaRegiãoSul);

// Exibe os estados da região Sul e Sudeste 
console.log(regiãoSulSudeste);

console.log("------------ Exemplo 2 ------------"); // Realizado somente para separar
console.log("Qual o nome dos alunos da sala 1ºA?");

// Crio um array3 - Meninas da sala 1ºA
let meninasDaSala = [
    'Anna', 'Beatriz',
    'Julia', 'Isabela',
    'Mariana', 'Nathalia'
];
//console.log(meninasDaSala); Realizado para verificação do array 

// Crio um array4 - Meninos da sala 1ºA
let meninosDaSala = [    
    'Julio', 'Matheus',
    'Cauã', 'Rafael',
    'Gustavo', 'André'
];
//console.log(meninosDaSala); Realizado para verificação do array

/* Método concat 1

    const nemVariable = array3.concat(array4);

*/ 
// Essa linha serve para conectar uma array com outra array
// Troquei o "const" por let 
// Troquei o "nemVarible" pelo nome "salaPrimeiroA"
// Troquei o "array3" pelo nome do meu array3 "meninasDaSala"
 // Troquei o "array4" pelo nome do meu array4 "meninosDaSala"
let salaPrimeiroA = meninasDaSala.concat(meninosDaSala);

// Exibe os alunos da Sala 1ºA
console.log(salaPrimeiroA);