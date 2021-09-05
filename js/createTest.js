import { Placeholder } from "../components/placeholder.js";
import { QuestionCard } from "../components/question-card.js";
import { calculateScore } from "./result.js";
import { showResults } from "./showResults.js";
import { renderSuggestion } from "./suggestion.js";

let questionList = document.getElementById('question-list');
let quizNameText = document.querySelector('.quiz-name-text');
let questionCount = document.getElementById('question-count');
let quizData = [];
function renderQuiz(quizId) {
    console.log(window.location);
    fetch('http://localhost:3000/quizzes')
        .then(response => {
            return response.json();
        })
        .then((data) => {
            // luu data vao 1 array 
            quizData = data;

            // Ten quiz va so luong cau hoi 
            quizNameText.innerText = data[quizId][0].questionTitle;
            questionCount.innerText = data[quizId].length;
            document.querySelector('.quiz-image-inner').firstElementChild.src = data[quizId][0].image;

            // Tao so cau hoi 
            for (let i = 0; i < data[quizId].length; i++) {
                const question = new QuestionCard();
                questionList.appendChild(question.render());
            }
        })
        .then(() => {
            // Set placeholder (loading) 
            let queryText = document.querySelectorAll('.query-text');
            queryText.forEach(element => {
                const placeholder = new Placeholder();
                element.appendChild(placeholder.render());
            })
        })
        .then(() => {
            // Render cau hoi 
            let queryText = document.querySelectorAll('.query-text');
            queryText.forEach((element, index) => {
                element.innerHTML = quizData[quizId][index].quiz;
            })

            let questionNum = document.querySelectorAll('.question-num');
            questionNum.forEach((element, index) => {
                element.innerHTML += quizData[quizId][index].quizNumber;
            })

            // Render 4 dap an 
            let questionOptions = document.querySelectorAll('.question-options');
            questionOptions.forEach((element, index) => {
                // element : container boc 4 dap an 

                element.childNodes.forEach((answer, answerIndex) => {

                    // answer : div boc dap an A, B, C hoac D 
                    answer.firstChild.setAttribute("name", quizData[quizId][index].quizNumber);

                    // Tinh diem dung sai 
                    answer.firstChild.addEventListener('click', () => {
                        if (answer.lastChild.innerText[0] == quizData[quizId][index].rightAnswer) {
                            element.dataset.point = 1;
                        } else {
                            element.dataset.point = 0;
                        }
                    })

                    answer.lastChild.innerHTML = quizData[quizId][index].answers[answerIndex];

                })
            })

        })
        .then(() => {
            calculateScore();
            showResults();
            renderSuggestion();
        })
        .catch(error => {
            console.log(error);
        })
}

// let id = localStorage.getItem("id");
// if (id) {
//     // let idLink = window.location.search.split("=").pop();
//     renderQuiz(JSON.parse(id));
//     // renderQuiz(idLink)
// } else {
//     renderQuiz('css');
//     // window.location.search += '&param=42';
//     console.log(window.location.search)
    
// }
let id = window.location.search.split('=').pop();
renderQuiz(id);


export { quizData, renderQuiz };






















