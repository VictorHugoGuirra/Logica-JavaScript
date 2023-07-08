// >Funções


//definição da função
function saudacao() {
    console.log('Seja bem vindo(a) ao curso de javascript!')
}

saudacao()
saudacao()
saudacao()
saudacao()
saudacao()

// Como enviar parametros para as funções?

function saudacao(nome, curso, saudar='Olá') {
    console.log(`${saudar}, seja bem vindo ${nome} ao curso de ${curso}!`)
}

saudacao('Victor', 'JavaScript')

console.clear()

// Retorno da Função

function soma(num1, num2) {
    return num1 + num2  //depois do retorn acaba a função
}

const resultado = soma(22, 23)

console.log(resultado)


function maiorD0Que50(num) {
    if (num > 50){
        return true
    }

    return false
}

const idade = maiorD0Que50(49)

console.log(idade)