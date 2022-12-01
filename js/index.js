import getPlanets from './modules/api.js';
import { displayPlanets, hidePlanets, closePlanetInfo } from './modules/display.js';

const closeBtn = document.querySelector("#close-info");

async function main() {
    const planets = await getPlanets();
    displayPlanets(planets);
    window.addEventListener("click", (e) => hidePlanets(e, planets));
    closeBtn.addEventListener("click", closePlanetInfo);
};

main();