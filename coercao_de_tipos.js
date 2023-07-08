// >Coerção (conversão) de tipos

// -Coerção Explícita(manual)
const numero = 10;
console.log(numero, typeof numero)


const numeroEMFormtoDeString = String(numero);  //converte para string
console.log(numeroEMFormtoDeString, typeof numeroEMFormtoDeString)

console.log(Number('123456'))         //converte para número
console.log(parseFloat('12345.123'))  //converte para décimal
console.log(parseInt('12345.123'))    //converte de décimal para inteiro
console.log(Boolean(13423))          //converte qualquer número para booleano 0 false =! 0 true

console.clear()

// -Coerção Implícita(automática)

console.log(10 + '1')
console.log(10 - '1')
console.log(10 * '3')
console.log(10 / '2')
console.log(10 - 'nosnsops')

console.clear()

// Qual séra a saída de código?

let n = 1 + '1';

n = n - 1;

console.log(n);

// Qual séra a saída de código?

console.log(2 + 3 + 4 + '5');

// Qual séra a saída de código?

console.log('5' + 2 + 3 + 4);

// Qual séra a saída de código?

console.log('10' - '4' - '3' - 2 + '5');