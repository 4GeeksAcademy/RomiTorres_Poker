/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function aleatorioSuit() {
    let suit = ["♦", "♥", "♠", "♣"];
    let aleatorioPalos = Math.floor(Math.random() * suit.length);

    return suit[aleatorioPalos];
  }

  function aleatorioNumber() {
    let number = [
      "A",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let aleatoriosNumeros = Math.floor(Math.random() * number.length);
    return number[aleatoriosNumeros];
  }

  let resultSuit = aleatorioSuit();

  let suitCard = document.querySelectorAll(".suit");
  suitCard.forEach(item => {
    item.innerHTML = resultSuit;
  });

  let resultNumber = aleatorioNumber();

  let numberCard = document.querySelector(".number");
  numberCard.innerHTML = resultNumber;
  console.log(aleatorioSuit());
  console.log(aleatorioNumber());
  console.log("Hello Rigo from the console!");
};
