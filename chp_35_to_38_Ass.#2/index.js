var value = parseInt(prompt("Enter any number which you want Factorialize"));
var factor = 1;

for(var i = 1; i <= value; i++){
    factor = factor * i;
}
console.log("Your " + value + " factor is = " + factor);
