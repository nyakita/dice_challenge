var randNumber = Math.floor(Math.random() * 6 + 1 ); // Number from 1 till 6

var randomDice = "dice" + randNumber + ".png";

var randImage = "images/" + randomDice;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randImage); /// Finish

var randNumber2 = Math.floor(Math.random() * 6 + 1);

var randomDice2 = "images/dice" + randNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDice2)



if(randNumber > randNumber2){
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
} else if(randNumber < randNumber2){
  document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
}else{
  document.querySelector("h1").innerHTML = "Draw!";
}
