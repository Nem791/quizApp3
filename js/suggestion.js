import { quizData, renderQuiz } from "./createTest.js";

function URL_add_parameter(url, param, value) {
    var hash = {};
    var parser = document.createElement('a');

    parser.href = url;

    var parameters = parser.search.split(/\?|&/);

    for (var i = 0; i < parameters.length; i++) {
        if (!parameters[i])
            continue;

        var ary = parameters[i].split('=');
        hash[ary[0]] = ary[1];
    }

    hash[param] = value;

    var list = [];
    Object.keys(hash).forEach(function (key) {
        list.push(key + '=' + hash[key]);
    });

    parser.search = '?' + list.join('&');
    return parser.href;
}

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



export { renderSuggestion, URL_add_parameter };






