import leia from 'readline-sync'

let ingresso;
let idade;
let nome;

ingresso = leia.keyInYN("Tem ingresso? ");
idade = leia.questionInt("Qual a idade? ");

if (ingresso && idade >= 10){

    nome = leia.question("Qual o seu nome? ")
    console.log(`Pode entrar ${nome}, seja Bem-Vindo(a)!`)
}else if( ingresso && idade >= 14){
    console.log("Bem-Vindo(a)!")
}else{
console.log("Não pode entrar!")
};
