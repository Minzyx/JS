// Faça um programa que receba um número do usuário e informe se este número é par ou ímpar.


let numero = parseInt(prompt("Digite um número:"));


if(numero % 2 === 0) {
    console.log(numero + " O número é par.");
} 

else if (numero % 2 === 1){
    console.log(numero + " O número ímpar.");
} else{
    console.log ("O valor informado não é um número.")
}

