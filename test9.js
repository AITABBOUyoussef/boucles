const prompt = require("prompt-sync")();
console.log("Entrez un nombre");
 let n = Number(prompt());
let v = " " ;
 outer : for(let i=0 ;i<=n ;i++){
    for(let j=i+1; j<=n; j++){
        v = v + "*" ;
         console.log(v);
        continue outer ;
        
    }

 }
