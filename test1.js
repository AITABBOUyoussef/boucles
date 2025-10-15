const prompt = require("prompt-sync")();
let nbr = prompt("Enter a number :");
let i=1;
while(i<=10){
    console.log(nbr,"x",i,"=",nbr*i)
    i++;
}