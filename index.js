function makeRandomNumber(){
    return Math.floor(Math.random()*6 + 1);
}

var randomNumber1 = makeRandomNumber();
var randomNumber2 = makeRandomNumber();
console.log("" + randomNumber1 + ", " + randomNumber2);

document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

var newTitle = "Draw!";

if(randomNumber1>randomNumber2) {newTitle = "Player 1 Wins!";}
else if (randomNumber2 > randomNumber1) {newTitle = "Player 2 Wins!";}

console.log(newTitle);

document.querySelector("h1").innerText = newTitle;