import { Placeholder } from "../components/placeholder.js";
import { QuestionCard } from "../components/question-card.js";
import { checkLogin } from "./checkUserLogin.js";
import { checkSavedQuiz, getInfoSavedQuiz } from "./checkUserSavedQuiz.js";
import { checkLikedQuiz } from "./likeAndShare.js";
import { calculateScore } from "./result.js";
import { showResults } from "./showResults.js";
import { renderSuggestion } from "./suggestion.js";

let questionList = document.getElementById('question-list');
let quizNameText = document.querySelector('.quiz-name-text');
let questionCount = document.getElementById('question-count');
let quizData = [];


function renderQuiz(quizId, promise) {
    console.log(window.location);
    return promise()
        .then((data) => {
            if (Object.keys(data).includes('html')) {

                // luu data vao 1 array 
                quizData = data;

            } else {
                quizData = data.data();
                document.querySelector('.username-text').innerText = quizData.displayName;
            }

            // Ten quiz va so luong cau hoi 
            quizNameText.innerText = quizData[quizId][0].questionTitle;
            questionCount.innerText = quizData[quizId].length;
            document.querySelector('.quiz-image-inner').firstElementChild.src = quizData[quizId][0].image;

            // Tao so cau hoi 
            for (let i = 0; i < quizData[quizId].length; i++) {
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
            Swal.fire({
                title: 'Thông báo!',
                text: "Khi bấm bắt đầu, sẽ tính thời gian làm quiz. Nếu chưa đăng nhập sẽ không xem được quiz!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Bắt đầu'
            }).then((result) => {
                if (result.isConfirmed) {
                    calculateScore();
                    showResults();
                    renderSuggestion();
                    checkLogin();
                    checkLikedQuiz();
                    getInfoSavedQuiz();
                }
            })

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
let APIArray = ['html', 'css', 'java', 'javascript', 'python', 'sql', 'javascriptnc', 'C', 'code', 'networkingbasic'];
function promiseFetchAPI() {
    return fetch('https://apiquizizz.herokuapp.com/quizzes')
        .then(response => {
            return response.json();
        })
}

let docRef = db.collection("userCreatedQuiz").doc(JSON.parse(localStorage.getItem('tempUserInfo')).email);
function promiseGetFirebaseData() {
    return docRef.get();
}


if (APIArray.includes(id)) {
    renderQuiz(id, promiseFetchAPI);
} else {
    renderQuiz(id, promiseGetFirebaseData);
}




docRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

export { quizData, renderQuiz };






















