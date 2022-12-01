// Allt som ska visas, UI
import { numberWithSpaces } from './helpers.js';

const displayBox = document.querySelector('#planets');
const displayPlanet = document.querySelector('#planet');
const planetsContainer = document.querySelector('.planets-container');
const planetInfoContrainer = document.querySelector('.planet-info');
const planetName = document.querySelector('#planet-name');
const planetLatin = document.querySelector('#planet-latin');
const planetDesc = document.querySelector('#planet-desc');
const planetCircumference = document.querySelector('#planet-circumference');
const planetDistance = document.querySelector('#planet-distance');
const planetMaxTemp = document.querySelector('#planet-maxTemp');
const planetMinTemp = document.querySelector('#planet-minTemp');
const planetBottomHr = document.querySelector('#planet-bottom-hr');
const planetMoons = document.querySelector('#planet-moons');
const planetMoonsTitle = document.querySelector('#planet-mooons-title');

function displayPlanets(planets) {
    return planets.bodies.forEach((planet, index) => {
        let planetFigure = document.createElement('figure');
        planetFigure.className = `allPlanets planet${index}`;
        displayBox.appendChild(planetFigure);
    });
}

function hidePlanets(e, planets) {
    const planetNumber = e.target.className.slice(-1);
    if(e.target.classList[1] === `planet${planetNumber}`) {
        planetsContainer.classList.toggle("hide-planets");
        planetInfoContrainer.classList.toggle("show-planet-info");
        displayPlanet.className = `planet${planetNumber}`;
        fillOrClearPlanetInfo(planets.bodies[planetNumber]);
        setTimeout(() => {
            displayPlanet.classList.toggle("show-planet");
        }, 600);
    }
};

function closePlanetInfo() {
    displayPlanet.className = '';
    setTimeout(() => {
        planetsContainer.classList.toggle("hide-planets");
        planetInfoContrainer.classList.toggle("show-planet-info");
    }, 300);
    setTimeout(() => {
        fillOrClearPlanetInfo();
    }, 600);
};


function fillOrClearPlanetInfo(planet) {
    planetName.innerHTML = planet?.name || '';
    planetLatin.innerHTML = planet?.latinName || '';
    planetDesc.innerHTML = planet?.desc || '';
    planetCircumference.innerHTML = `${numberWithSpaces(planet?.circumference)} km` || '';
    planetDistance.innerHTML = `${numberWithSpaces(planet?.distance)} km` || '';
    planetMaxTemp.innerHTML = `${planet?.temp.day}C` || '';
    planetMinTemp.innerHTML = `${planet?.temp.night}C` || '';
    if(planet?.moons.length > 0) {
        planetBottomHr.style.display = 'block';
        planetMoonsTitle.innerHTML = 'Månar';
        planet.moons.forEach((moon) => {
            let moonContainer = document.createElement('p');
            moonContainer.innerHTML = moon;
            planetMoons.appendChild(moonContainer);
        });
    } else {
        planetBottomHr.style.display = 'none';
        planetMoonsTitle.innerHTML = '';
        planetMoons.innerHTML = '';
    }
};


export { displayPlanets, hidePlanets, closePlanetInfo };