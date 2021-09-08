const search = document.querySelector(".search-results-list");
const valueSearch = JSON.parse(localStorage.getItem("search"));
console.log(valueSearch);

const renderSearch = (valueSearch) => {
  const htmlString = valueSearch
    .map((value) => {
      console.log(value);
      return `
<li class="search-results-item" data-id="${value.search}">
  <div class="image"
    style="background-image:url(${value.image});background-size: 70%;">
  </div>
  <div class="data">
    <div class="content-type-title"> ${value.questionTitle} </div>
    <div class="name"> a </div>
    <div class="details">
      <div class="questions-length"><i class="fas fa-list no-absolute"></i> 1 Qs
      </div>
      <div class="played"><i class="fas fa-play no-absolute"></i> Played 0 times
      </div>
    </div>
    <div class="created-by">
      <div class="user-img"
        style="background-image: url(https://lh3.googleusercontent.com/a-/AOh14Gggzvqn-YiHEPtNfu6BPdWmAjxQQGthaXK0E1c6FQ=s96-c?w=90&amp;h=90)">
      </div>
      <div class="user-data">
        <a href="./profile.html" class="username">
          phuongnam131201
        </a>
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
  console.log(value);
  value.addEventListener("click", () => {
    console.log(value);
  });
});
