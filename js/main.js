import { connectToApi, apiUrl } from "./api.js";

const featuredGamesContainer = document.querySelector(".scrolling-wrapper");
const trendingGamesContainer = document.querySelector(
  ".trending-games-container"
);
const discountGamesContainer = document.querySelector(
  ".discount-games-container"
);

/**
 *  Get the featured games and display them on the page - tag 22 is the "featured" tag in WordPress backend.
 */
async function getFeaturedGames() {
  connectToApi(apiUrl + "?tag=22").then((games) => {
    let gamesTemplate = "";
    for (let i = 0; i < games.length; i++) {
      gamesTemplate += `
            <div class="card featured-game">
              <div class="featured-game-description">
                <h4>${games[i].name}</h4>
                <p>${games[i].description}</p>
              </div>
              <div class="featured-game-image">
              <img src="${games[i].images[0].src}" alt="${games[i].name}" />
                <a href="displaygame.html?id=${games[i].id}" class="btn-read-more">Learn more</a>
              </div>
            </div>
            `;
    }
    featuredGamesContainer.innerHTML = gamesTemplate;
  });
}

/**
 *  Get the trending games and display them on the page - tag 23 is the "trending" tag in WordPress backend.
 */
async function getTrendingGames() {
  connectToApi(apiUrl + "?tag=23").then((games) => {
    let gamesTemplate = "";
    for (let i = 0; i < games.length; i++) {
      gamesTemplate += `
            <div class="card trending-game">
                <img src="${games[i].images[0].src}" alt="${games[i].name}" />
                <a href="displaygame.html?id=${games[i].id}" class="btn-read-more">Learn more</a>
            </div>
            `;
    }
    trendingGamesContainer.innerHTML = gamesTemplate;
  });
}

/**
 *  Get the games on sale and display them on the page
 */
async function getOnsaleGames() {
  connectToApi(apiUrl + "?on_sale=true").then((games) => {
    let gamesTemplate = "";
    for (let i = 0; i < games.length; i++) {
      gamesTemplate += `
            <div class="card discount-game">
            <img src="${games[i].images[0].src}" alt="${games[i].name}" />
            <a href="displaygame.html?id=${games[i].id}" class="btn-read-more">Learn more</a>
            </div>
            `;
    }
    discountGamesContainer.innerHTML = gamesTemplate;
  });
}

getFeaturedGames();
getTrendingGames();
getOnsaleGames();
