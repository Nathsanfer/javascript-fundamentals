/* Utilizando o filter 
    Esse é um método que permite filtrar elementos de um array com base em uma 
    condição especificada. Ele cria um novo array com todos os elementos que 
    foram filtrados. O "filter" não modifica o array original, ele retorna um 
    novo array com os elementos filtrados, mantendo o array original inalterado.
*/

// Crio o array - Notas
let listaDeNotas = [
    { nome: 'Nathalia', nota: 97 },
    { nome: 'Anna', nota: 112 },
    { nome: 'Giovanni', nota: 100 },
    { nome: 'Vitor', nota: 100 },
    { nome: 'Gabriela', nota: 99 },
    { nome: 'Pablo', nota: 120 },
    { nome: 'Giovana', nota: 77 }
];
//console.log(listaDeNotas); Realizado para verificação do array 

console.log("------------ Exemplo 1 ------------"); // Realizado somente para separar
console.log("Lista de alunos aprovados:");

/* Método filter 1

    const newVariable = array1.filter((user, index, array) => user.credit > 500);

*/
// Essa linha cria um novo array contendo apenas os elementos que satisfazem uma determinada condição.
// Troquei o "const" por let 
// Troquei o "newVariale" pelo nome "alunosAprovados"
// Troquei o "array1" pelo nome do meu array "listaDeNotas" 
// Troquei o "credit" por "nota"
// Troquei o "500" pelo valor que os alunos precisam tirar para serem aprovados "100" (aprovação >= 100)
let alunosAprovadas = listaDeNotas.filter((user, index, array) => user.nota >= 100);

// Exibe os alunos aprovados 
console.log(alunosAprovadas);

console.log("------------ Exemplo 2 ------------"); // Realizado somente para separar
console.log("Lista de alunos reprovados:");

/* Método filter 2

    function new(user) {
    return user.credit >= 100;

    const newVariable = array1.filter(new, this);

*/
// Essa linha de código define uma função de callback que determinará a condição.
// Troquei o "new" pelo nome de "reprovado"
// Troquei o "credit" por "nota"
function reprovado(user) {
    return user.nota < 100;
};

// Essa linha cria um novo array contendo apenas os elementos que satisfazem uma determinada condição.
// Troquei o "const" por let
// Troquei o "newVariable" pelo nome "Reprovados"
// Troquei o "array1" pelo nome do meu array "listaDeNotas" 
// Troquei o "new" pelo nome de "reprovado"
let Reprovados = listaDeNotas.filter(reprovado, this);

// Exibe os alunos reprovados
console.log(Reprovados);