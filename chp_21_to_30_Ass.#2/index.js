var inputValue = prompt('Enter any text');

inputValue = inputValue.split(" ");
alert(inputValue);

for (var i = 0; i < inputValue.length; i++) {
    inputValue[i] = inputValue[i][0].toUpperCase() + inputValue[i].substr(1);

}
alert(inputValue.join(" "));
