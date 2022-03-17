function Cachorro(raca,patas,cor) {
  this.raca = raca;
  this.patas = patas;
  this.cor = cor;
}

Cachorro.prototype.uivar = function() {
  console.log("Auuuuu");
}

Cachorro.prototype.latir = function() {
  console.log("au au");
}

let viralata = new Cachorro('Viralata', 4, 'cinza');

  viralata.uivar();
  viralata.latir();

