const prompt = require("prompt-sync")();
const prem = +prompt("saisir un nombre : ");
let div = 2;
while( prem >= div || prem == 1 || prem == 0 ){

    if( prem == 1 || prem == 0 ){
        console.log("le nombre",prem,"n'est pas un nombre premier");
        break;
    }else if(prem%div == 0) {
   console.log("le nombre",prem,"n'est un nombre premier"); 
   break;    
    }else{
        console.log("le nombre",prem,"est un nombre premier");
    }
    div++;
     break;   
}
