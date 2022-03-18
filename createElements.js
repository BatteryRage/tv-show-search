const makeElements = (show) => {
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
  results.append(div)
};

//export {makeElements};
