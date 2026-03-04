import leia from 'readline-sync'

let n1;
let n2;
let operador;

n1 = leia.questionInt("Digite um número: ")
operador = leia.question("Digite o operador: ")
n2 = leia.questionInt("Digite outro número: ")

switch(operador){
 case "+":
    console.log(`${n1} + ${n2} = ${n1 + n2}`);
    break;
 case "-":
    console.log(`${n1} + ${n2} = ${n1 - n2}`);
    break;
 case "*":
    console.log(`${n1} * ${n2} = ${n1 * n2}`);
    break;
 case "/":
    console.log(`${n1} / ${n2} = ${n1 / n2}`);
    break;
    default:
        console.log("Operador inválido.");
        break;
};
