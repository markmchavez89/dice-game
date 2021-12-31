let randomNumber1 = Math.floor(Math.random() * 6 + 1); //Random Number 1-6
let randomDiceImage = "dice" + randomNumber1 + ".png"; //Dice Image dice1.png-dice6.png
let randomImageSource = "images/" + randomDiceImage; //images/dice1.png-dice6.png
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

let randomNumber2 = Math.floor(Math.random() * 6 + 1);
let randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
} else if(randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
} else if(randomNumber1 === randomNumber2) {
  document.querySelector("h1").textContent = "Draw!";
}
