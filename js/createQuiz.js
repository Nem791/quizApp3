import { Question } from "../components/addQuestionCard.js";
import { inputText } from "../components/inputText.js";

const questions = document.querySelector('.questions');
console.log(questions);

let inputQuestion = document.getElementById('question');
let notifyError = document.querySelector('.error-notify');
let formInput = document.querySelectorAll('.form-option-input');
let checkRightAnswerBtn = document.querySelectorAll('.check-right-answer-button');
let count = 1;
let modalBody = document.querySelector('.modal_body');

function removeClass(params) {
    params.forEach(element => {
        element.classList.remove('active');
    })
}


checkRightAnswerBtn.forEach(element => {
    element.addEventListener('click', () => {
        removeClass(checkRightAnswerBtn);
        element.classList.add('active');
    })
})

const buttonSave = document.querySelector('.ad');
buttonSave.addEventListener('click', () => {
    let temp = 0;
    let activeBtn = document.querySelector('.active');
    formInput.forEach((element) => {
        if (element.value == '' || inputQuestion.value == '' || activeBtn == null) {
            temp = 1;
            notifyError.style.color = 'red';
            notifyError.innerText = 'Bạn đang để trống hoặc chưa chọn đáp án đúng';
            setTimeout(() => { notifyError.innerText = ''; }, 2000);
        }
    })

    if (temp == 0) {
        const newQuestion = new Question();
        const newQuestionRender = newQuestion.render();
        questions.appendChild(newQuestionRender);

        // Chua 4 dap an cho 1 cau 
        let tempOptionsArray = [];

        // Render input nguoi dung 
        // So cau 
        newQuestionRender.querySelector('.title').innerText = `Câu ${count}`;
        newQuestionRender.querySelector('.title').dataset.quizNumber = `Câu ${count}`;
        // Cau hoi 
        newQuestionRender.querySelector('.question-input').innerText = modalBody.querySelector('.form__input').value;
        newQuestionRender.querySelector('.question-input').dataset.quiz = modalBody.querySelector('.form__input').value;
        // Resest lai form 
        modalBody.querySelector('.form__input').value = '';
        // Dap an 
        let optionList = newQuestionRender.querySelectorAll('.option-text');
        let template = ['A', 'B', 'C', 'D'];
        optionList.forEach((element, index) => {
            // Set mau` cho cau hoi dung 
            element.previousElementSibling.style.backgroundColor = window.getComputedStyle(checkRightAnswerBtn[index]).backgroundColor;
            // Set 4 Dap an 
            element.innerText = `${template[index]}. ${formInput[index].value}`;

            tempOptionsArray.push(`${template[index]}. ${formInput[index].value}`);


            if (element.previousElementSibling.style.backgroundColor == 'rgb(154, 205, 50)') {
                newQuestionRender.querySelector('.question-input').dataset.rightAnswer = template[index];
            }
            // Resest lai form 
            formInput[index].value = '';
        })

        newQuestionRender.querySelector('.question-input').dataset.answers = tempOptionsArray;

        removeClass(checkRightAnswerBtn);
        count++;

        location.href = '#';

    } else {
        console.log("lol");

    }


})



// Doi ten quiz 

function changeQuizName(params) {
    document.querySelector('.name').innerText = params;
}

const quizName = document.querySelector('.quiz-name');
quizName.addEventListener('click', () => {
    inputText('text', 'Nhập tên quiz', 'Nhập tên quiz của bạn vào đây...', 'LOL', changeQuizName);
})




// Link image quiz 
const addImageBtn = document.getElementById('add-image');
addImageBtn.addEventListener('click', async () => {
    const { value: url } = await Swal.fire({
        input: 'url',
        inputLabel: 'Link ảnh quiz',
        inputPlaceholder: 'Paste link ảnh vào đây',
        footer: `<p id='auto-id' style='color: blue; cursor: pointer;' onclick="document.getElementById('swal2-input').value = 'https://startupbonsai.com/wp-content/uploads/2020/07/Best-Online-Quiz-Makers-Social.jpg'">Tạo link ảnh mặc định</p>`
    })



    if (url) {
        addImageBtn.style.backgroundImage = `url(${url})`;
        addImageBtn.dataset.image = url;
        addImageBtn.style.backgroundSize = 'cover';
        addImageBtn.innerHTML = '';
    }
})

















