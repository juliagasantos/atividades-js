import leia from 'readline-sync';

let n = leia.questionFloat("Digite um número: ");

for(let contador = 1; contador <=10; contador++){
console.log(`${contador} x ${n} = ${contador * n}`);
};

