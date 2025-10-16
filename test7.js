const prompt = require ("prompt-sync")();
let somme =0;
for (let i = 1; i <= 10; i++) {
    
    let num=+prompt("entrer le "+i+" nombre  : ");
    if (num>0) {
        somme = somme+ num;
    }
  
     if (num < 0){ 
    console.log("Ignorer");
    continue;

}
}
console.log(somme);