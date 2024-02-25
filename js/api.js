/**
 *  Set the production variable to true if you want to use the production API
 */
const production = true;

let apiUrl = "";
/**
 * check if the production variable is true or false
 */
if (production) {
  apiUrl = "https://gamehub.flywheelsites.com/wp-json/wc/store/products/";
} else {
  apiUrl = "http://noroff.local/wp-json/wc/store/products/";
}

/**
 * Connect to the API and return all games
 */
async function connectToApi(apiUrl) {
  let games = [];
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error();
    }
    return (games = response.json());
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

export { connectToApi, apiUrl };
