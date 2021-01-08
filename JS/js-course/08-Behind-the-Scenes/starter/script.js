'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName} You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      console.log('You are a millenial!');
    } else {
      console.log('You aren´t a millenial!');
    }
  }
  printAge();

  return age;
}
const firstName = 'Jonas';
calcAge(1991);
