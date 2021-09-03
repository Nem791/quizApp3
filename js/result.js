function calculateScore() {
    let scoreArray = [];
    let submitScore = document.getElementById('submit-score');
    let questionOptions = document.querySelectorAll('.question-options');
    let resultTitle = document.querySelector('.result-title');

    submitScore.addEventListener('click', (evt) => {
        evt.preventDefault();
        questionOptions.forEach(element => {
            scoreArray.push(Number(element.dataset.point));

        })
        if (scoreArray.includes(undefined) || scoreArray.includes(NaN)) {
            scoreArray.length = 0;

            // Hien thong bao 
            Swal.fire({
                icon: 'warning',
                title: 'Thông báo',
                text: 'Bạn chưa làm hết các câu hỏi!'
            })

        } else {
            let sum = scoreArray.reduce((a, b) => a + b, 0);
            Swal.fire({
                icon: 'success',
                title: 'Submit thành công',
                text: `Số điểm của bạn là : ${sum}/${scoreArray.length}`
            })

            submitScore.hidden = true;
            resultTitle.innerText = `Số điểm của bạn là ${sum}/${scoreArray.length}. Bạn có thể bấm hiện đáp án để check lỗi sai.`;

            const radioBtns = document.querySelectorAll('.form-check-input');
            radioBtns.forEach(element => {
                element.disabled = true;
            })

            // Store data cho bộ câu hỏi 
            const quizNameText = document.querySelector('.quiz-name-text');
            const name = document.querySelector('.name').innerText;
            db.collection(quizNameText.innerText).add({
                username: name,
                score: sum
            })
                .then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });

        }
    })
}

export { calculateScore };
























