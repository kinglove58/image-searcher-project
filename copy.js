const accessKeyword = "";
const searchForm = document.querySelector("#search-form");
const searchBox = document.querySelector("#search-box");
const searchResult = document.querySelector("search-result");
const shownMore = document.querySelector("#shown-more-brn");

let keyword = "";
let page = 1;

const searchImage = async () => {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${acessKeyword}&per_page=12`;
  const response = await fetch(url);
  const data = await response.json();
  if (page === 1) {
    searchResult.innerHTML = "";
  }

  const results = data.results;
  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });

  shownMore.style.display = "block";
};

searchForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  page = 1;
  searchImage();
});

shownMore.addEventListener("click", () => {
  page++;
  searchImage();
});
