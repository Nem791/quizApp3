const heartBtn = document.getElementById('heart-btn');
const shareBtn = document.getElementById('share-btn');

console.log(heartBtn);
console.log(shareBtn);

let userObject = JSON.parse(localStorage.getItem('tempUserInfo'));
let userSavedQuiz = db.collection("userQuizInfo").doc(userObject.email);
let id = window.location.search.split('=').pop();

heartBtn.addEventListener('click', () => {
    if (heartBtn.firstElementChild.classList.contains('far')) {

        // Tim <3 
        heartBtn.firstElementChild.classList.add('fas');
        heartBtn.firstElementChild.classList.remove('far');

        // Cong 1 
        heartBtn.lastElementChild.innerHTML = Number(heartBtn.lastElementChild.innerHTML) + 1;

        // Them vao yeu thich tren Firebase 
        userSavedQuiz.update({
            likedQuiz: firebase.firestore.FieldValue.arrayUnion(id),
        });
    } else {
        // Tim <3 
        heartBtn.firstElementChild.classList.add('far');
        heartBtn.firstElementChild.classList.remove('fas');

        // Tru 1 
        heartBtn.lastElementChild.innerHTML = Number(heartBtn.lastElementChild.innerHTML) - 1;

        // Xoa khoi yeu thich 
        userSavedQuiz.update({
            likedQuiz: firebase.firestore.FieldValue.arrayRemove(id)
        });
    }
})

function checkLikedQuiz() {
    var docRef = db.collection("userQuizInfo").doc(userObject.email);

    docRef.get().then((doc) => {
        if (doc.exists) {
            let likedArray = doc.data().likedQuiz;
            if (likedArray.includes(id)) {
                // Tim <3 
                heartBtn.firstElementChild.classList.add('fas');
                heartBtn.firstElementChild.classList.remove('far');
            }
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

export {checkLikedQuiz};








