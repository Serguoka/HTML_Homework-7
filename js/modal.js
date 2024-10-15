"use strict";

const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");
const modalOpen = document.querySelector(".banner__button");

modalOpen.addEventListener("click", () => {
  modal.classList.add("modal--is-open");
});

modalClose.addEventListener("click", () => {
  modal.classList.remove("modal--is-open");
});
