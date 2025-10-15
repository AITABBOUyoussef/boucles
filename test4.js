const prompt = require('prompt-sync')();
let n = prompt('Enter a number : ');
let r = n.toString().split('');
let i = r.length-1;
let b = [];
while(i>=0){
    b=b+r[i];
    i--;
}
console.log(b);