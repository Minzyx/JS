// Escreva um programa que solicita três números ao usuário e verifica se eles estão em
//  ordem crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou não.

let n1 = parseFloat(prompt("Digite um número:"));
let n2 = parseFloat(prompt("Digite um número:"));
let n3 = parseFloat(prompt("Digite um número:"));

if (n1< n2 && n2< n3) {
    console.log("Os números estão em ordem crescente!")
}

else{
    console.log ("Os números não estão em ordem crescente.")
}