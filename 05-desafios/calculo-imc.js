/*
    Crie um programa em JavaScript que calcule o IMC (Índice de Massa Corporal) de uma pessoa. O sistema 
    deve receber a altura e o peso por meio de variáveis, calcular o IMC utilizando a fórmula adequada e, 
    em seguida, usar estruturas condicionais para classificar o resultado em uma das seguintes categorias: 
    abaixo do peso, peso normal, sobrepeso ou obesidade. Por fim, exiba no console a classificação 
    correspondente ao IMC calculado.
*/

// Declaro uma variével A de altura
let altura = 1.58;
// Declaro uma variável P de peso 
let peso = 72;
// Declaro uma variável com a operação 
let resultado = peso / (altura * altura);

// Realizo as comparações com o if e else
// Exibo o resultado  
if (resultado < 18.5) {
    // Exibo resultado 
    console.log("Abaixo do peso");
} else if (resultado >= 18.5 && resultado < 24.9) {
    // Exibo resultado
    console.log("Peso normal");
} else if (resultado >= 24.9 && resultado < 29.9) {
    // Exibo resultado
    console.log("Sobrepeso");
} else {
    // Exibo resultado
    console.log("Obesidade");
}