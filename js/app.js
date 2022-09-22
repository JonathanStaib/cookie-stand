'use strict';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

let articleElem = document.getElementById('Cities');
let allCities = [];

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tableElem = document.createElement('table');
articleElem.appendChild(tableElem);

function header() {

  let headElem = document.createElement('tr');
  tableElem.appendChild(headElem);

  let th1Elem = document.createElement('td');
  headElem.appendChild(th1Elem);

  for (let i = 0; i < hours.length; i++) {
    let th2Elem = document.createElement('td');
    let time = hours[i];
    th2Elem.textContent = time;
    headElem.appendChild(th2Elem);
  }

  let thElem3 = document.createElement('td');
  thElem3.textContent = 'Daily Location Total';
  headElem.appendChild(thElem3);
}

// CONSTRUCTOR FUNCTION
function City(name, avg, min, max) {
  this.name = name;
  this.avg = avg;
  this.min = min;
  this.max = max;
  this.customers = 0;
  this.cookies = 0;
  this.hours = [];
  this.total = 0;

  allCities.push(this);
}



City.prototype.getCookies = function () {
  return Math.floor(randomCust(this.min, this.max) * this.avg);
};
City.prototype.getCust = function () {
  this.Customers = randomCust(this.min, this.max);
};

renderAll();

City.prototype.render = function () {
  // step 1 - create a new row for this city
  // step 2- create a new td/cell for each hours from 6am to 7pm
  // step 3- each td set the text content for the td to match whatever that random number
  //  append the td to the tr

  //  TABLE FROM RENDERING

  //     // could be a td or th for list
  let row1 = document.createElement('tr');
  tableElem.appendChild(row1);
  //     // click position ctrl d d d etc. to select multiplet things and change the, together
  let th1Elem = document.createElement('td');
  th1Elem.textContent = this.name;
  row1.appendChild(th1Elem);

  for (let i = 0; i < hours.length; i++) {
    let th2Elem = document.createElement('td');
    let cookie = this.getCookies();
    this.total += cookie;
    this.hours.push(cookie);
    th2Elem.textContent = cookie;
    row1.appendChild(th2Elem);
  }

  let thElem3 = document.createElement('td');
  thElem3.textContent = this.total;
  row1.appendChild(thElem3);
};


const myForm = document.getElementById('myForm');

function handleSubmit(event){
  event.preventDefault();

  let name = event.target.name.value;
  let avg = +event.target.avg.value;
  let min = +event.target.min.value;
  let max = +event.target.max.value;

  let newCity = new City(name, avg, min, max);
  let tfoot = document.getElementById('footerID');
  console.log(City);
  newCity.getCookies();
  newCity.getCust();
  newCity.render();
  tfoot.remove();
  footer();
  myForm.reset();
}
myForm.addEventListener('submit', handleSubmit);

function footer() {

  let footElem = document.createElement('tfoot');
  footElem.id = 'footerID';
  tableElem.appendChild(footElem);

  let th1Elem = document.createElement('td');
  th1Elem.textContent = 'Hourly Totals';
  footElem.appendChild(th1Elem);

  for (let i = 0; i < hours.length; i++) {
    let totals = 0;
    for (let j = 0; j < allCities.length; j++){
      totals += allCities[j].hours[i];
    }
    let th2Elem = document.createElement('td');
    th2Elem.textContent = totals;
    footElem.appendChild(th2Elem);
  }

  let thElem3 = document.createElement('td');
  thElem3.textContent = 'GrandTotal';
  footElem.appendChild(thElem3);
}

new City('Seattle', 6.3, 23, 65);
new City('Tokyo', 1.2, 3, 24);
new City('Dubai', 3.7, 11, 24);
new City('Paris', 2.3, 20, 38);
new City('Lima', 4.6, 2, 16);

// render the header row first
function renderAll() {
  for (let i = 0; i < allCities.length; i++) {
    allCities[i].getCookies();
    allCities[i].getCust();
    allCities[i].render();
  }
}

header();
renderAll();
footer();

