const inputString = "Baku";
let explodedString = "";

for (let i = 0; i < inputString.length; i++) {
    for (let j = 0; j <= i; j++) {
        explodedString += inputString[j];
    }
}

console.log(explodedString);
