/**
 * Crie um array a partir de uma frase;
 * imprima cadas palavra do array no console por meio de for;
 */

const frase = "Ser um bom programador requer muita prática";

const arrFrase = frase.split(" ");

for(let i = 0; i < arrFrase.length; i++) {
  console.log(arrFrase[i]);
}

