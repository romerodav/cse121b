/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById(`temples`);
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) =>
{
    templeList.forEach(temple =>
        {
            let article = document.createElement('article');
            let h3 = document.createElement('h3');
            h3 = temple.templeName;
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
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
}

/* reset Function */


/* sortBy Function */



getTemples();

/* Event Listener */


//links corrections
document.querySelector(`#menu > li:nth-child(2) > a`).setAttribute(`href`, `../test.html`);
document.querySelector(`#menu > li:nth-child(3) > a`).setAttribute(`href`, `../w01-task/w01-task.html`);
document.querySelector(`#menu > li:nth-child(4) > a`).setAttribute(`href`, `../w03-task/w03-task.html`);
document.querySelector(`#menu > li:nth-child(5) > a`).setAttribute(`href`, `../w04-task/w04-task.html`);
document.querySelector(`head > link:nth-child(7)`).setAttribute(`href`, `../w02-task/styles/main.css`);
document.querySelector(`body > script:nth-child(4)`).setAttribute(`src`, `../w02-task/scripts/main.js`);
