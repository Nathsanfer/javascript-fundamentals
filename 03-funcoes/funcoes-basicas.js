/*
    Funções são blocos de código reutilizáveis que executam uma tarefa específica.

    Elas ajudam a:

    - organizar o código
    - evitar repetição
    - tornar o programa mais modular
*/

/*
    --------- DECLARAÇÃO DE FUNÇÃO ---------

    É a forma tradicional de criar funções.
*/

function saudacao(nome) {
    console.log("Olá, " + nome + "!");
}

saudacao("Nath");

/*
    --------- FUNÇÃO COM RETORNO ---------

    A palavra-chave return devolve um valor da função.

    ⚠️ Tudo que vem depois do return não é executado.
*/

function somar(a, b) {
    return a + b;
}

let resultado = somar(5, 3);
console.log("Resultado:", resultado);

/*
    --------- PARÂMETROS PADRÃO ---------

    Podemos definir valores padrão caso nenhum argumento seja passado.
*/

function cumprimentar(nome = "Visitante") {
    console.log("Bem-vindo,", nome);
}

cumprimentar();
cumprimentar("Nath");