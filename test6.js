
const prompt = require('prompt-sync')();
let num1 = +prompt("num 1 : ")
let num2 = +prompt("num 2  : ")
let  result = 1;

for (let i = 0; i < num2; i++) {
    
    result = result * num1
}
console.log("resultat : " ,result );