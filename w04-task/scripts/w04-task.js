/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile =
{
    name: `Jaime David Romero`,
    photo: `../w02-task/images/Me20231026alas022318.jpg`,
    favoriteFoods: [`Empanadas`,`Milanesa`,`Locro`,`Tacos`],
    hobbies: [`Table Tennis`,`Chess`,`Watch Movies`,`Programming`],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push
(
    {
        place: 'Buenos Aires, Argentina',
        length: '2 years and 2 months'
    },
    {
        place: 'Cordoba, Argentina',
        length: '3 months'
    },
    {
        place: `Mendoza, Argentina`,
        length: `3 days`
    },
    {
        place: `Bariloche, Argentina`,
        length: `1 week`
    },
    {
        place: `Montevideo, Uruguay`,
        length: `2 weeks`
    },
    {
        place: `Cochabamba, Bolivia`,
        length: `1 week`
    },
    {
        place: `Santiago, Chile`,
        length: `1 week`
    },
    {
        place: `Salta, Argentina`,
        length: `1 week`
    },
    {
        place: `La Alumbrera, Argentina`,
        length: `1 week`
    }
 );

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').alt = `my BYU photo`;
document.querySelector('#photo').src = myProfile.photo;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food =>
    {
        let li = document.createElement('li');
        li.textContent = food;
        document.querySelector('#favorite-foods').appendChild(li);
    });

/* Hobbies List */
myProfile.hobbies.forEach(hobby =>
    {
        let li = document.createElement('li');
        li.textContent = hobby;
        document.querySelector('#hobbies').appendChild(li);
    });

/* Places Lived DataList */
myProfile.placesLived.forEach(lived =>
    {
        let dt = document.createElement('dt');
        dt.textContent = lived.place;
        let dd = document.createElement('dd');
        dd.textContent = lived.length;
        document.querySelector('#places-lived').appendChild(dt);
        document.querySelector('#places-lived').appendChild(dd);
    });

//links corrections
document.querySelector(`#menu > li:nth-child(2) > a`).setAttribute(`href`, `../test.html`);
document.querySelector(`#menu > li:nth-child(3) > a`).setAttribute(`href`, `../w01-task/w01-task.html`);
document.querySelector(`#menu > li:nth-child(4) > a`).setAttribute(`href`, `../w03-task/w03-task.html`);
document.querySelector(`#menu > li:nth-child(6) > a`).setAttribute(`href`, `../w05-task/w05-task.html`);
document.querySelector(`#menu > li:nth-child(6) > a`).setAttribute(`href`, `../project/project.html`);
document.querySelector(`head > link:nth-child(7)`).setAttribute(`href`, `../w02-task/styles/main.css`);
document.querySelector(`body > script:nth-child(4)`).setAttribute(`src`, `../w02-task/scripts/main.js`);