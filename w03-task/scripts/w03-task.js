/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1,number2)
{
    return number1 + number2;
}

function addNumbers()
{
    let addNumber1 = Number(document.querySelector(`#add1`).value);
    let addNumber2 = Number(document.querySelector(`#add2`).value);

    document.querySelector(`#sum`).value = add(addNumber1,addNumber2);
}

document.querySelector(`#addNumbers`).addEventListener(`click`,addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1,number2)
{
    return number1 - number2;
}

function subtractNumbers()
{
    let subtract1 = Number(document.querySelector(`#subtract1`).value);
    let subtract2 = Number(document.querySelector(`#subtract2`).value);

    document.querySelector(`#difference`).value = subtract(subtract1,subtract2);
}

document.querySelector(`#subtractNumbers`).addEventListener(`click`,subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => 
{
    let factor1 = Number(document.querySelector(`#factor1`).value);
    let factor2 = Number(document.querySelector(`#factor2`).value);

    document.querySelector(`#product`).value = multiply(factor1,factor2);
}
document.querySelector(`#multiplyNumbers`).addEventListener(`click`,multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

const divideNumbers = () =>
{
    let dividend = Number(document.querySelector(`#dividend`).value);
    let divisor = Number(document.querySelector(`#divisor`).value);

    document.querySelector(`#quotient`).value = divide(dividend,divisor);
}

document.querySelector(`#divideNumbers`).addEventListener(`click`,divideNumbers);

/* Decision Structure */
function functionality()
{
    let numeric = document.querySelector(`#subtotal`).value;
    //let numeric = document.getElementById(`subtotal`).value;
    let discount = 0.85;

    if (!isNaN(numeric))
    {
        if (document.querySelector(`#member`).checked) numeric = discount * numeric;
        else numeric = 1 * numeric;
        document.getElementById("total").innerHTML = `$ ${numeric.toFixed(2)}`;
    }
}

document.querySelector(`#getTotal`).addEventListener(`click`, functionality);

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
document.getElementById("array").innerHTML = `${numbersArray}`;

/* Output Odds Only Array */
/*function IsOdd(value)
{
    return value % 2 == 1;
}

const oddArray = numbersArray.filter(IsOdd);
document.getElementById("odds").innerHTML = `${oddArray}`;*/

document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 === 1);

/* Output Evens Only Array */
/*function IsEven(value)
{
    return value % 2 == 0;
}

const evenArray = numbersArray.filter(IsEven);
document.getElementById("evens").innerHTML = `${evenArray}`;*/

document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerHTML = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);

//links

document.querySelector(`#menu > li:nth-child(2) > a`).setAttribute(`href`, `../test.html`);
document.querySelector(`#menu > li:nth-child(3) > a`).setAttribute(`href`, `../w01-task/w01-task.html`);
document.querySelector(`#menu > li:nth-child(5) > a`).setAttribute(`href`, `../w04-task/w04-task.html`);
//document.querySelector(`#body > table > tbody > tr:nth-child(12) > td.line-content > span > a`).setAttribute(`href`, `../w02-task/styles/main.css`);
//document.querySelector(`#/html/body/table/tbody/tr[12]/td[2]/span/a`).setAttribute(`href`, `../w02-task/styles/main.css`);