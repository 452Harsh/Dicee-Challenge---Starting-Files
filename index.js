if (window.performance.navigation.type === 1) {
    // if the page has been refreshed, call the rollDice() function.
   rollDice();
 }

 function rollDice() {
var randomNumber1 = Math.ceil(Math.random() * 6); //generating number 1-6
var randomDiceImage1 = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImageSource1 = "images/" + randomDiceImage1; //images/dice1.png-images/dice1.png-
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

var randomNumber2 = Math.ceil(Math.random() * 6);
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 win";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 win";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
 }