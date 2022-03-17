/**
 * Crie dois arrays, um com mais de 5 elementos e outro com menos ;
 * Faça uma função que verifica o número de elementos;
 * Se possur menos que 5, imprima "Poucos elementos" no console;
 * Se tiver mais, imprima "Muitos elementos"
 */

let nomes = ['Roberto', 'Lucas', 'Bob', 'Maria', 'João', 'Pedro'];
let testes = [ false, true, true];

function verficaQuantElementos(verifica){

if (verifica.length >= 5) {
  console.log("Muitos elementos");
  } else {
    console.log("Poucos elementos");
  }

}

verficaQuantElementos(nomes);
verficaQuantElementos(testes);


