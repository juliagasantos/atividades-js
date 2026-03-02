// importa a biblioteca readline-sync para poder ler dados do teclado
const leia = require('readline-sync');

let n;

// lê um número inteiro digitado pelo usuário
n = leia.questionInt("Digite um número: ");

console.log("nome: " + n)