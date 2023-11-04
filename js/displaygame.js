const apiUrl = "https://api.noroff.dev/api/v1/gamehub/";

const gamesContainer = document.querySelector(".game-presentation");
const documentTitle = document.querySelector("title");

console.log(documentTitle);

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

    let gamesTemplate = `
        <div class="the-game">
            <div class="title-description-price">
                <h1>${gameDetails.title}</h1>
                <p>${gameDetails.description}</p>
                <p class="price">${gameDetails.price},-</p>
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