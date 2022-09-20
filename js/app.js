'use strict';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

let articleElem = document.getElementById('Cities');
let allCities = [];

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


// console.dir(firstLocations);

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
  thElem3.textContent = 'Total';
  headElem.appendChild(thElem3);
}

header();

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

  // let articleElem = document.createElement('article');
  // Locations.appendChild(articleElem);

  // let h2Elem = document.createElement('h2');
  // h2Elem.textContent = this.name;
  // articleElem.appendChild(h2Elem);

  // let ulElem = document.createElement('ul');
  // articleElem.appendChild(ulElem);

  // for (let i = 0; i < this.hours.length; i++) {
  //   let liElem = document.createElement('li');
  //   console.log(this.hours[i]);
  //   liElem.innerText = `${this.hours[i]}: ${this.getCookies()} cookies`;
  //   ulElem.appendChild(liElem);

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
    th2Elem.textContent = cookie;
    row1.appendChild(th2Elem);
  }

  let thElem3 = document.createElement('td');
  thElem3.textContent = this.total;
  row1.appendChild(thElem3);
};

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

renderAll();
//  CREATE OUR OBJECTS USING OUR CONSTRUCTOR

// OBJECT LITERALS

// let seattle = {
//   name: 'Seattle',
//   avg: 6.3,
//   min: 23,
//   max: 65,
//   Customers: 0,
//   Cookies: 0,
//   getCookies: function () {
//     return Math.floor(randomCust(this.min, this.max) * this.avg);
//   },
//   getCust: function () {
//     this.Customers = randomCust(this.min, this.max);

//   },
//   render: function () {

//     let articleElem = document.createElement('article');
//     firstLocations.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < this.hours.length; i++) {
//       let liElem = document.createElement('li');
//       console.log(this.hours[i]);
//       liElem.innerText = `${this.hours[i]}: ${this.getCookies()} cookies`;
//       ulElem.appendChild(liElem);
//     }
//   }
// };

// let averageTokCookies = 1.2;

// let tokyo = {
//   name: 'Tokyo',
//   Customers: 0,
//   hours: ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   Cookies: 0,
//   getCookies: function () {
//     return Math.floor(randomCust(3, 24) * averageTokCookies);
//   },
//   getCust: function () {
//     this.Customers = randomCust(3, 24);

//   },
//   render: function () {

//     let articleElem = document.createElement('article');
//     firstLocations.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < this.hours.length; i++) {
//       let liElem = document.createElement('li');
//       console.log(this.hours[i]);
//       liElem.innerText = `${this.hours[i]}: ${this.getCookies()} cookies`;
//       ulElem.appendChild(liElem);
//     }
//   }
// };

// let secondLocations = document.getElementById('secondStoreLocations');

// console.dir(secondLocations);

// let averageDubCookies = 3.7;

// let dubai = {
//   name: 'Dubai',
//   Customers: 0,
//   hours: ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   Cookies: 0,
//   getCookies: function () {
//     return Math.floor(randomCust(11, 38) * averageDubCookies);
//   },
//   getCust: function () {
//     this.Customers = randomCust(11, 38);

//   },
//   render: function () {

//     let articleElem = document.createElement('article');
//     secondLocations.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < this.hours.length; i++) {
//       let liElem = document.createElement('li');
//       console.log(this.hours[i]);
//       liElem.innerText = `${this.hours[i]}: ${this.getCookies()} cookies`;
//       ulElem.appendChild(liElem);
//     }
//   }
// };

// let averageParCookies = 2.3;

// let paris = {
//   name: 'Paris',
//   Customers: 0,
//   hours: ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   Cookies: 0,
//   getCookies: function () {
//     return Math.floor(randomCust(20, 38) * averageParCookies);
//   },
//   getCust: function () {
//     this.Customers = randomCust(20, 38);

//   },
//   render: function () {

//     let articleElem = document.createElement('article');
//     secondLocations.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < this.hours.length; i++) {
//       let liElem = document.createElement('li');
//       console.log(this.hours[i]);
//       liElem.innerText = `${this.hours[i]}: ${this.getCookies()} cookies`;
//       ulElem.appendChild(liElem);
//     }
//   }
// };

// let thirdLocations = document.getElementById('thirdStoreLocations');

// console.dir(thirdLocations);

// let averageLimaCookies = 4.6;

// let lima = {
//   name: 'Lima',
//   Customers: 0,
//   hours: ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   Cookies: 0,
//   getCookies: function () {
//     return Math.floor(randomCust(2, 16) * averageLimaCookies);
//   },
//   getCust: function () {
//     this.Customers = randomCust(2, 16);

//   },
//   render: function () {

//     let articleElem = document.createElement('article');
//     thirdLocations.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < this.hours.length; i++) {
//       let liElem = document.createElement('li');
//       console.log(this.hours[i]);
//       liElem.innerText = `${this.hours[i]}: ${this.getCookies()} cookies`;
//       ulElem.appendChild(liElem);
//     }
//   }
// };

// seattle.getCookies();
// seattle.getCust();
// seattle.render();

// tokyo.getCookies();
// tokyo.getCust();
// tokyo.render();

// dubai.getCookies();
// dubai.getCust();
// dubai.render();

// paris.getCookies();
// paris.getCust();
// paris.render();

// lima.getCookies();
// lima.getCust();
// lima.render();
