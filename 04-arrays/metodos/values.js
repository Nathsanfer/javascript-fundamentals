/* Utilizando o values
    Esse é um método utilizado para retornar um novo objeto de iteração 
    contendo os valores de todas as propriedades de um objeto. 
*/

// Crio o array - Dados de Nathalia 
let dadosNathalia = {
        nome: 'Nathalia',
        idade: 16,
        cidade: 'Valinhos'
}
//console.log(dadosNathalia); Realizado para verificação do array 


console.log("------------ Exemplo 1 ------------"); // Realizado somente para separar
console.log("Dados:"); 

/* Método values 1

    const newVariable = Object.values(array);

*/
// Essa linha vai retorna um array com os valores das propriedades do objeto.
// Troquei o "const" por let
// Troquei o "newVariable" pelo nome de "dados"
// Troquei o "array" pelo nome do meu array "dadosNathalia" 
let dados = Object.values(dadosNathalia);

// Exibe os dados
console.log(dados);

console.log("------------ Exemplo 2 ------------"); // Realizado somente para separar
console.log("Dados:"); 

/* Método values 2

    const newVariable1 = Object.values(array);

*/
// Essa linha vai retorna um array com os valores das propriedades do objeto.
// Troquei o "const" por let
// Troquei o "newVariable" pelo nome de "dados1"
// Troquei o "array" pelo nome do meu array "dadosNathalia" 
let dados1 = Array.from(Object.values(dadosNathalia));

// Exibe os dados
console.log(dados1);