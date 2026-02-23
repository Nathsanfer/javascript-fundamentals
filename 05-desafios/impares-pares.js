/* 
    Desenvolva um programa que receba dois números inteiros e analise todos os valores dentro do intervalo 
    formado por eles, incluindo os próprios limites. O programa deve funcionar corretamente independentemente 
    da ordem em que os números forem informados, garantindo que o menor valor seja tratado como início e o 
    maior como fim.

    Em seguida, o algoritmo deve percorrer todos os números do intervalo e identificar quais são pares e quais 
    são ímpares. Ao final da execução, o programa deve exibir a quantidade de números pares, a quantidade de 
    números ímpares e também a soma de todos os números ímpares encontrados.
*/

// Declaro as variáveis de entrada
let a = 8;
let b = 122;

// Variáveis que representam o início e o fim do intervalo
let inicio = 0;
let fim = 0;

// Variáveis de controle
let somaImpares = 0;
let numImpares = 0;
let numPares = 0;

// Garante que inicio seja o menor número
if (a >= b) {
    inicio = b;
    fim = a;
} else {
    inicio = a;
    fim = b;
}

// Percorre o intervalo
for (let i = inicio; i <= fim; i++) {
    // Verifica se é ímpar
    if (i % 2 !== 0) {
        numImpares++;
        somaImpares += i;
    } else {
        numPares++;
    }
}

// Exibe os resultados
console.log("Quantidade de números ímpares: " + numImpares);
console.log("Quantidade de números pares: " + numPares);
console.log("Soma dos números ímpares: " + somaImpares);