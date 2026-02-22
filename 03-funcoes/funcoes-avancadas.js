/*
    --------- FUNÇÃO ANÔNIMA ---------

    É uma função sem nome, geralmente atribuída a uma variável.
*/

const multiplicar = function (x, y) {
    return x * y;
};

console.log("Multiplicação:", multiplicar(4, 2));

/*
    --------- ARROW FUNCTION ---------

    Forma moderna e mais curta de escrever funções.
*/

const dividir = (a, b) => {
    return a / b;
};

console.log("Divisão:", dividir(10, 2));

/*
    Arrow function em forma curta (quando há apenas uma linha)
*/

const dobrar = n => n * 2;

console.log("Dobro:", dobrar(6));