import { SliderCard } from "../components/sliderCard.js";

// Render theo tung` slider
function renderSlideByCategory(myArray, slider) {
  myArray.forEach(() => {
    const cardItem = new SliderCard();
    slider.appendChild(cardItem.render());
  });
}
let basicArray = [];
let otherArray = [];
let contentSearch = [];
const searchBar = document.getElementById("search");
searchBar.addEventListener("submit", (e) => {
  e.preventDefault();
  const valuesearch = document
    .querySelector('input[name="search"]')
    .value.toLowerCase();

  const filtersearch = contentSearch.filter((value) => {
    return value.questionTitle.toLowerCase().includes(valuesearch);
  });
  localStorage.setItem("search", JSON.stringify(filtersearch));
  console.log(filtersearch);
  window.location.href = "./search.html";
});

fetch("http://localhost:3000/quizzes")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const firstSlider = document.querySelectorAll(".container-box")[0];
    const secondSlider = document.querySelectorAll(".container-box")[1];

    // Phan loai slider
    Object.keys(data).forEach((element) => {
      contentSearch.push(data[element][0]);
      if (data[element][0].category == "basic") {
        basicArray.push(element);
      } else if (data[element][0].category == "other") {
        otherArray.push(element);
      }
    });

    renderSlideByCategory(basicArray, firstSlider);
    renderSlideByCategory(otherArray, secondSlider);

    const box = document.querySelectorAll(".box");
    let content = document.querySelectorAll(".content");
    console.log(content);
    let cardImage = document.querySelectorAll(".card-image");
    console.log(cardImage);
    content.forEach((element, index) => {
      // Render ten cau hoi tu data
      element.innerText = data[`${Object.keys(data)[index]}`][0].questionTitle;

      // Render so luong cau hoi
      element.nextElementSibling.innerText =
        data[`${Object.keys(data)[index]}`].length + " questions";

      // Render link hinh anh
      cardImage[index].src = data[`${Object.keys(data)[index]}`][0].image;

      box[index].dataset.id = Object.keys(data)[index];
    });

    box.forEach((element) => {
      element.addEventListener("click", () => {
        localStorage.setItem("id", JSON.stringify(element.dataset.id));
        // location.href = './quizPage.html';
        location.href = `./quizPage.html?id=${element.dataset.id}`;

        // location.search = '$id=24';
      });
    });
  })

  .then(() => {
    $(".multiple-items").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
    });
  });
