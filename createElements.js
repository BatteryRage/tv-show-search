const makeElements = (show) => {
  const showTitle = document.createElement("h5");
  const showNetwork = document.createElement("h6");
  const showSummary = document.createElement("p");
  const showImg = document.createElement("img");
  const div = document.querySelector("#searchResults");

  // Define all parts of the card
  const card = document.createElement("div");
  const cardBody = document.createElement("div");
  card.classList.add("card");
  card.classList.add("bg-light");
  card.classList.add("col-md-5");
  card.classList.add("m-1");
  cardBody.classList.add("card-body");
  showTitle.classList.add("card-title");
  showNetwork.classList.add("card-subtitle");
  showSummary.classList.add("card-text");
  showImg.classList.add("justify-self-center")

  // Add content to elements
  showTitle.append(show.title);
  showNetwork.append("Network: " + show.network);
  showSummary.innerHTML = show.summary;
  imagestr = `<img src="${show.image}" >`;
  showImg.src = show.image;
  showImg.style.height = "250px";
  showImg.style.width = "170px";

  
  cardBody.append(showTitle, showNetwork, showSummary, showImg);
  card.append(cardBody);
  div.append(card);
  results.append(div);
};

//export {makeElements};
