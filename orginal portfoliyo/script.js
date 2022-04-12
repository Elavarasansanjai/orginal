"use strict";

const menubuttan = document.querySelector(".menubottan");
const returnbuttan = document.querySelector(".uls");
const links = document.querySelectorAll(".link");
const close = document.querySelector(".int");
const whole = document.querySelector(".whole");
menubuttan.addEventListener("click", function () {
  returnbuttan.classList.remove("i");
  whole.classList.add("overlay");
  returnbuttan.style.color = "white";
});

close.addEventListener("click", () => {
  returnbuttan.classList.add("i");
  whole.classList.remove("overlay");
});
document.querySelector(".whole").addEventListener("click", () => {
  returnbuttan.classList.add("i");
  whole.classList.remove("overlay");
});
