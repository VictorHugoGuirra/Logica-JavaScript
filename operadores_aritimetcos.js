// >Operadores Aritmeticos

let numero1 = 20;
let numero2 = 2;
let primeiroNumero = 54;
let segundoNumero = 46;

//adição:           +
//subtração:        -
//multiplicação:    *
//divisão:          /
//exponenciação:    **
//resto da divisão: %

const soma = primeiroNumero + segundoNumero  //outra maneira de fazer
console.log(soma)


console.log('Soma =', numero1 + numero2)
console.log('Subtração =', numero1 - numero2)
console.log('Multiplicação =', numero1 * numero2)
console.log('Divisão =', numero1 / numero2)
console.log('Exponenciação =', numero1 ** numero2)
console.log('Resto da Divisão =', numero1 % numero2)

//Precedência de Operadores

console.log(3 + 7 * 3)  //as ordens dos fatores tambem alteram o resultado aqui
console.log((3 + 7) * 3)
console.log((3 + 7 + 10) / 3)

//Biblioteca Math

console.log(Math.PI)
console.log(Math.sqrt(16))