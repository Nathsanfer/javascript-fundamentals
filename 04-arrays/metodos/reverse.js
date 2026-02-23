/* Utilizando o reverse
    Esse é um método usado para inverter a ordem dos elementos em um array. 
    Ele modifica o array original, invertendo os elementos e retornando uma 
    referência para o próprio array invertido. 
*/

// Crio o array1 - Cores
let cores = [
    'Azul', 'Amarelo',
    'Vermelho', 'Verde',
    'Rosa', 'Laranja',
    'Roxo', 'Branco',
    'Preto', 'Marrom'
];
//console.log(cores); Realizado para verificação do array 

console.log("------------ Exemplo 1 ------------"); // Realizado somente para separar
console.log("Nomes de algumas cores:");

/* Método reverse 1 - cores

    array1.reverse();

*/
// Essa linha serve para inverter a ordem dos elementos do array.
// Troquei o "array1" pelo nome do meu array1 "cores"
cores.reverse();

// Exibe as cores em ordem invertida
console.log(cores);

console.log("------------ Exemplo 2 ------------"); // Realizado somente para separar
console.log("Do Contemporâneo para Pré-história:");

// Crio o array2 
let periódosDaHistória = [
    'Pré-história',
    'Idade Antiga',
    'Idade Média',
    'Idade Moderna',
    'Idade Contemporânea'
]
//console.log(periódosDaHistória); Realizado para verificação do array 

/* Método reverse 2 - Períodos da História

    array2.reverse();

*/
// Essa linha serve para inverter a ordem dos elementos do array.
// Troquei o "array2" pelo nome do meu array2 "períodosDaHitória"
periódosDaHistória.reverse();

// Exibe os périodos em ordem invertida
console.log(periódosDaHistória);