// Hämta nyckel och planeter, samla alla 'fetch' i en fil.
const loadingScreen = document.querySelector("#loading");

const BASE_URL = 'https://fathomless-shelf-54969.herokuapp.com';

async function getKey() {
    loadingScreen.classList.toggle("show-loader");
    const response = await fetch(`${BASE_URL}/keys`, { method: 'POST' });
    const data = await response.json();

    return data.key;
}

async function getPlanets() {
    const key = await getKey();
    const response = await fetch(`${BASE_URL}/bodies`, {
        headers: {
            'x-zocom': key
        }
    });
    const data = await response.json();
    loadingScreen.classList.toggle("show-loader");
    return data;
}

export default getPlanets;