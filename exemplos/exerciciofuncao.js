// Fazer um menu de exercícios utilizando o exemplo dado em aula.
// Criar um menu onde é possível executar 6 dos exercícios anteriores.
// Cada exercicio deve ser encapsulado em uma função, e o menu deve executar essas funções
// O usuário poderá escolher qual exercício ele quer executar.

// O usuário deverá digitar 0 para sair do menu.

let opcao = prompt("Escolha uma opção: \n1 - Exemplo Hello World \n2 - Exemplo Repeticao\n3 - Tabuada")


function exemploRepeticao(){
    let opcaoMenu = prompt("EXERCICIO DE REPETICAO\nDigite uma opção\nDigite 0 para sair")
    
    while (opcaoMenu != "0"){
        console.log("Repetiiiuu")
        
        opcaoMenu = prompt ("R: Digite em uma opção\nDigite 0 para sair: ")
    }
    
    console.log("Saaiuuuu")
}

function tabuada(){
    let num = parseInt(prompt("Digite um número para saber sua tabuada!"))

if (!isNaN(num)){
    
    for(let contador = 1; contador <= 10; contador++) {
        console.log(num + " x " + contador + " = " + (num * contador));
        
    }

}
    
    
}



switch (opcao) {
    case "1":
        console.log("Hello World");
        break;

    case "2":
      exemploRepeticao()
      break;

    case "3":
      tabuada()
      break;


    default:
        break;
}


