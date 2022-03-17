/**
 * Crie um objeto calculadora;
 * Que tem os seguintes métodos: somar, subtrair, multiplicar e dividir;
 * Os métodos só devem aceitar dois parâmetros;
 * Utilize cada um dos métodos e imprima os valores no console;
 */

const Calculadora = {

  soma: function(a, b){
    return a + b;
  },

  subtrair: function(a, b){
    return a - b;
  },

  multiplicar: function(a, b){
    return a * b;
  },

  dividir: function(a, b){
    return a / b;
  }

}

console.log(Calculadora.soma(10,20));
console.log(Calculadora.subtrair(10,20));
console.log(Calculadora.multiplicar(10,20));
console.log(Calculadora.dividir(10,20));