// Fazer um menu de exercícios utilizando o exemplo dado em aula.
// Criar um menu onde é possível executar 6 dos exercícios anteriores.
// Cada exercicio deve ser encapsulado em uma função, e o menu deve executar essas funções
// O usuário poderá escolher qual exercício ele quer executar.

// O usuário deverá digitar 0 para sair do menu.




function soma() {
    let a = 1
    let b = 0

    while (a <= 100) {
        b += a++


    }

    console.log("A soma de todos os números de 1 a 100 é: " + b);
}

function tabuada() {
    let num = parseInt(prompt("Digite um número para saber sua tabuada!"))

    if (!isNaN(num)) {

        for (let contador = 1; contador <= 10; contador++) {
            console.log(num + " x " + contador + " = " + (num * contador));

        }

    }

}

function contador() {
    for (let cont = 10; cont >= 1; cont--) {
        console.log(cont);

    }
}

function contagem() {
    let num = parseInt(prompt("Insira um número"));

    while (num >= 0) {
        console.log(num);

        num--;


    }

    console.log("Contagem regressiva finalizada!")
}

function idade() {
    let idade = 0
    while (idade < 18) {
        idade = parseInt(prompt("Insira sua idade:"))
        if (idade < 18) {
            console.log("Você é menor de idade, digte novamente.");
        }
    }

    console.log("Você é maior de idade!")
}

function parouimpar() {
    let num = parseInt(prompt("Digite um número inteiro para saber se ele é impar ou par!"))
    if (num % 2 == 0) {
        console.log("Esse número é par!")
    } else {
        console.log("Esse número é ímpar!")
    }

}


    let opcao = 1
while (opcao != 0) {
    opcao = parseInt(prompt("Escolha uma opção: \n1 - Soma de todos os números de 1 a 100 \n2 - Contador de 1 a 10\n3 - Tabuada \n4- Contagem Regressiva \n5- Maior ou menor de idade \n6- Par ou Impar"))
    switch (opcao) {
        case 1:
            soma()
            break;

        case 2:
            contador()
            break;

        case 3:
            tabuada()
            break;

        case 4:
            contagem()
            break;

        case 5:
            idade()
            break;

        case 6:
            parouimpar()
            break;


        default:
            break;
    }

}
