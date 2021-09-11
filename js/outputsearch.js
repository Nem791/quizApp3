const search = document.querySelector(".search-results-list");
const totalTitle = document.querySelector(".title");
const valueSearch = JSON.parse(localStorage.getItem("search"));
const searchLength = valueSearch.length;

totalTitle.innerHTML = `Kết quả (${searchLength})`;

const renderSearch = (valueSearch) => {
  const htmlString = valueSearch
    .map((value) => {
      console.log(value);
      return `
<li class="search-results-item" data-id="${value[0].search}">
  <div class="image"
    style="background-image:url(${value[0].image});background-size: 70%;">
  </div>
  <div class="data">
    <div class="content-type-title"> ${value[0].questionTitle} </div>
    <div class="name">  </div>
    <div class="details">
      <div class="questions-length"> ${value.length}Qs <i class="fas fa-list no-absolute"></i> 
      </div>
      <div class="played"><i class="fas fa-play no-absolute"></i>
      ${value[0].search} 
      </div>
    </div>
  </div>
</li>
`;
    })
    .join("");
  search.innerHTML = htmlString;
};
renderSearch(valueSearch);

/// click vào bộ câu hỏi từ trang tìm kiếm
const click = document.querySelectorAll(".search-results-item");
click.forEach((value) => {
  console.log(value.dataset);
  value.addEventListener("click", () => {
    location.href = `./quizPage.html?id=${value.dataset.id}`;
  });
});
