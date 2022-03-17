/**
 * Adicione a propriedade janelas no ônibus, com valor de 20;
 * Delete a propriedade rodas;
 * imprima a propriedade no console;
 */

let onibus = {
  rodas: 8,
  qtdPassageiros: 40,
  portas: 2
}

delete onibus.rodas;

onibus.janelas = 20;

console.log(onibus);


