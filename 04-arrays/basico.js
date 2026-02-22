/*
    Arrays são estruturas que permitem armazenar vários valores em uma única variável.

    Cada valor dentro do array possui uma posição (índice),
    que começa sempre do 0.
*/

// --------- CRIANDO UM ARRAY ---------

let frutas = ["maçã", "banana", "uva"];

console.log(frutas);

/*
    Índices:
    frutas[0] → "maçã"
    frutas[1] → "banana"
    frutas[2] → "uva"
*/

// --------- ACESSANDO ELEMENTOS ---------

console.log(frutas[0]); // primeiro elemento
console.log(frutas[2]); // terceiro elemento

// --------- ALTERANDO ELEMENTOS ---------

frutas[1] = "laranja";

console.log(frutas);

/*
    --------- TAMANHO DO ARRAY ---------

    A propriedade length mostra quantos elementos existem no array.
*/

console.log("Tamanho:", frutas.length);

/*
    --------- ADICIONANDO ELEMENTOS ---------

    push() adiciona no FINAL do array.
*/

frutas.push("manga");
console.log(frutas);

/*
    unshift() adiciona no INÍCIO do array.
*/

frutas.unshift("morango");
console.log(frutas);

/*
    --------- REMOVENDO ELEMENTOS ---------

    pop() remove o ÚLTIMO elemento.
*/

frutas.pop();
console.log(frutas);

/*
    shift() remove o PRIMEIRO elemento.
*/

frutas.shift();
console.log(frutas);

/*
    --------- VERIFICANDO SE É ARRAY ---------
*/

console.log(Array.isArray(frutas)); // true