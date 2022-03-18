//import {create} from './createCard.js'
//import {makeElements} from './createElements.js'

const getTVShow = async (searchText) => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const srch = `${apiSearchURL}${searchText}`;
    console.log(srch);
    const res = await axios.get(srch, config);
    arrayOfShows = res.data;

    arrayOfShows.forEach((show) => {
      try {
        displayData(show);
      } catch (error) {
        console.log(`Error retreiving content for ${show}`);
      }
    });
  } catch (error) {}
};

const displayData = async (data) => {
  const show = {
    title: data.show.name,
    image: data.show.image.original,
    network: data.show.network.name,
    summary: data.show.summary,
  };
  
  makeElements(show);

};

const results = document.querySelector("#searchContainer");
const apiSearchURL = "https://api.tvmaze.com/search/shows?q=";
const searchBar = document.querySelector('input[type="search"]');

const div = document.createElement("div");
div.id = "searchResults";
document.body.appendChild(div);

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Clean old search results if they exist
  document.querySelector("#searchResults").innerHTML = "";
  const query = searchBar.value;
  getTVShow(query);
});
