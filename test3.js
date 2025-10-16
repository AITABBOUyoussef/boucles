const prompt = require("prompt-sync")();
let somme = 0 ;
let max = 0 ;
while(true){
let nb = +prompt("entre un nomber _0 pour arreter_ :") ;
if (nb === 0 ){
    break;
    }
   
    if (nb > 99 ) { 
  console.log ("Ce nombre est superieur a 100 et sera ingnore ");
  continue   
    }
somme = somme + nb ;
if (nb>max){
    max=nb ;
}
 if (nb < 0){ 
    console.log("EREUR");
    continue;
}  

}

console.log("somme des nombres : " , somme);
console.log("max des nombres : " , max );

     