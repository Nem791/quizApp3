import { inputText } from "../components/inputText.js";
import { loading } from "../components/loading.js";

const reportBtn = document.getElementById('report-btn');

function afterText(submitForm) {
    loading('Thông báo', 'Đang lưu lại report của bạn');
    console.log(submitForm);
    const name = document.querySelector('.name').innerText;
    const quizNameText = document.querySelector('.quiz-name-text').innerText;

    db.collection("reportQuiz").add({
        username: name,
        quiz: quizNameText,
        report: submitForm
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}

reportBtn.addEventListener('click', async (evt) => {
    evt.preventDefault();
    inputText('textarea', 'Report', 'Lỗi ở câu này, lỗi đáp án....', 'LOL', afterText);

})

