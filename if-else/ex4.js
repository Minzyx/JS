// Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das notas e a mensagem de APROVADO 
// para média superior ou igual a 7,0 RECUPERAÇÃO para notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.

let nota1 = parseFloat(prompt("Digite a primeira nota do aluno:"));
let nota2 = parseFloat(prompt("Digite a segunda nota do aluno:"));
let nota3 = parseFloat(prompt("Digite a terceira nota do aluno:"));
let nota4 = parseFloat(prompt("Digite a quarta nota do aluno:"));

let media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 7 ){
    console.log("O aluno foi aprovado!")
}

else if (media >5 && media <7)
    console.log("O aluno está de recuperação.")

else{
    console.log("O aluno foi reprovado!")
}
