/* Utilizando o splice
    Esse é um método que permite adicionar, remover ou substituir elementos 
    de um array. 
*/

// Crio o array - Comidas Favoridas
let comidasFavoritas = [
    'Strogonoff',
    'Pizza',
    'Torta de Frango',
    'Sushi'
]
//console.log(comidasFavoritas); Realizado para verificação do array 

console.log("------------ Removendo - Sushi ------------"); // Realizado somente para separar

/* Splice - removendo

    array.splice(3,1);

*/
// Essa linha remove um elemento do array começando do quarto elemento (índice 3).
// Troquei o "array" pelo nome do meu array "comidasFavoritas"
comidasFavoritas.splice(3, 1);

// Exibe o array com um elemento removido
console.log(comidasFavoritas);

console.log("------------ Adicionando - Sushi e Pamonha ------------"); // Realizado somente para separar

/* Splice - adicionando 

    array.splice(4,1, '?', '?1');

*/
// Essa linha adiciona um elemento do array começando do quinto elemento (índice 4).
// Troquei o "array" pelo nome do meu array "comidasFavoritas"
// Troquei o "?" pelo nome "Sushi"
// Troquei o "?1" pelo nome "Pamonha" 
comidasFavoritas.splice(4, 1, 'Sushi', 'Pamonha');

// Exibe o array com um elemento adicionado 
console.log(comidasFavoritas);

console.log("------------ Substituindo - Sushi por Macarrão ------------"); // Realizado somente para separar

/* Splice - substituindo

    array.splice(3,1, '?2');

*/
// Essa linha substitui um elemento do array começando do quarto elemento (índice 3).
// Troquei o "array" pelo nome do meu array "comidasFavoritas"
// Troquei o "?2" pelo nome "Macarrão"
comidasFavoritas.splice(3, 1, 'Macarrão');

// Exibe o array com um elemento substituido 
console.log(comidasFavoritas);