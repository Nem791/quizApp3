let contentSearch = [];
const searchBar = document.getElementById("search");
searchBar.addEventListener("submit", (e) => {
  e.preventDefault();
  const valuesearch = document
    .querySelector('input[name="search"]')
    .value.toLowerCase();

  const filtersearch = contentSearch.filter((value) => {
    return value[0].questionTitle.toLowerCase().includes(valuesearch);
  });
  console.log(filtersearch);

  localStorage.setItem("search", JSON.stringify(filtersearch));
  window.location.href = `./search.html?search=${valuesearch}`;
});

fetch("http://localhost:3000/quizzes")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    Object.keys(data).forEach((element) => {
      // console.log(data[element]);
      contentSearch.push(data[element]);
    });
  });
