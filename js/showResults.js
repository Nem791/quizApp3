import { quizData } from "./createTest.js";

function showResults() {
    let showAnswersBtn = document.querySelector('.show-answers-btn');
    showAnswersBtn.addEventListener('click', () => {
        const answerList = [];
        let id = window.location.search.split('=').pop();
        quizData[id].forEach(element => {
            answerList.push(element.rightAnswer);
        });
        if (document.getElementById('submit-score').hidden == false) {

            // Hien thong bao 
            Swal.fire({
                icon: 'warning',
                title: 'Thông báo',
                text: 'Bạn phải submit!',
                // footer: '<a href="">Why do I have this issue?</a>'
            })

        } else {

            // An dap an 
            if (showAnswersBtn.dataset.temp) {
                showAnswersBtn.removeAttribute('data-temp');
                showAnswersBtn.lastElementChild.innerText = 'SHOW ANSWERS';

                const formCheckLabel = document.querySelectorAll('.form-check-label');
                formCheckLabel.forEach(element => {
                    element.style.fontWeight = 'normal';
                    element.style.backgroundColor = 'white';
                });

            } else {
                // Hien dap an 
                showAnswersBtn.dataset.temp = 'shown';
                showAnswersBtn.lastElementChild.innerText = 'HIDE ANSWERS';

                let questionOptions = document.querySelectorAll('.question-options');

                // Highlight dap an 
                questionOptions.forEach((element, index) => {
                    const answersContainer = element.querySelectorAll('.form-check-label');
                    answersContainer.forEach(formCheckLabel => {
                        if (formCheckLabel.innerText[0] == answerList[index]) {
                            formCheckLabel.style.fontWeight = 'bold';
                            formCheckLabel.style.backgroundColor = '#73E80C';
                            formCheckLabel.style.opacity = '0.7';
                        }
                    })
                });
            }
        }
    })
}

export { showResults };









