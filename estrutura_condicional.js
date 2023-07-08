// >Estruturas Condicionais

const idade = 20;

if (idade >= 18){
    console.log('Você é maior de idade!')
} else {
    console.log('Você é menor de idade!')
};

//se média >= 7, Aprovado!
//se média < 7 e >= 5, Recuperação!
//se média < 5, Reprovado!

console.clear()

let media = 9;

if (media >= 7){
    console.log('Aprovado!')
} else if(media < 7 && media >= 5){    //(media < 7 &&) => não é necessario porque a condiçãofica redundante
    console.log('Recuperação!')
} else{
    console.log('Reprovado!')
}