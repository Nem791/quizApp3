import { renderList } from "./showDoneQuiz.js";

renderList('savedQuiz');

const rightBarList = document.querySelectorAll('.right-bar-list');
rightBarList.forEach(element => {
    element.addEventListener('click', () => {
        console.log(element.dataset.category);
        renderList(element.dataset.category);

        document.querySelector('#category').innerText = element.innerText;
    })
})