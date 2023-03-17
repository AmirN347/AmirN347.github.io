let searchTerm = "";
let trackOutput = document.querySelector("#track-output");
async function getData() {
  console.log("Getting Data for...")
  searchTerm = document.querySelector("#input-search").value;
  searchTermFormatted = searchTerm.replaceAll(" ", "+");
  console.log(searchTermFormatted);
  let response = await fetch(`http://itunes.apple.com/search?term=${searchTermFormatted}&media=music&entity=musicTrack&country=US`);
  let data = await response.json();
  displayData(data);
}

function displayData(data) {
  //empty the container first
  trackOutput.innerHTML = "";
  //loop through the data, top level is object:
  let results = data['results'];
  for (let result of results) {
    appendTrackData(result);
    trackPrices(result);
  }
}


function appendTrackData(apiResponse) {
  
  let artist = apiResponse.artistName;
  let imgSrc = apiResponse.artworkUrl100;
  let track = apiResponse.trackCensoredName;
  
  let newTrack = `<p class="track-data">
                      <img src="${imgSrc}"/>
                      <span class="artist"> ${artist}: </span>
                      <span class="track"> ${track}</span>
                  </p>`
  trackOutput = document.querySelector("#track-output");
  trackOutput.insertAdjacentHTML("beforeend", newTrack);
}
async function trackPrices(apiResponse){
  let prices = apiResponse.trackPrice;
  let canStream = apiResponse.isStreamable;

  let trackprices = `<p>${prices}</p>`;
  let stream = canStream ? 
    '<p> You can stream this</p>':
     `<p> You cant stream this</p>`

  
  
  
  let priceoutput = document.querySelector("#trackPrices");
  priceoutput.insertAdjacentHTML("beforeend",trackprices);
  priceoutput.insertAdjacentHTML("beforeend",stream);

}


function getJson(r) {
return r.json();
}
async function debug() {
  fetch(`http://itunes.apple.com/search?term=tame+impala&media=music&entity=musicTrack&country=US`)
    .then(getJson).then((apiResponse) => {
      console.log(apiResponse);
    });
}

debug();