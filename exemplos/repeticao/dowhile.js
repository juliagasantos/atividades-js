import leia from 'readline-sync';

let continuar = false;

do {
    console.log("Joguinho de adivinhação.");
    let n = leia.questionInt("Digite um número: ");
    const nSecreto = Math.floor(Math.random () * 10);

    if(n == nSecreto){
        console.log("Acertou!")
    }else{
        console.log("Errou!")
        console.log(`O número secreto era: ${nSecreto}`)
    }

    continuar = leia.keyInYN("Para continuar jogando pague R$350.")
} while (continuar);
