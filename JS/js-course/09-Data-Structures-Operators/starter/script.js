'use strict';

const question = new Map([
  ['question', 'What is the best programming language in the world'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
]);

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursmap);
for (const [key, value] of question) {
  if (typeof (key === number)) {
    console.log(`Answer `);
  }
}
/*
const rest = new Map();
rest.set('name', 'classico italiano');
rest.set('João', 27, 'London');
//console.log(rest);

rest.set('open', 11);
rest.set('close', 23);
rest.set(true, 'Estamos fechados!');
rest.set(true, 'Estamos abertos!');
//console.log(rest.get('name'));
//console.log(rest.has('João'));
const time = 21;

console.log(rest.get(time > rest.get('open') && time < rest.get('close')));



const animais = new Set(['girafa', 'leao', 'Leão', 'Tigre', 'Girafa']);

animais.add('Rinoceronte');
console.log(animais);

const [girafa, ...resto] = animais;

console.log(girafa, resto);


const game = {
  team1: 'Bayern Munich',
  team2: 'Borussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [goal, player] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${player}`);
}

let average = 0;
const odds = Object.values(game.odds);
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}








const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const both = Object.entries(openingHours);
//console.log(both);

for (const [day, { open, close }] of both) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

/*const { names, openingHours, categories } = restaurant;
console.log(names, openingHours, categories);

const {
  fri: { open: o, close: a },
} = openingHours;

console.log(o, a);

let letras = ['a', 'b', 'c'];
let letras2 = [...letras, 'd', 'e', 'f'];
console.log(letras2);

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(1, 2, 3, 4, 5, 6, 7);
add(2, 4, 6);
add(9, 34, 2, 1);


const game = {
  team1: 'Bayern Munich',
  team2: 'Borussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const scoredNames = game.scored;

const [primeiro, ...resto] = scoredNames;
console.log(primeiro, resto);

const printGoals = function (...playerNames) {
  console.log(`${playerNames.length} Goals were scored!`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
team1 > team2 && console.log('It´s Probably that the team 1 will win!');
team1 < team2 && console.log('It´s Probably that the team 2 will win!');

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
*/
