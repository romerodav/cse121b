/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById(`temples`);
let templeList = [], templeCopy = [];

/* async displayTemples Function */
const displayTemples = (temples) =>
{
    temples.forEach((temple) =>
        {
            let article = document.createElement('article');
            let h3 = document.createElement('h3');
            let textNode = document.createTextNode(temple.templeName);            ;
            h3.appendChild(textNode);
            let img = document.createElement(`img`);
            img.src = temple.imageUrl;
            img.alt = temple.location;
            article.appendChild(h3);
            article.appendChild(img);
            templesElement.appendChild(article);
        })
}

/* async getTemples Function using fetch()*/
const getTemples = async () =>
{
    const response = await fetch(`https://byui-cse.github.io/cse121b-ww-course/resources/temples.json`);
    if (response.ok)
    {
        templeList = await response.json();
        templeCopy = [].concat(templeList);
        displayTemples(templeList);
    }
}

/* reset Function */
function reset(temples)
{
    while(temples.length > 0)
    {
        temples.pop();
        document.getElementById(`temples`).innerHTML=``;
    }
}

/* sortBy Function */
const sortBy = (temples) =>
{
    reset(temples);
    const sortByValue = document.getElementById(`sortBy`);
    const filter = sortByValue.value;
    temples = [].concat(templeCopy);
    switch (filter)
    {
        case `utah`:
            temples = temples.filter((temple) => temple.location.includes(`Utah`));
          break;
        case `notutah`:
            temples = temples.filter((temple) => !temple.location.includes(`Utah`));
          break;
        case `older`:
            temples = temples.filter((temple) => Date.parse(temple.dedicated) < Date.parse(1950, 0, 1));
    }
    displayTemples(temples);
    templeList = [].concat(temples);
}

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});

getTemples();

//links corrections
document.querySelector(`#menu > li:nth-child(2) > a`).setAttribute(`href`, `../test.html`);
document.querySelector(`#menu > li:nth-child(3) > a`).setAttribute(`href`, `../w01-task/w01-task.html`);
document.querySelector(`#menu > li:nth-child(4) > a`).setAttribute(`href`, `../w03-task/w03-task.html`);
document.querySelector(`#menu > li:nth-child(5) > a`).setAttribute(`href`, `../w04-task/w04-task.html`);
document.querySelector(`#menu > li:nth-child(7) > a`).setAttribute(`href`, `../project/project.html`);
document.querySelector(`head > link:nth-child(7)`).setAttribute(`href`, `../w02-task/styles/main.css`);
document.querySelector(`body > script:nth-child(4)`).setAttribute(`src`, `../w02-task/scripts/main.js`);