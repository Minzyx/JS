// 4. Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

let num = parseInt(prompt("Digite um número para saber sua tabuada!"))

if (!isNaN(num)){
    
    for(let contador = 1; contador <= 10; contador++) {
        console.log(num + " x " + contador + " = " + (num * contador));
        
    }

}else{
    console.log ("Fazendo o favor, digite corretamente >:( ")
}

