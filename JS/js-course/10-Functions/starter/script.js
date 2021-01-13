'use strict';

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('hey');
greeterHey('Jonas');
greeterHey('Steven');
greet('Hello')('Jonas');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Jonas');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Guilherme');
console.log(lufthansa);

const eurowings = {
  name: 'eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
book.call(eurowings, 23, 'João das Neves');
book.call(lufthansa, 239, 'Criston da silva');

const swiss = {
  name: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(
  swiss
); /*
const oneWord = function (str) {
  return str.replace(/ /g, ' ').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);

transformer('Javascript is the best!', oneWord);

const high5 = function () {
  console.log(`++`);
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

const flight = 'LH234';
const person = {
  name: 'Jonas',
  passportNumber: 796032,
};

const checkIn = function (flightNumber, passenger) {
  flightNumber = 'TH432';
  passenger.name = 'Mr' + 'Jonas';
  if (passenger.passportNumber === 396032) {
    alert('Check-in complete!');
  } else {
    alert(`Your passport number is incorrect!`);
  }
};

const newPassport = function (personRandom) {
  personRandom.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(person);
checkIn(flight, person);



const bookings = [];
const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  numPassengers = numPassengers || 1;
  price = price * numPassengers;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('FC9707', 200, 800);
*/
