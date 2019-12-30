var text = prompt("Enter any text which you want reverse");

reverse(text);

function reverse(text) {
    text = text.split(' ');

    for(var i = 0; i<text.length; i++){
        text[i] = text[i][0].toUpperCase() + text[i].substr(1);
    }

    console.log(text.join(' '));
}
