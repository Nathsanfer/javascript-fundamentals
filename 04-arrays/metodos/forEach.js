/* Utilizando o forEach
    Esse é um método que permite que você intere (repita) os elemnetos do seu array 
    e execute a função de "callback" (função que é passada como argumento para outra 
    função e é executada posteriormente dentro dessa função.) para cada elemento.
*/

// Crio o array - Nomes
let listaDeNomes = [
    'Nathalia', 'Anna',
    'Giovanni', 'Vitor',
    'Gabriela', 'Pablo'
];
//console.log(listaDeNomes); Realizado para verificação do array 

console.log("------------ Exemplo 1 ------------"); // Realizado somente para separar
console.log("Lista de nomes:");

/* Método forEach 1

    array.forEach(element => {
        console.log(element);
    });

*/
// Essa linha serve para iterar sobre cada elemento do array e executar uma determinada ação para cada elemento.
// Troquei o "array" pelo nome do meu array "listaDeNomes"
listaDeNomes.forEach(element => {
    console.log(element); // Exibe
});

console.log("------------ Exemplo 2 ------------"); // Realizado somente para separar
console.log("Lista de nomes:");

/* Método forEach 2
    
    array.forEach(function(element) {
        console.log(element);
    });

*/
// Essa linha serve para iterar sobre cada elemento do array e executar uma determinada ação para cada elemento.
// Troquei o "array" pelo nome do meu array "listaDeNomes"
listaDeNomes.forEach(function (element) {
    console.log(element); // Exibe
});