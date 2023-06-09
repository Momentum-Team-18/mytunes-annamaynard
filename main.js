let resultsDiv = document.querySelector("#resultsDiv");
let searchBar = document.querySelector("#searchBar");
let searchForm = document.querySelector("#searchForm");
let itunesUrl = "https://proxy-itunes-api.glitch.me/search?term=";
let audioPlayer = document.querySelector("audio");


resultsDiv.addEventListener("click", (event) => {
  console.log(event.target.parentNode.dataset.songurl);
  audioPlayer.src = event.target.parentNode.dataset.songurl
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(searchBar.value);
  let searchUrl = `${itunesUrl}${searchBar.value}`;
  console.log(searchUrl);

  fetch(searchUrl, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    // waits for the request to complete
    // response is what the request returned
    .then((response) => {
      return response.json();
    })
    // parsedResponse - the thing having been read
    // you can use any word
    .then((parsedResponse) => {
      console.log(parsedResponse);

      for (let song of parsedResponse.results) {
        let songCard = document.createElement("div");

        songCard.setAttribute("data-songUrl", song.previewUrl);

        let artistName = document.createElement("div");
        artistName.innerText = song.artistName;
        console.log(artistName);
        songCard.appendChild(artistName);

        let trackName = document.createElement("h2");
        trackName.innerText = `${song.trackName}`;

        let artistImage = document.createElement("img");
        artistImage.src = song.artworkUrl30;
        songCard.appendChild(artistImage);

        console.log(trackName);
        songCard.appendChild(trackName);
        resultsDiv.appendChild(songCard);

        console.log(trackName);
      }
    });
});
