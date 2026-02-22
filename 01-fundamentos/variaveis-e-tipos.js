/*
    O que são Variáveis?

    Variáveis são espaços na memória usados para armazenar valores que podem ser utilizados e manipulados ao longo do programa.
    Podemos declarar variáveis usando:

    - let: recomendada para valores que mudam;
    - const: recomendada para valores fixos;
    - var: forma antiga;
*/

/* 
    Quais são os tipos de dados?

    - string → textos
    - number → números
    - boolean → verdadeiro ou falso
    - null → ausência intencional de valor
    - undefined → valor não definido
    - bigint → números inteiros muito grandes
    - symbol → identificadores únicos
*/

// Como boa prática utilizamos o camelCase para nomear variável, começa com letra minúscula e depois letra maiúscula.

let nomeCompelto = "Nathalia Santos"; // String
let idade = 18; // Number
let carteiraHabiitacao = false; // Boolean

// console.log - Exibe no terminal 

console.log("Qual seu nome? " + nomeCompelto);
console.log("Quantos anos tem? " + idade + " anos")
console.log("Possui Carteira de Habilitação? " + carteiraHabiitacao)