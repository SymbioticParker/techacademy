function checkVote() {
    var yourAge, canVote;
    yourAge = document.getElementById("your_age").value;
    canVote = (yourAge < 18) ? "You are not":"You are";
    document.getElementById("voteStatus").innerHTML = canVote + " old enough to vote.";
}

function Voter(Age, City, State, Party) {
    this.Voter_Age = Age;
    this.Voter_City = City;
    this.Voter_State = State;
    this.Voter_Party = Party;
}

var Peter = new Voter(18, "Portland", "Oregon", "Libertarian");

function voterInfo() {
    document.getElementById("votersInfo").innerHTML = "Peter is an <span id=\"voter_Age\">" + Peter.Voter_Age + "</span> year old from " + Peter.Voter_City + ", " + Peter.Voter_State + " and is a part of the " + Peter.Voter_Party + " party.";
}

function counting() {
    document.getElementById("voter_Age").innerHTML = count();
    function count() {
        Peter.Voter_Age++
        return Peter.Voter_Age;
    }
}