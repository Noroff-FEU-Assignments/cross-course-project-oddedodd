const apiUrl = "https://api.noroff.dev/api/v1/gamehub/";

const gamesContainer = document.querySelector(".game-presentation");
const documentTitle = document.querySelector("title");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

async function displayGame() {

    try {
        const response = await fetch(apiUrl + id);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

    const gameDetails = await response.json();

    let gameOnsale = "";

    if(!gameDetails.onSale){
        gamePrice = gameDetails.price;
    } else {
        gamePrice = gameDetails.discountedPrice;
        gameOnsale = `<h2 class="onsale">This game is on sale!</h2>`;
    }

    let gamesTemplate = `
        <div class="the-game">
            <div class="title-description-price">
                <h1>${gameDetails.title}</h1>
                ${gameOnsale}
                <p>${gameDetails.description}</p>
                <p class="price">${gamePrice},-</p>
            </div>
            <div class="image-addcart">
                <img src="${gameDetails.image}" alt="${gameDetails.title}">
                <a href="order.html" class="btn-read-more">Add to cart</a>
            </div>
        </div>
    `;
    
    gamesContainer.innerHTML = gamesTemplate;
    documentTitle.innerHTML = gameDetails.title + " | GameHub";


    } catch (error) {
        console.error("An error occurred:", error);
    } 
   
}

displayGame();