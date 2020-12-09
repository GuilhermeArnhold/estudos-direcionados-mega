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
        return 15;
    }
    else {
        return 20;
    }
}
let bill = [125, 555, 44];
let tips = new Array();

tips = calcTipe(bill[0]);
console.log(tips);
*/