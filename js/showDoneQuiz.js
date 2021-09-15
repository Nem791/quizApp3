import { ViewItem } from "../components/savedItem.js";

let resultList = document.querySelector(".search-results-list");
let userObject = JSON.parse(localStorage.getItem("tempUserInfo"));

var docRef = db.collection("userQuizInfo").doc(userObject.email);

function renderList(category) {
  docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        let savedQuizArray = doc.data()[category];
        console.log(doc.data());
        resultList.innerHTML = "";
        savedQuizArray.forEach((element) => {
          const viewItem = new ViewItem();
          resultList.appendChild(viewItem.render());
        });

        renderSavedQuiz(savedQuizArray);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
      resultList.innerText =
        "Đã có lỗi truy xuất. Có thể bạn chưa tạo collections!";
      // Count
      document.querySelector(".count").innerText = 0;
    });
}

function renderSavedQuiz(idArray) {
  fetch("https://apiquizizz.herokuapp.com/quizzes")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      idArray.forEach((element, index) => {
        let resultItems = document.querySelectorAll(".search-results-item");

        // Count
        document.querySelector(".count").innerText = resultItems.length;

        // Render image
        resultItems[
          index
        ].firstElementChild.style.backgroundImage = `url('${data[element][0].image}')`;
        // Render ten quiz
        resultItems[index].querySelector(".content-type-title").innerText =
          data[element][0].questionTitle;
        // Render so cau hoi
        resultItems[index].querySelector(".questions-length").innerHTML +=
          data[element].length + " questions";
        // Render email
        resultItems[index].querySelector(".username").innerText =
          userObject.email;
        // Render profile pic
        resultItems[index].querySelector(
          ".user-img"
        ).style.backgroundImage = `url(${userObject.photoURL})`;
      });
    });
}

export { renderList };
