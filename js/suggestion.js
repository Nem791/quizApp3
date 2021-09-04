import { URL_add_parameter } from "../components/url_add_parameter.js";
import { quizData, renderQuiz } from "./createTest.js";

function renderSuggestion() {
    const quizItemList = document.querySelectorAll('.quiz-item');
    const quizList = Object.keys(quizData);
    console.log(quizList);
    quizItemList.forEach((element, index) => {
        element.firstElementChild.style.backgroundImage = `url(${quizData[quizList[index]][0].image})`;
        element.querySelector('.quiz-title').innerText = quizData[quizList[index]][0].questionTitle;
        element.querySelector('.quiz-num-questions').innerText = quizData[quizList[index]].length + ' questions';
        element.dataset.id = quizList[index];

        element.addEventListener('click', (evt) => {
            evt.preventDefault();
            localStorage.setItem("id", JSON.stringify(element.dataset.id));
            // window.location.search += `&id=${(element.dataset.id)}`;
            location.href = URL_add_parameter(location.href, 'id', element.dataset.id);
        })
    })

}



export { renderSuggestion };






