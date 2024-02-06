const acessKeyword = "";
const searchForm = document.querySelector("#search-form");
const searchBox = document.querySelector("#search-box");
const searchResult = document.querySelector("#search-result");

let keyword = "";
let page = 1;

const searchImage = async () => {
  keyword = searchBox.value;
  const url = `https://api.${accesskeyword} & ${keyword} &${page}`;
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
};

searchForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  page = 1;
  searchImage();
});
