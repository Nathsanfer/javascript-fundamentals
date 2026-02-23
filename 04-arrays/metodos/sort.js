/* Utilizando o sort 
    Esse é um método utilizado para ordenar os elementos de um array. 
    Por padrão, o "sort" ordena os elementos do array colocando em 
    ordem alfabética ou numérica crescente.
*/
// Crio o array - Chamada de alunos 
let chamada = [
    { numero: 4, nome: 'Daniel' },
    { numero: 2, nome: 'Bianca' },
    { numero: 5, nome: 'Enzo' },
    { numero: 1, nome: 'Amanda' },
    { numero: 3, nome: 'Carlos' }
]
//console.log(chamada); Realizado para verificação do array 

console.log("------------ Exemplo 1 ------------"); // Realizado somente para separar
console.log("Chamada do 1 ao 5:");

/* Método sort 1

    function new(a, b) {
        return a.credit - b.credit;
    }

    array.sort(new);

*/
// Essa linha de código define uma função de callback que determinará a condição.
// Troquei o "new" pelo nome "numerosChamada" 
// Troquei o "credit" por "numero"
function numerosChamada(a, b) {
    return a.numero - b.numero;
}

// Essa linha serve para ordenar os elementos de um array com base em uma função callback.
// Troquei o "array" pelo nome do meu array "chamada"
// Troquei o "new" pelo nome "numerosChamada" 
chamada.sort(numerosChamada);

// Exibe a chamada em ordem Crescente
console.log(chamada);

console.log("------------ Exemplo 2 ------------"); // Realizado somente para separar
console.log("Chamada do 5 ao 1:");

/* Método sort 2

    function new1(a, b) {
        return b.credit - a.credit;
    }

    array.sort(new1);

*/
// Essa linha de código define uma função de callback que determinará a condição.
// Troquei o "new" pelo nome "numerosChamada1" 
// Troquei o "credit" por "numero"
function numerosChamada1(a, b) {
    return b.numero - a.numero;
}

// // Essa linha serve para ordenar os elementos de um array com base em uma função callback.
// Troquei o "array" pelo nome do meu array "chamada"
// Troquei o "new" pelo nome "numerosChamada1" 
chamada.sort(numerosChamada1);

// Exibe a chamada em ordem Decrescente 
console.log(chamada);