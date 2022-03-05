let pessoa = {
    nome: "Roberto"
}

let pessoa2 = pessoa;

let pessoa3 = {
    nome: "Roberto"
}

console.log(pessoa2);
console.log(pessoa);

console.log(pessoa === pessoa2);
console.log(pessoa3 === pessoa);
console.log(pessoa3 === pessoa2);
