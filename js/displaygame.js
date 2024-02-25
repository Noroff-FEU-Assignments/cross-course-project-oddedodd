import { connectToApi, apiUrl } from "./api.js";

const gamesContainer = document.querySelector(".game-presentation");
const documentTitle = document.querySelector("title");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

/**
 * get the game by id and display it on the page
 */
async function displayGame() {
  connectToApi(apiUrl + id).then((game) => {
    let gameOnsale = "";
    if (game.on_sale) {
      gameOnsale = `<h2 class="onsale">This game is on sale!</h2>`;
    }

    let gamesTemplate = `
        <div class="the-game">
            <div class="title-description-price">
                <h1>${game.name}</h1>
                ${gameOnsale}
                <p>${game.description}</p>
                <p class="price">${game.price_html}</p>
            </div>
            <div class="image-addcart">
                <img src="${game.images[0].src}" alt="${game.name}">
                <a href="order.html" class="btn-read-more">Add to cart</a>
            </div>
        </div>
    `;
    gamesContainer.innerHTML = gamesTemplate;
    documentTitle.innerHTML =
      game.name +
      " - " +
      game.short_description.replace(/(<([^>]+)>)/gi, "") +
      " | GameHub";
  });
}

displayGame();
