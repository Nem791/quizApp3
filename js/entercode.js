import { inputText } from "../components/inputText.js";
import { URL_add_parameter } from "./suggestion.js";

const joinGameBtn = document.querySelector('.join-game-btn');

function printSt(code) {
    location.href = URL_add_parameter(location.href, 'id', code);
}

joinGameBtn.addEventListener('click', () => {
    inputText('Nhập code', 'Nhập code của bạn vào đây...', 'LOL', printSt);
})








