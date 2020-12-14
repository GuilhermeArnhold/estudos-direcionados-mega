'use strict';

/*

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} milion people and your capital city is ${capitalCity}`;

}


let countryOne = describeCountry("Brazil", 209, "Brasilia");
let countryTwo = describeCountry("China", 328, "Washington");
let countryThree = describeCountry("Russia", 144, "Moscou");
console.log(countryOne);
console.log(countryTwo);
console.log(countryThree);



function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
};

const percentualNoruega = percentageOfWorld1(5);
const percentualAlemanha = percentageOfWorld1(83);
const percentualPaquistao = percentageOfWorld1(212);
console.log(percentualNoruega, percentualAlemanha, percentualPaquistao);


let populations = [209, 44, 50, 65];
console.log(populations.length);

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}



if (populations.length == 4) {
    console.log(true);
}
else {
    console.log(false);
}
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);



const percentageOfWorld3 = population => {
    return (population / 7900) * 100;
}

console.log(percentageOfWorld3(50));



const calcAverage = (scoreOne, scoreTwo, scoreThree) => (scoreOne + scoreTwo + scoreThree) / 3;
let avgDolphins = calcAverage(85, 54, 41);
let avgKoala = calcAverage(23, 34, 27);


const checkWinner = function (avgDolphins, avgKoala) {
    if (avgDolphins >= avgKoala * 2) {
        console.log(`Dolphins Wins! Total Score Dolphins(${avgDolphins}) Total Score Koala(${avgKoala})`);
    }
    else if (avgKoala >= avgDolphins * 2) {
        console.log(`Koala Wins! Total Score Koala(${avgKoala}) Total Score Dolphins(${avgDolphins})`);
    }
    else {
        console.log(`No one Wins!`);
    }
}

checkWinner(avgDolphins, avgKoala);




const describePopulation = (country, population) => {
    let percentagePopulation = percentageOfWorld1(population);
    return `${country} has ${population} milion people, which is about ${percentagePopulation}% of the world`;
}

const CountryBrasil = describePopulation("Brasil", 209);
const CountryPortugal = describePopulation("Portugal", 10);
const CountryItalia = describePopulation("Itália", 60);
console.log(CountryBrasil);
console.log(CountryPortugal);
console.log(CountryItalia);

function percentageOfWorld1(populations) {
    return (populations / 7900) * 100;
}

let populations = [209, 10, 60, 83];

if (populations.length === 4) {
    console.log(true);
}
else {
    console.log(false);
}


let percentage = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3]), percentageOfWorld1(populations[length - 1])];
console.log(percentage);


const neighbours = ["Brasil", "Suriname"];

neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
    console.log("Probably not a central European Country");
}

neighbours[neighbours.indexOf("Suriname")] = "Japan";
console.log(neighbours);




const calcTipe = function (bill) {
    if (bill > 50 && bill < 300) {
        return bill * 0.15;
    }
    else {
        return bill * 0.2;
    }
}


const bills = [125, 555, 44]
let tips = [calcTipe(bills[0]), calcTipe(bills[1]), calcTipe(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);


const myCountry = {
    country: "Brasil",
    capital: "Brasilia",
    language: "Portuguese",
    population: 209,
    neighbours: ["Argentina", "Bolívia", "Colômbia", "Guiana", "Guiana Francesa", "Paraguai", "Peru", "Suriname", "Uruguai", "Venezuela"]
};

myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] += 2;
console.log(myCountry.population);
console.log(`${myCountry.country} has ${myCountry.population} milion ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);



const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthyear: 1991,
    job: "Teacher",
    hasDriverLicense: true,

    calcAge: function () {
        this.age = 2037 - 1991;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriverLicense ? "a" : "no"} driver´s license.`;
    }
};
console.log(jonas.getSummary());



const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBmi: function () {
        this.bmi = this.mass / this.height ** 2;
    }
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,

    calcBmi: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }

};


mark.calcBmi();
john.calcBmi();
if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}´s BMI (${john.bmi}) is higher than ${mark.fullname} (${mark.bmi})`);
}
else {
    console.log(`${mark.fullName}´s BMI (${mark.bmi}) is higher than ${john.fullName} (${john.bmi})`);
}


const myCountry = {
    country: "Brasil",
    capital: "Brasilia",
    language: "Portuguese",
    population: 209,
    neighbours: ["Argentina", "Bolívia", "Colômbia", "Guiana", "Guiana Francesa", "Paraguai", "Peru", "Suriname", "Uruguai", "Venezuela"],

    describe: function () {
        console.log((`${this.country} has ${this.population} milion ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital} `));
    },
    checkIsland: function () {
        this.island = this.neighbours.length == 0 ? true : false;
    }
};
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

for (let rep = 0; rep <= 50; rep++) {
    console.log(`Vote number ${rep} is currently voting!`);
}


let populations = [209, 10, 60, 83];

function percentageOfWorld1(populations) {
    return (populations / 7900) * 100;
}

let percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    percentages2[i] = percentageOfWorld1(populations[i]);
    console.log(percentages2[i]);
}


//Alternativo

let populations = [209, 10, 60, 83];

function percentageOfWorld1(populations) {
    return (populations / 7900) * 100;
}

let percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld1(populations[i]);
    percentages2.push(perc);
}
console.log(percentages2);

let listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Espanha"],
    ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbours: ${listOfNeighbours[i][j]}`);
    }
}
*/