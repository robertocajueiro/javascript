function checarTamanhoTexto(texto){
  if(texto.length > 10) {
    console.log("Texto muito longo!");
  } else {
    console.log("Texto dentro do limite")
  }
  console.log(texto.length);
}

console.log(checarTamanhoTexto("teste"));
console.log(checarTamanhoTexto("Vamos testar se funciona"));
console.log(checarTamanhoTexto("10"));


