function Cachorro(raca,patas,cor) {
  this.raca = raca;
  this.patas = patas;
  this.cor = cor;
  this.uivar = function(){
    console.log("auuuuuu");
  }
}

let viralata = new Cachorro('Viralata', 4, 'cinza');

  viralata.uivar();

  console.log(viralata);

