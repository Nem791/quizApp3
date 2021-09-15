import { tableBodyList } from "../components/tableBodyList.js";
import { URL_add_parameter } from "../components/url_add_parameter.js";

const dropdownContent = document.querySelector(".dropdown-content");

// Tao danh sach dropdown
function createATag(quizName, quizId) {
  const aTag = document.createElement("a");
  aTag.innerText = quizName;
  aTag.dataset.id = quizId;
  aTag.style.cursor = "pointer";
  aTag.classList.add("quiz-name-list");
  return aTag;
}

function renderLeaderboard(setQuizId) {
  fetch("https://apiquizizz.herokuapp.com/quizzes")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // Tao so dong` cho dropdown quiz name
      for (let index = 0; index < Object.keys(data).length; index++) {
        let quizId = Object.keys(data)[index];
        dropdownContent.appendChild(
          createATag(data[quizId][0].questionTitle, quizId)
        );
      }

      // Set duong link cho tung` bo cau hoi
      let quizNameList = document.querySelectorAll(".quiz-name-list");
      quizNameList.forEach((element) => {
        element.addEventListener("click", () => {
          location.href = URL_add_parameter(
            location.href,
            "id",
            element.dataset.id
          );
        });
      });

      let quizTitle = document.getElementById("quiz-title");
      let board = [];
      let tableBody = document.getElementById("table-body");

      quizTitle.innerText = data[setQuizId][0].questionTitle;

      // Lay data tu firebase
      db.collection(data[setQuizId][0].questionTitle)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.data());
            // Ham board se co dang Array trong Array [[name, score, time], [name2, score2, time2]]
            board.push([
              doc.data().username,
              doc.data().score,
              doc.data().time,
            ]);
            console.log(board);
          });
        })
        .then(() => {
          // Sap xep cao => thap
          board = board.sort((a, b) => b[1] - a[1]);
          // Tao so dong` tuong ung
          board.forEach(() => {
            const row = new tableBodyList();
            tableBody.appendChild(row.render());
          });
        })
        .then(() => {
          let tableRow = document.querySelectorAll(".table-body-list");
          // render ket qua
          tableRow.forEach((element, index) => {
            // STT
            element.childNodes[0].innerText = Number(index) + 1;
            // Ten
            element.childNodes[1].firstChild.innerText = board[index][0];
            // Score
            // board[index][1] : So diem ; data[setQuizId].length : So cau
            element.childNodes[2].innerText =
              board[index][1] + " / " + data[setQuizId].length;
            // Accuracy
            element.childNodes[3].firstChild.innerText =
              (Number(board[index][1]) / Number(data[setQuizId].length)) * 100 +
              "%";
            // Time
            element.childNodes[5].firstChild.innerText = board[index][2];
          });
        });
    });
}

let id = window.location.search.split("=").pop();
console.log(id);
renderLeaderboard(id);
