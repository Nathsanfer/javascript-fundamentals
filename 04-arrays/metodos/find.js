/* Utilizando o find
    Esse é um método usado para retornar o primeiro elemento de um array que 
    satisfaz a função de teste fornecida, caso nenhum elemento satisfaça a
    condição ele retorna "undefined".
*/

// Crio o array - Frutas 
let cestaDeFrutas = [
    { nome: "Banana", quantidade: 4 },
    { nome: "Morango", quantidade: 9 },
    { nome: "Laranja", quantidade: 3 },
    { nome: "Melão", quantidade: 1 }
];
//console.log(cestaDeFrutas); Realizado para verificação do array 

console.log("------------ Exemplo 1 ------------"); // Realizado somente para separar
console.log("A fruta é:");

/* Método find 1

    const newVariable = array.find(new => new.name == "?")

*/
// Essa linha serve para encontrar o primeiro elemento que satisfaz uma determinada condição. 
// Troquei o "const" por let
// Troquei o "newVariable" pelo nome "Fruta"
// Troquei o "array" pelo nome do meu array "cestaDeFrutas" 
// Troquei o "new" pelo nome "fruta"
// Troquei o "name" por "nome"
// Troquei o "?" pela fruta que queria encontrar "Laranja" 
let Fruta = cestaDeFrutas.find(fruta => fruta.nome == "Laranja");

// Exibe a fruta 
console.log(Fruta);

console.log("------------ Exemplo 2 ------------"); // Realizado somente para separar
console.log("A fruta é:");

/* Método find 2

    function new1(array) {
        return array.name === '?';
    }

    const newVariable1 = array.find(new1, this);

*/
// Essa linha de código define uma função de callback que determinará a condição.
// Troquei o "new1" pelo nome "frutaVerificação"
// Troquei o "array" pelo nome do meu array "cestaDeFrutas" 
// Troquei o "name" por "nome"
// Troquei o "?" pela fruta que queria encontrar "Melão"
function frutaVerificação(cestaDeFrutas) {
    return cestaDeFrutas.nome === "Melão";
};

// Essa linha cria um novo array que vai conter o primeiro elemento que satisfez a determinada condição.
// Troquei o "const" por let
// Troquei o "newVariable1" pelo nome "pFruta"
// Troquei o "new1" pelo nome "frutaVerificação"
let pFruta = cestaDeFrutas.find(frutaVerificação, this);

// Exibe a fruta 
console.log(pFruta);