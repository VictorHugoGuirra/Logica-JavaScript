// >Arrays

// -Como criar um arrays?

let arr = ['Victor', 33, 1.76, true];

console.log(arr)

// -Como acesar os elementos do arrays?

console.log('Primeiro elemento:', arr[0])
console.log('Segundo elemento:', arr[1])
console.log('Terceiro elemento:', arr[2])
console.log('Quarto elemento:', arr[3])

// -Como obter o tamanho do arrays?

console.log('Tamanho do array:', arr.length)

// -Percorrendo arrays?

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

for (let elemento of arr) {
    console.log(elemento)
}

for (let indice in arr) {
    console.log(indice)
}

for (let indice in arr) {
    console.log(indice, arr[indice])
}