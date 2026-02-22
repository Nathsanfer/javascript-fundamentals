/*
    Estruturas de repetição (loops) permitem executar um bloco de código várias vezes
    enquanto uma condição for verdadeira.

    Elas evitam repetição manual de código e tornam o programa mais eficiente.
*/

/*
    --------- FOR ---------

    O for é usado quando sabemos quantas vezes o código deve repetir.

    Estrutura:
    for (inicialização; condição; incremento)

    - inicialização → começa o contador
    - condição → enquanto for true, o loop continua
    - incremento → atualiza o contador a cada volta
*/

for (let i = 0; i < 5; i++) {
    console.log("Contador (for):", i);
}

/*
    --------- WHILE ---------

    O while é usado quando NÃO sabemos exatamente quantas repetições vão acontecer.

    Ele executa o bloco enquanto a condição for verdadeira.

    Muito importante: a condição precisa mudar dentro do loop, senão cria um loop infinito.
*/

let contador = 0;

while (contador < 5) {
    console.log("Contador (while):", contador);
    contador++; // importante para evitar loop infinito
}

/*
    --------- DO ... WHILE ---------

    Parecido com o while, mas com uma diferença importante:

    O bloco executa PELO MENOS UMA VEZ, mesmo que a condição seja falsa.
*/

let numero = 0;

do {
    console.log("Contador (do...while):", numero);
    numero++;
} while (numero < 5);

/*
    --------- BREAK ---------

    Interrompe o loop imediatamente.
*/

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // para o loop quando i for 5
    }

    console.log("Break exemplo:", i);
}

/*
    --------- CONTINUE ---------

    O continue NÃO para o loop.

    Ele apenas pula a iteração atual e vai para a próxima volta.
*/

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // pula o número 2
    }

    console.log("Continue exemplo:", i);
}