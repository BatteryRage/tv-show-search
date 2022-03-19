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
  card.classList.add("mb-3");
  //card.classList.add("m-1");
  card.style = "max-width: 540px";
  cardBody.classList.add("card-body");

  // Add content to results
  showTitle.append(show.title);
  showNetwork.append("Network: " + show.network);
  showSummary.innerHTML = show.summary;
  imagestr = `<img src="${show.image}" >`;
  showImg.src = show.image;
  showImg.style.height = "250px";
  showImg.style.width = "170px";

  // Add classes to results items
  showTitle.classList.add("card-title");
  showNetwork.classList.add("card-subtitle");
  showSummary.classList.add("card-text");
  showImg.classList.add("justify-self-center");

  // Create Row Element
  const row = document.createElement("div");
  row.classList.add("row");
  row.classList.add("no-gutters");
  row.classList.add("align-items-center");

  // Create Image Column
  const imgCol = document.createElement("div");
  imgCol.classList.add("col-md-4");

  // Create text content column
  const txtCol = document.createElement("div");
  txtCol.classList.add("col-md-8");

  imgCol.append(showImg);
  txtCol.append(showTitle, showNetwork, showSummary);
  row.append(imgCol, txtCol);
  card.append(row);
  div.append(card);
  results.append(div);
};

//export {makeElements};
