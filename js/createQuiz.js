import { Question } from "../components/addQuestionCard.js";

const questions = document.querySelector('.questions');
console.log(questions)
for (let i = 0; i < 4; i++) {
    const newQuestion = new Question();
    questions.appendChild(newQuestion.render());
}























