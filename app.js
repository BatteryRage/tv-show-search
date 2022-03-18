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

  console.log(show);
  const showTitle = document.createElement("h4");
  const showNetwork = document.createElement("h5");
  const showSummary = document.createElement("p");
  const showImg = document.createElement("img");
  const div = document.querySelector("#searchResults");

  showTitle.append(show.title);
  showNetwork.append("Network: " + show.network);
  showSummary.innerHTML = show.summary;
  imagestr = `<img src="${show.image}" >`;
  showImg.src = show.image;
  showImg.style.height = "500px";
  showImg.style.width = "340px";

  div.append(showTitle, showNetwork, showSummary, showImg);
  body.append(div);
  console.log(show.title);
};

const body = document.querySelector("body");
const apiSearchURL = "https://api.tvmaze.com/search/shows?q=";
const searchBar = document.querySelector('input[type="text"]');

// const div = document.createElement("div");
// div.id = "searchResults";
// document.body.appendChild(div);

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Clean old search results if they exist
  document.querySelector("#searchResults").innerHTML = "";
  const query = searchBar.value;
  getTVShow(query);
});
