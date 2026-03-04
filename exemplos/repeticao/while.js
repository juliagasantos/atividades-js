import leia from 'readline-sync';

let continuar = false;

continuar = leia.keyInYN("Quer acesar a tabuada? ");

while (continuar) {
    let n = leia.questionFloat("Digite um número: ");

    for (let contador = 1; contador <= 10; contador++) {
        console.log(`${contador} x ${n} = ${contador * n}`);
    };
    continuar = leia.keyInYN("Quer continuar usando a tabuada? ");
};