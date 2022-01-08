let getScore = localStorage.getItem("score");
console.log(getScore);
let scoreCard = document.getElementById("scoreCard");

let printScore = "Score : ";
printScore += getScore;

console.log(printScore);

scoreCard.innerText = printScore ;

document.getElementById("home").addEventListener("click" , function(){
    window.location.href = "index.html";
});

document.getElementById("restart").addEventListener("click" , function(){
    window.location.href = "game.html";
});