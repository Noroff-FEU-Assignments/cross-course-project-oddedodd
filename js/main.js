const apiUrl = "https://api.noroff.dev/api/v1/gamehub/";

const featuredGamesContainer = document.querySelector(".scrolling-wrapper");
const trendingGamesContainer = document.querySelector(".trending-games-container");
const discountGamesContainer = document.querySelector(".discount-games-container");

async function getFeaturedGames() {

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

    const games = await response.json();

    let gamesTemplate = "";

    for(let i = 0; i < games.length; i++) {

        if(!games[i].favorite) {
            continue;
        }

         gamesTemplate += `
            <div class="card featured-game">
              <div class="featured-game-description">
                <h4>${games[i].title}</h4>
                <p>${games[i].description}</p>
              </div>
              <div class="featured-game-image">
              <img src="${games[i].image}" alt="${games[i].title}" />
                <a href="displaygame.html?id=${games[i].id}" class="btn-read-more">Learn more</a>
              </div>
            </div>
            `;
    }

    featuredGamesContainer.innerHTML = gamesTemplate;

    } catch (error) {
        console.error("An error occurred:", error);
    } 
   
}

async function getTrendingGames() {

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

    const games = await response.json();

    let gamesTemplate = "";

    for(let i = 0; i < 6; i++) { // only display 6 games

         gamesTemplate += `
            <div class="card trending-game">
                <img src="${games[i].image}" alt="${games[i].title}" />
                <a href="displaygame.html?id=${games[i].id}" class="btn-read-more">Learn more</a>
            </div>
            `;
    }

    trendingGamesContainer.innerHTML = gamesTemplate;

    } catch (error) {
        console.error("An error occurred:", error);
    } 

}

async function getOnsaleGames() {   

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

    const games = await response.json();

    let gamesTemplate = "";

    for(let i = 0; i < games.length; i++) {

        if(!games[i].onSale) {
            continue;
        }

        gamesTemplate += `
            <div class="card discount-game">
            <img src="${games[i].image}" alt="${games[i].title}" />
            <a href="displaygame.html?id=${games[i].id}" class="btn-read-more">Learn more</a>
            </div>
            `;
    }

    discountGamesContainer.innerHTML = gamesTemplate;

    } catch (error) {
        console.error("An error occurred:", error);
    } 

}

getFeaturedGames();
getTrendingGames();
getOnsaleGames();