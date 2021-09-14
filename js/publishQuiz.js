// Publish 
const questions = document.querySelector('.questions');
const quizName = document.querySelector('.quiz-name');
const publishBtn = document.querySelector('.header-tray-btn');
publishBtn.addEventListener('click', () => {
    // Ten cau hoi
    console.log(quizName.innerText);
    console.log()
    if (quizName.innerText == 'Question' || questions.innerHTML.replace(/\s/g, '') == '') {
        Swal.fire({
            icon: 'warning',
            title: 'Thông báo',
            text: 'Bạn chưa tạo câu hỏi hoặc chưa đặt tên cho quiz!',
            footer: '<p>Tên quiz không được để là Question</p>'
        })
    } else {

        const questionInput = document.querySelector('.question-input').dataset.answers;
        console.log(questionInput.split(','));
    }
})