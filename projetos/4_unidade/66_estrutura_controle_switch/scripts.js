let nome = "Roberto";

switch(nome){
  case  "João":
    console.log("Seu nome é João!");
    break;
  case "Maria":
    console.log("Seu nome é Maria!");
    break;
  default:
    console.log(`Seu nome não é João e nem Maria! é ${nome}`)
}

if(nome == "Roberto"){
  console.log("O nome é Roberto")
} else {
  console.log("Nome não foi encontrado")
}