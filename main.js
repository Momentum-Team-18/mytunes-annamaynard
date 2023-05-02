let resultsDiv = document.querySelector("#resultsDiv");

let iTunesUrl = "https://proxy-itunes-api.glitch.me/search?term=jason+derulo";
console.log;

fetch(iTunesUrl, {
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
    //   console.log(parsedResponse.results)

    for (let song of parsedResponse.results) {
      // goal is to console.log a list of Jason Derulo songs and show up on index.html

      let songCard = document.createElement("div");

      let artistName = document.createElement("div");
      artistName.innerText = song.artistName;
      console.log(artistName);
      songCard.appendChild(artistName);

      let trackName = document.createElement("h2");
      trackName.innerText = `${song.trackName}`;

      let artistImage = document.createElement("img");
      artistImage.src = song.artworkUrl30
      songCard.appendChild(artistImage);
      
      console.log(trackName);
      songCard.appendChild(trackName);
      resultsDiv.appendChild(songCard);

      console.log(trackName);
    }
  });
