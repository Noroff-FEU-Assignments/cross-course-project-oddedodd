const apiUrl = "https://api.noroff.dev/api/v1/gamehub/";
const gamesContainer = document.querySelector(".games-list");



async function getAllGames() {

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

    const games = await response.json();

    let gamesTemplate = "";

    for(let i = 0; i < games.length; i++) {

         gamesTemplate += `
            <div class="game">
                <img src="${games[i].image}" alt="${games[i].title}" />
                <a href="displaygame.html?id=${games[i].id}" class="btn-read-more">Learn more</a>
            </div>
            `;
    }

    gamesContainer.innerHTML = gamesTemplate;

    } catch (error) {
        console.error("An error occurred:", error);
    } 


   
}

getAllGames();