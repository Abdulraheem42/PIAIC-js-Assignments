var num = prompt("Enter any number");

num = Math.ceil(num);

var text = prompt("Enter any text you want to Reverse");
text = text.slice(0, num);

var reverse_text = '';
for(var i = text.length - 1; i >= 0; i--) {
    reverse_text += text[i]
}

alert(reverse_text);
