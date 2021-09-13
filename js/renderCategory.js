import { renderList } from "./showDoneQuiz.js";

renderList("savedQuiz");

const rightBarList = document.querySelectorAll(".right-bar-list");
rightBarList.forEach((element) => {
  element.addEventListener("click", () => {
    console.log(element.dataset.category);
    renderList(element.dataset.category);

    document.querySelector("#category").innerText = element.innerText;
  });
});

/// handle CLick show mobile
const colections = document.querySelector(".collections-container");
const showcolections = document.querySelector(".click-show");
showcolections.addEventListener("click", () => {
  showcolections.classList.toggle("fa-arrow-circle-right");
  colections.classList.toggle("active");
});
