const prompt = require('prompt-sync')();
// الكود كامل بدون دوال
const n = parseInt(prompt("N :"));

if (n > 0) {
    let current = 2;
    let output = "";
    
    for (let line = 0; line < n; line++) {
        
        // البحث عن العدد الأولي
        let foundPrime = false;
        while (!foundPrime) {
            let prime = true;
            
            if (current < 2) {
                prime = false;
            } else {
                for (let div = 2; div <= Math.sqrt(current); div++) {
                    if (current % div === 0) {
                        prime = false;
                        break;
                    }
                }
            }
            
            if (prime) {
                foundPrime = true;
            } else {
                current++;
            }
        }
        
        // المسافات
        for (let space = 0; space < n - line - 1; space++) {
            output += " ";
        }
        
        // النجوم
        for (let star = 0; star < current; star++) {
            output += "*";
        }
        
        output += "\n";
        current++;
    }
    
    console.log(output);
} else {
    console.log("positiv");
}