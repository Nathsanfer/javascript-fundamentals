/*
    Crie um programa que simule um jogo de adivinhação. O sistema deve gerar um número secreto aleatório entre 0
    e 100 e, em seguida, realizar tentativas automáticas para descobri-lo.

    A cada tentativa, o programa deve informar se o palpite está acima ou abaixo do número secreto e continuar 
    tentando até acertar. No final, exiba uma mensagem de sucesso, revele o número secreto e informe quantas 
    tentativas foram necessárias para encontrá-lo.
*/

// Declaro uma variável A, cujo vai ser nosso número secreto 
// Ultilizo o ((Math.random() * 100).toFixed()) para gerar número aleatório
let a = ((Math.random() * 100).toFixed());
// Declaro uma variável B, cujo o número vai tentar acertar o número secreto
// Ultilizo o ((Math.random() * 100).toFixed()) para gerar número aleatório
let b = ((Math.random() * 100).toFixed());
// Declaro uma variável que contará a quantidade de tentativas 
let contagem = 1;

// Realizo o looping while/enquanto
while (!(b == a)) {
    if (b > a) {
        // Exibo as dicas
        console.log("O número secreto é menor que " + b);
        // Somo mais um ++
        contagem++;
    } else {
        // Exibo as dicas 
        console.log("O número secreto é maior que " + b);
        contagem++;
    }
    // Caso o número secreto não seja achado, outro número será gerado 
    b = ((Math.random() * 100).toFixed());
}

// Caso o número secreto seja encontrado 
if (b == a) {
    // Exibo resultado 
    console.log("Você adivinhou o número secreto :)");
    console.log("O número secreto é: " + a);
}

// Exibo resultado da quantidade de tentativas realizadas  
console.log("Foram realizadas " + contagem + " tentativas");