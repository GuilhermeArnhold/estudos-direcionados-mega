"use strict";
const maxNumber = 20;
let secretNumber = Math.trunc(Math.random() * maxNumber) + 1;
let score = 20;
let input = document.querySelector(".guess");

let checkFunction = function () {
  const guess = Number(input.value);

  if (!guess && guess > 0) {
    document.querySelector(".message").textContent = "Insira um número!";
  } else if (guess == secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "Você acertou!";
    if (score > highscore) {
      document.querySelector(".highscore").textContent = score;
    }
    document.querySelector("body").style.backgroundColor = "blue";
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Muito alto!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Você perdeu!";
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Muito baixo!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Você perdeu!";
    }
  }
};

input.addEventListener("keypress", (evt) => {
  if (evt.charCode == 13) {
    checkFunction();
    return false;
  }
  let regex = /[\d]/g;
  let fullNumber = Number(`${input.value}${evt.key}`);
  if (!regex.test(evt.key) || input.value.length >= 2 || fullNumber > maxNumber)
    evt.preventDefault();
});

let againFunction = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * maxNumber) + 1;
  document.querySelector(".message").textContent = "Tente adivinhar...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = " ";
  document.querySelector(".highscore").textContent = 0;
  document.querySelector("body").style.backgroundColor = "#222";
};

document.querySelector(".check").addEventListener("click", checkFunction);
document.querySelector(".again").addEventListener("click", againFunction);
