// >Operadores Booleanos

//igualdade:            == (ou ===)
//desigualdade:         != (ou !==)
//maior que:            >
//maior ou igual que:   >=
//menos que:            <
//menor ou igual que:   <=

const numero = 10;

console.log(numero == 10)
console.log(numero === '10')
console.log(numero != 11)
console.log(numero !== "10")
console.log(numero > 20)
console.log(numero >= 12)
console.log(numero < 20)
console.log(numero <= 10)

//console.clear()  // limpa tudo no console antes

// Conjunções Lógicas

//and => &&

let idade = 18;
let tenhoCNH = true;

const possoDirigir = idade >= 18 && tenhoCNH === true;

console.log(possoDirigir)

//or => ||

idade = 40;

const votoFacultativo = idade < 18 || idade >= 70;

console.log(votoFacultativo)


//not => |

const estouGostandodocurso = false;

console.log(!estouGostandodocurso)