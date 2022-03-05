let pessoa = {
    "nome": "Roberto",
    "idade": 39,
    "profissão": "Programador",
    "hobbies": ["Toca violão", "jogar video game", "Andar de bike"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);


let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);

console.log(pessoaJSON.hobbies[0]);


