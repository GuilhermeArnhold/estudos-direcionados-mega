'use strict';

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

transformer(
  'Javascript is the best!',
  upperFirstWord
); /*
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
