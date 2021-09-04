import { tableBodyList } from "../components/tableBodyList.js";

const dropdownContent = document.querySelector('.dropdown-content');

function createATag(quizName) {
    const aTag = document.createElement('a');
    aTag.innerText = quizName;
    aTag.style.cursor = 'pointer';
    return aTag;
}

fetch('http://localhost:3000/quizzes')
    .then(response => {
        return response.json();
    })
    .then((data) => {
        for (let index = 0; index < Object.keys(data).length; index++) {
            let quizId = Object.keys(data)[index];
            dropdownContent.appendChild(createATag(data[quizId][0].questionTitle));
        }
    })




