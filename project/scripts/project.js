/* Project: Programming Tasks */

/* Declare and initialize global variables */
const digimonElement = document.getElementById(`digimones`);
let digimonList = [], digimonCopy = [];

/* async displaydigimon Function */
const displaydigimon = (digimones) =>
{
    digimones.forEach((digimon) =>
        {
            let article = document.createElement('article');
            let h3 = document.createElement('h3');
            let textNode = document.createTextNode(digimon.name);            ;
            h3.appendChild(textNode);
            let img = document.createElement(`img`);
            img.src = digimon.img;
            img.alt = digimon.level;
            article.appendChild(h3);
            article.appendChild(img);
            digimonElement.appendChild(article);
        })
}

/* async getdigimon Function using fetch()*/
const getDigimon = async () =>
{
    const response = await fetch(`https://digimon-api.vercel.app/api/digimon`);
    if (response.ok)
    {
        digimonList = await response.json();
        digimonCopy = [].concat(digimonList);
        displaydigimon(digimonList);
    }
}

/* reset Function */
function reset(digimones)
{
    while(digimones.length > 0)
    {
        digimones.pop();
        document.getElementById(`digimones`).innerHTML=``;
    }
}

/* sortBy Function */

const sortBy = (digimones) =>
{
    reset(digimones);
    const sortByValue = document.getElementById(`sortBy`);
    const filter = sortByValue.value;
    digimones = [].concat(digimonCopy);
    switch (filter)
    {
        case `intraining`:
            digimones = digimones.filter((digimon) => digimon.level.includes(`In Training`));
            break;
        case `rookie`:
            digimones = digimones.filter((digimon) => digimon.level.includes(`Rookie`));
            break;
        case `champion`:
            digimones = digimones.filter((digimon) => digimon.level.includes(`Champion`));
            break
        case `ultimate`:
            digimones = digimones.filter((digimon) => digimon.level.includes(`Ultimate`));
            break;
        case `mega`:
            digimones = digimones.filter((digimon) => digimon.level.includes(`Mega`));
            break;
        case `armor`:
            digimones = digimones.filter((digimon) => digimon.level.includes(`Armor`));
        }
    displaydigimon(digimones);
    digimonList = [].concat(digimones);
}

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(digimonList)});

getDigimon();