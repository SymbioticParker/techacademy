function get_Date() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "Good Morning!";
    }
    else if (Time >= 12 == Time < 17) {
        Reply = "Good Afternoon!";
    }
    else if (Time >= 17 == Time < 20) {
        Reply = "Good Evening!";
    }
    else {
        Reply = "Good Night!";
    }
    document.getElementById("text-block").innerHTML = Reply;
}

function ageFunction() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are NOT old enough to vote!";
    }
    document.getElementById("text-block-2").innerHTML = Vote;
}