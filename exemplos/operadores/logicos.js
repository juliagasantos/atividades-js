let x = 10;
let y = 5;
let proposicao1;
let proposicao2;
let proposicao3;
let proposicao4;
let resposta;

// proposicao1 = x > y;
// console.log(`\n proposicao 1: ${proposicao1}`);

// proposicao2 = x < y;
// console.log(`\n proposicao 2: ${proposicao2}`);

// proposicao3 = x != y;
// console.log(`\n proposicao 3: ${proposicao3}`);

// proposicao4 = x == y;
// console.log(`\n proposicao 4: ${proposicao4}`);


// console.log("\n Conjução");

// resposta = proposicao1 && proposicao2
// console.log("\n Proposição é: " + resposta);


resposta = proposicao1 ^ proposicao3;
console.log(`\n proposicao 1: ${proposicao1}`);

resposta = proposicao2 ^ proposicao4;
console.log(`\n proposicao 2: ${proposicao2}`);

resposta = proposicao1 ^ proposicao2;
console.log(`\n proposicao 3: ${proposicao3}`);

resposta = proposicao3 ^ proposicao4;
console.log(`\n proposicao 4: ${proposicao4}`);