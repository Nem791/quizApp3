// Function tinh diem 
function calculateScore() {
    var sec = 0;
    function pad(val) { return val > 9 ? val : "0" + val; }

    // Timer 
    let timer = setInterval(function () {
        // % 60 = het 60 reset 
        document.getElementById("seconds").innerHTML = pad(++sec % 60);
        // parseInt( string, radix) radix = 10 => lam` tron` he thap phan 
        document.getElementById("minutes").innerHTML = pad(parseInt(sec / 60, 10));
    }, 1000);

    let scoreArray = [];
    let resultObject = {};
    let submitScore = document.getElementById('submit-score');
    let questionOptions = document.querySelectorAll('.question-options');
    let resultTitle = document.querySelector('.result-title');

    submitScore.addEventListener('click', (evt) => {
        evt.preventDefault();
        questionOptions.forEach((element, index) => {
            scoreArray.push(Number(element.dataset.point));
            resultObject[index + 1] = element.dataset.result;

        })
        if (scoreArray.includes(undefined) || scoreArray.includes(NaN)) { // Neu chua lam het cau hoi
            scoreArray.length = 0;

            // Hien thong bao 
            Swal.fire({
                icon: 'warning',
                title: 'Thông báo',
                text: 'Bạn chưa làm hết các câu hỏi!'
            })

        } else { // Da lam het cau hoi
            // Dung timer 
            clearInterval(timer);
            // Bien de luu thoi gian 
            let innerTextTimer = document.querySelector('.timer');

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

            // Luu score 
            db.collection(quizNameText.innerText).add({
                username: name,
                score: sum,
                time: innerTextTimer.innerText,
                result: resultObject
            })
                .then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });

            let userObject = JSON.parse(localStorage.getItem('tempUserInfo'));
            let userSavedQuiz = db.collection("userQuizInfo").doc(userObject.email);

            // Atomically add a new id to the array field
            // Luu id quiz da lam` 
            let id = window.location.search.split('=').pop();

            userSavedQuiz.update({
                savedQuiz: firebase.firestore.FieldValue.arrayUnion(id),
                [id]: resultObject
            });
        }
    })
}

export { calculateScore };
























