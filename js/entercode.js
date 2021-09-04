import { inputText } from "../components/inputText.js";
import { URL_add_parameter } from "../components/url_add_parameter.js";

const joinGameBtn = document.querySelector('.join-game-btn');

function printSt(code) {
    location.href = URL_add_parameter('./quizPage.html', 'id', code);
}

joinGameBtn.addEventListener('click', () => {
    inputText('text', 'Nhập code', 'Nhập code của bạn vào đây...', 'LOL', printSt);
})








