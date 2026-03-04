import leia from 'readline-sync';

let senhaCorreta = "123";
let senhaDigitada = "";
let contador = 0;

while (contador < 3) {
    senhaDigitada = leia.question("Digite a senha: ");
    contador++;

    if (senhaDigitada === senhaCorreta) {
        console.log("Acesso liberado!");
        break;
    } else {
        console.log("Senha incorreta.");
    }
}

if (senhaDigitada !== senhaCorreta) {
    console.log("Tentativas esgotadas. Acesso negado.");
}