/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Jaime David Romero";
let currentYear = "2023";
/*let profilePicture = "images/yourprofileimagename.png";*/
/*let profilePicture = "images/placeholder.png";*/
let profilePicture = "images/Me20231026alas022318.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.images[0];

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute(`src`, profilePicture);
imageElement.setAttribute(`alt`, `Profile image of ${profilePicture}`);

/* Step 5 - Array */
let favFoods = ["Milanesa","Empanadas","Tacos"];
foodElement.setAttribute("food", favFoods);
let anotherSingleFavFood = "Locro";
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.push(anotherSingleFavFood);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;

//links
//document.querySelector(`<a href="w01-task.html">W1 Task</a>`).setAttribute(`href`, `../w01-task/w01-task-html`);
document.querySelector(`#menu > li:nth-child(3) > a`).setAttribute(`href`, `../w01-task/w01-task.html`);
document.querySelector(`#menu > li:nth-child(4) > a`).setAttribute(`href`, `../w03-task/w03-task.html`);
document.querySelector(`#menu > li:nth-child(5) > a`).setAttribute(`href`, `../w04-task/w04-task.html`);
document.querySelector(`#menu > li:nth-child(6) > a`).setAttribute(`href`, `../w05-task/w05-task.html`);