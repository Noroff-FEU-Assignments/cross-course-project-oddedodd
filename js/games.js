import { connectToApi, apiUrl } from "./api.js";
const gamesContainer = document.querySelector(".games-list");

/**
 * Get all games and display them on the games page
 */
function getAllGames() {
  connectToApi(apiUrl).then((games) => {
    let gamesTemplate = "";

    for (let i = 0; i < games.length; i++) {
      gamesTemplate += `
            <div class="game">
                <img src="${games[i].images[0].src}" alt="${games[i].name}" />
                <a href="displaygame.html?id=${games[i].id}" class="btn-read-more">Learn more</a>
            </div>
            `;
    }
    gamesContainer.innerHTML = gamesTemplate;
  });
}
getAllGames();
