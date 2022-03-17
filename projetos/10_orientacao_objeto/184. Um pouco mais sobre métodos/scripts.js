const cachorro = {
  raca: 'SRD',  //sem raça definida
  uivar: function(){
    console.log("Auuuuuuu");
  },
  rosnar: function(){
    console.log("grrrrrrrrr");
  },

  setRaca: function(raca){
    this.raca = raca;
  },
  getRaca: function(){
    return "A raça é " + this.raca;
  }
}

console.log(cachorro.raca);

cachorro.setRaca("Pastor Alemão");

console.log(cachorro.raca);

console.log(cachorro.getRaca());