function doMaths() {
    var Maths = 6 * 7;
    document.getElementById("Math").innerHTML = "What's 6 x 7? " + Maths + "?";
    document.getElementById("whatsMath").innerHTML = "OR the answer to Life, Universe, and EVERYTHING!";
}

function doSubMaths() {
    var subMaths = (7 % 6) - 10;
    subMaths--;
    var rando = Math.round(Math.random() * 10);
    document.getElementById("whatsMath2").innerHTML = -subMaths * rando;
}