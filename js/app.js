console.log('hei verden');

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

const apiUrl = "https://api.noroff.dev/api/v1/gamehub/";

async function getAllGames() {

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

    const games = await response.json();
    console.log(games);

    } catch (error) {
        console.error("An error occurred:", error);
    } 
}

getAllGames();