"use strict";

const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");
const modalOpen = document.querySelector(".banner__button");
const form = document.querySelector(".form");
const submitBtn = form.querySelector("button");

modalOpen.addEventListener("click", () => {
  modal.classList.add("modal--is-open");
});

modalClose.addEventListener("click", () => {
  modal.classList.remove("modal--is-open");
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "http://127.0.0.1:5500/portfolio.html";
});
