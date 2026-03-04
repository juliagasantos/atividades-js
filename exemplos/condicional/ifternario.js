import leia from 'readline-sync'

let n1, n2, m

n1 = leia.questionInt("Digite a primeira nota: ")
n2 = leia.questionInt("Digite a segunda nota: ")

m = (n1 + n2)/2;

console.log((m >= 7) ? "Aprovado" : "Reprovado");
