var num1 = parseInt(prompt("Enter first Value"));
var num2 = parseInt(prompt("Enter second value"));
var operation = prompt("Enter your operation which you want +, -, *, /, %");


if(operation == "+"){
    alert(num1 + " + " + num2 + " = " + " " + (num1 + num2));
}
else if(operation == "-"){
    alert(num1 + " - " + num2 + " = " + " " + (num2 - num1));
}
else if(operation == "*"){
    alert(num1 + " * " + num2 + " = " + " " + num1 * num2 );
}
else if(operation == "/"){
    alert(num1 + " / " + num2 + " = " + " " + num1 / num2 );
}
else if(operation == "%"){
    alert(num1 + " % " + num2 + " = " + " " + num1 % num2 );
}
else{
    alert("Enter your Valid Operation")
}
