// Objeto

// como criar um objeto no javaScript?

let pessoa = {
    nome: 'Victor',
    idade: 33,
    altura: 1.76,
    estudando: true,
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa['nome'])
console.log(pessoa.idade)

// como adicionar um par chave-valor?

pessoa.olhos = 'preto'

console.log(pessoa)

// como remover um par chave-valor?

delete pessoa.olhos

console.log(pessoa)

// como percorrer?

for (let chave in pessoa) {
    console.log(chave)
}