const prompt = require('prompt-sync')();
let n = +prompt("Entrer un nomber n : ");

  outer : for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      continue outer ; 
    }
  }
  console.log(i);
}