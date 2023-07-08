// >Laçoes Condicionais

const input = require('readline-sync')

const numeroSorteado = 5;

let numero = Number(input.question('Qual numero voce escolhe? '));

while (numero !== numeroSorteado) {
    console.log('Vc errou o numero. tente novamente!!!')
    numero = Number(input.question('Qual numero voce escolhe? '))
}

console.log('Parabens vc acertou!!!')