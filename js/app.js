'use strict';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

let firstLocations = document.getElementById('firstStoreLocations');

console.dir(firstLocations);

function randomCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let averageSeaCookies = 6.3;

let seattle = {
  name: 'Seattle',
  Customers: 0,
  hours: ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  Cookies: 0,
  getCookies: function () {
    return Math.floor(randomCust(23, 65) * averageSeaCookies);
  },
  getCust: function () {
    this.Customers = randomCust(23, 65);

  },
  render: function () {

    let articleElem = document.createElement('article');
    firstLocations.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.hours.length; i++) {
      let liElem = document.createElement('li');
      console.log(this.hours[i]);
      liElem.innerText = `${this.hours[i]}: ${this.getCookies()} cookies`;
      ulElem.appendChild(liElem);
    }
  }
};

let averageTokCookies = 1.2;

let tokyo = {
  name: 'Tokyo',
  Customers: 0,
  hours: ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  Cookies: 0,
  getCookies: function () {
    return Math.floor(randomCust(3, 24) * averageTokCookies);
  },
  getCust: function () {
    this.Customers = randomCust(3, 24);

  },
  render: function () {

    let articleElem = document.createElement('article');
    firstLocations.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.hours.length; i++) {
      let liElem = document.createElement('li');
      console.log(this.hours[i]);
      liElem.innerText = `${this.hours[i]}: ${this.getCookies()} cookies`;
      ulElem.appendChild(liElem);
    }
  }
};

let secondLocations = document.getElementById('secondStoreLocations');

console.dir(secondLocations);

let averageDubCookies = 3.7;

let dubai = {
  name: 'Dubai',
  Customers: 0,
  hours: ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  Cookies: 0,
  getCookies: function () {
    return Math.floor(randomCust(11, 38) * averageDubCookies);
  },
  getCust: function () {
    this.Customers = randomCust(11, 38);

  },
  render: function () {

    let articleElem = document.createElement('article');
    secondLocations.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.hours.length; i++) {
      let liElem = document.createElement('li');
      console.log(this.hours[i]);
      liElem.innerText = `${this.hours[i]}: ${this.getCookies()} cookies`;
      ulElem.appendChild(liElem);
    }
  }
};

let averageParCookies = 2.3;

let paris = {
  name: 'Paris',
  Customers: 0,
  hours: ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  Cookies: 0,
  getCookies: function () {
    return Math.floor(randomCust(20, 38) * averageParCookies);
  },
  getCust: function () {
    this.Customers = randomCust(20, 38);

  },
  render: function () {

    let articleElem = document.createElement('article');
    secondLocations.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.hours.length; i++) {
      let liElem = document.createElement('li');
      console.log(this.hours[i]);
      liElem.innerText = `${this.hours[i]}: ${this.getCookies()} cookies`;
      ulElem.appendChild(liElem);
    }
  }
};

let thirdLocations = document.getElementById('thirdStoreLocations');

console.dir(thirdLocations);

let averageLimaCookies = 4.6;

let lima = {
  name: 'Lima',
  Customers: 0,
  hours: ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  Cookies: 0,
  getCookies: function () {
    return Math.floor(randomCust(2, 16) * averageLimaCookies);
  },
  getCust: function () {
    this.Customers = randomCust(2, 16);

  },
  render: function () {

    let articleElem = document.createElement('article');
    thirdLocations.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.hours.length; i++) {
      let liElem = document.createElement('li');
      console.log(this.hours[i]);
      liElem.innerText = `${this.hours[i]}: ${this.getCookies()} cookies`;
      ulElem.appendChild(liElem);
    }
  }
};

seattle.getCookies();
seattle.getCust();
seattle.render();

tokyo.getCookies();
tokyo.getCust();
tokyo.render();

dubai.getCookies();
dubai.getCust();
dubai.render();

paris.getCookies();
paris.getCust();
paris.render();

lima.getCookies();
lima.getCust();
lima.render();
