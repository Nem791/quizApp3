const heartBtn = document.getElementById("heart-btn");
const shareBtn = document.getElementById("share-btn");

console.log(heartBtn);
console.log(shareBtn);

let userObject = JSON.parse(localStorage.getItem("tempUserInfo"));
let userSavedQuiz = db.collection("userQuizInfo").doc(userObject.email);
let id = window.location.search.split("=").pop();
var likes = db.collection("countLikes").doc("count");

heartBtn.addEventListener("click", () => {
  if (heartBtn.firstElementChild.classList.contains("far")) {
    // Tim <3
    heartBtn.firstElementChild.classList.add("fas");
    heartBtn.firstElementChild.classList.remove("far");

    // Cong 1
    heartBtn.lastElementChild.innerHTML =
      Number(heartBtn.lastElementChild.innerHTML) + 1;

    // Them vao yeu thich tren Firebase
    userSavedQuiz.update({
      likedQuiz: firebase.firestore.FieldValue.arrayUnion(id),
    });

    // Atomically increment the number of likes by 1.
    likes.update({
      [id]: firebase.firestore.FieldValue.increment(1),
    });
  } else {
    // Tim <3
    heartBtn.firstElementChild.classList.add("far");
    heartBtn.firstElementChild.classList.remove("fas");

    // Tru 1
    heartBtn.lastElementChild.innerHTML =
      Number(heartBtn.lastElementChild.innerHTML) - 1;

    // Xoa khoi yeu thich
    userSavedQuiz.update({
      likedQuiz: firebase.firestore.FieldValue.arrayRemove(id),
    });

    // Atomically increment the number of likes by 1.
    likes.update({
      [id]: firebase.firestore.FieldValue.increment(-1),
    });
  }
});

function checkLikedQuiz() {
  likes
    .get()
    .then((doc) => {
      let countAmountOfLikes = document.getElementById("count-likes");
      if (doc.exists) {
        let countLikeId = doc.data()[id];
        // Neu ko co thi` cho so like = 0
        countAmountOfLikes.innerText =
          countLikeId == undefined
            ? (countAmountOfLikes.innerText = 0)
            : (countAmountOfLikes.innerText = countLikeId);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        countAmountOfLikes.innerText = 0;
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });

  var docRef = db.collection("userQuizInfo").doc(userObject.email);

  docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        let likedArray = doc.data().likedQuiz;
        if (likedArray.includes(id)) {
          // Tim <3
          heartBtn.firstElementChild.classList.add("fas");
          heartBtn.firstElementChild.classList.remove("far");
        }
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
}

export { checkLikedQuiz };
