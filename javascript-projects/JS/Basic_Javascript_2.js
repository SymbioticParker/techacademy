function colorChange() {
    var textColor = document.getElementById("text-block").innerHTML;
    var textColor = textColor.fontcolor("Purple");
    textColor += " :D";
    document.getElementById("text-block").innerHTML = textColor;
}

function textChange() {
    var replaceText = "....taht lla dna muspI meroL";
    document.getElementById("text-block").innerHTML = replaceText;
}