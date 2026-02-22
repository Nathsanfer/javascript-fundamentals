/*
    Estruturas condicionais permitem que o programa tome decisões com base em condições.

    Elas executam diferentes blocos de código dependendo se uma condição é verdadeira (true) ou falsa (false).
*/

/*
    --------- IF ---------

    Executa um bloco de código se a condição for verdadeira

    --------- IF ... ELSE ---------

    Permite executar um bloco quando a condição é verdadeira e outro quando é falsa.

    --------- IF ... ELSE IF ... ELSE ---------

    Usado quando há várias condições.
*/

let nota = 5;

if (nota >= 9) {
    console.log("Excelente Trabalho!")
} else if (nota >= 7) {
    console.log("Aprovado!")
} else {
    console.log("Reprovado!")
}

/*
    --------- SWITCH ---------

    O switch é usado quando queremos comparar um mesmo valor com várias possibilidades diferentes.

    Ele é uma alternativa mais organizada ao uso de vários else if quando todas as comparações envolvem a mesma variável.
*/

let classificacao;

switch (true) {
    case nota >= 9:
        classificacao = "Excelente";
        break; // O break interrompe o switch.

    case nota >= 7:
        classificacao = "Bom";
        break;

    case nota >= 5:
        classificacao = "Regular";
        break;

    default: // O default executa se nenhum caso for atendido.
        classificacao = "Reprovado";
}

console.log(classificacao);