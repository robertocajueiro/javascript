let num = 17;
let divisoes = 0;

for(let i = 1; i <= num; i++){
  
  if(num % i == 0) {
    divisoes++;
  }
}

if(divisoes == 2){
  console.log(`O numero ${num} é primo`);
} else {
  console.log(`o número ${num} não é primo`)
}