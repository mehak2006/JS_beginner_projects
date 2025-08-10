let scores = { team1: 0, team2: 0 };

let countEl1 = document.getElementById("team_one");
let countEl2 = document.getElementById("team_two");

function addPoints(team, points) {
    scores[team] += points;

    if (team === "team1") {
        countEl1.textContent = scores.team1;
    } else {
        countEl2.textContent = scores.team2;
    }
}
function newGame(){
    scores.team1 = 0;
    scores.team2 = 0;
    countEl1.textContent = scores.team1;
    countEl2.textContent = scores.team2;
}