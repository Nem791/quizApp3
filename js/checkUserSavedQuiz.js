let tempInfo = localStorage.getItem('tempUserInfo');

let docRef = db.collection("userQuizInfo").doc(JSON.parse(tempInfo).email);

function getInfoSavedQuiz() {
    docRef.get().then((doc) => {
        if (doc.exists) {
            let saved = doc.data().savedQuiz;
            let id = window.location.search.split('=').pop();

            // Kiem tra neu nguoi dung da lam` quiz nay` roi` 
            if (saved.includes(id)) {
                let savedResult = doc.data()[id];
                savedResult = Object.values(savedResult);
                let questionOption = document.querySelectorAll('.question-options');
                
    
                savedResult.forEach((element, index) => {
                    questionOption[index].childNodes.forEach(formCheck => {
                        if(formCheck.lastElementChild.innerText[0] == element) {
                            formCheck.firstElementChild.click();
                        }
                    })
                })
                checkSavedQuiz();
            }
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}


function checkSavedQuiz() {
    if (tempInfo) {
        Swal.fire({
            icon: 'warning',
            title: 'Thông báo',
            text: 'Bạn đã hoàn thành quiz này!',
        })

        const radioBtns = document.querySelectorAll('.form-check-input');
        radioBtns.forEach(element => {
            element.disabled = true;
        })
        const timer = document.querySelector('.timer');
        timer.hidden = true;
    }
}

export { getInfoSavedQuiz, checkSavedQuiz };
















