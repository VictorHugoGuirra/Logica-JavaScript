// >Arrays - Parte 2 - Métodos de Arrays

let arr1 = [30, 12, 45, 34, 29]
let arr2 = []

// Fatiamento: Slice

console.log(arr1.slice(0, 2))
console.log(arr1.slice(2))

// Adicionando elementos: push | unshift

console.log('Antes de adicionar:', arr2)

arr2.push(10, 20, 30)
arr2.push(40)

console.log('depois de adicionar:', arr2)

console.log('Antes de adicionar com unshift:', arr2)

arr2.unshift(0)

console.log('depois de adicionar com unshift:', arr2)

// Removendo Elementos: pop | shift

console.log('Antes de remover com o pop:', arr2)

const elementoRemovido = arr2.pop()

console.log('Depois de remover com o pop:', arr2)
console.log('O elemento removido foi:', elementoRemovido)

console.log('Antes de remover com o shift:', arr2)

arr2.shift()

console.log('Depois de remover com o shift:', arr2)

// Concatenando Arrays: Concat

console.log('arr1', arr1)
console.log('arr2', arr2)

console.log(arr1.concat(arr2))
console.log(arr2.concat(arr1))


// Buscando Elementos: indexOf | lastIndexOf

console.log(arr1)

let indice34 = arr1.indexOf(34)

console.log(indice34)


let arr3 = [1, 2, 3, 3, 5, 6, 3]

let indice3 = arr3.lastIndexOf(3)

console.log(indice3)


console.clear()
// Descobrindo a existencia de um elemento: includes

console.log(arr1)

console.log(arr1.includes(10))

// Invertendo arrays: reverse

console.log('arr1 normal:', arr1)

const arr1Invertido = arr1.reverse()

console.log('arr1 invertido:', arr1Invertido)