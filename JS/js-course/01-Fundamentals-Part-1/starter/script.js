// Os códigos abaixo foram atividades realizadas durante o curso, ou seja, inclui erros propositais com fim de aprendizado.


/*
let country = "Brazil";
let continent = "South America";
let population = 209;
let isIsland = false;
let language;


console.log(country);
console.log(continent);
console.log(population);
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);


language = "Português";
console.log(language);
const RG = 032132143132;
const RG = 3213213123211312;

const thisYear = 2020;
const ageJoao = thisYear - 1990;
const ageMaria = thisYear - 1995;
console.log(ageJoao, ageMaria);


let metadeDaPopulação;
let outraMetade;

metadeDaPopulação = population / 2;
outraMetade = population / 2;
console.log(population);
console.log("Metade da população: " + metadeDaPopulação, "Outra metade: " + outraMetade);
population++;
console.log("Metade da população: " + metadeDaPopulação, "Outra metade: " + outraMetade);
if (population > 6) {
    console.log("Meu país possui uma população maior do que 6 milhões, temos atualmente: " + population);
}
else {
    console.log("Meu país possui uma população menor do que 6 milhões, temos atualmente: " + population);
}

if (population > 33) {
    console.log("Meu país possui uma população maior do que 33 milhões, temos atualmente: " + population);
}
else {
    console.log("Meu país possui uma população menor do que 33 milhões, temos atualmente: " + population);
}



let description = "O brasil está na América do Sul e seus 209 milhões de pessoas falam português.";
console.log(description);


let description = `o ${country} está na ${continent} e seus ${population} milhões de pessoas falam ${language}`;
console.log(description);

let diferenca = 121 - population;


if (population > 33) {
    console.log(`a população de ${country} está acima da média.`);
}
else {
    console.log(`a população de ${country} está  ${diferenca} milhões abaixo da média`)
}


let massMarks = 95;
let heightMarks = 1.88;
let massJohn = 85;
let heightJohn = 1.76;


let bmiMarks = massMarks / (heightMarks ** 2);
let bmiJohn = massJohn / (heightJohn ** 2);

if (bmiMarks > bmiJohn) {
    console.log(`O BMI de Marks(${bmiMarks}) é superior ao de John(${bmiJohn})`);
}
else {
    console.log(`O BMI de John (${bmiJohn}) é superior ao de Marks(${bmiMarks})`);
}


console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);


let numNeighbours = Number(prompt(`How many neighbour countries does your country have?`));

if (numNeighbours === 1) {
    console.log(`Only 1 border`);
}
else if (numNeighbours > 1) {
    console.log(`More than 1 border.`);
}
else {
    console.log(`No borders`);
}


//Resolução da questão
let pais = "Brasil";
let populacao = 40;
let linguagem = "inglês";
let ilha = false;

if (populacao < 50 && linguagem == "inglês" && ilha == false) {
    console.log(`Você deveria morar no ${pais}.`);
}
else {
    console.log(`O ${pais} não atende aos seus critérios.`);
}


//Resolução com input.
let meuPais = "Brasil";
let populacao = 209;
let linguagem = "português";
let ilha = false;


let populacaoDesejada = Number(prompt(`A população do país deve ser menor que: `));
let linguagemDesejada = prompt(`Insira a linguagem desejada: `);
let eIlha = prompt(`O país deve ser uma ilha? Insira sim ou não: `);
if (eIlha == "sim" || eIlha == "SIM" || eIlha == "Sim") {
    eIlha = true;
}
else if (eIlha == "não" || eIlha == "NÃO" || eIlha == "Não") {
    eIlha = false;
}
else {
    alert("Erro");
}


if (populacao < populacaoDesejada && linguagem == linguagemDesejada && ilha == false) {
    console.log(`Você deveria morar no ${meuPais}.`);
}
else {
    console.log(`O ${meuPais} não atende aos seus critérios.`);
}


let minimumScore = 100;
let dolphinsScoreOne = 97;
let dolphinsScoreTwo = 112;
let dolphinsScoreThree = 202;
let koalasScoreOne = 109;
let koalasScoreTwo = 95;
let koalasScoreThree = 200;
let koalasTotalScore = (koalasScoreOne + koalasScoreTwo + koalasScoreThree) / 3;
let dolphinsTotalScore = (dolphinsScoreOne + dolphinsScoreTwo + dolphinsScoreThree) / 3;

if (koalasTotalScore > dolphinsTotalScore && koalasTotalScore >= 100) {
    console.log("Koala venceu!");
}
else if (koalasTotalScore < dolphinsTotalScore && dolphinsTotalScore >= 100) {
    console.log("Dolphins venceu!");
}
else if (koalasTotalScore == dolphinsTotalScore && dolphinsTotalScore >= 100 && koalasTotalScore >= 100) {
    console.log("Empate! Os dois times venceram!");
}
else {
    console.log("Ninguém atingiu a pontuação minima de 100 pontos, ou seja, nenhum dos dois times venceu.");
}


let language = prompt("Qual a sua linguagem?");

switch(language)
{
    case "chines":
    case "mandarim":
        console.log(`Maior número de falantes nativos!`);
        break;
    case "espanhol":
        console.log("Segundo lugar com mais nativos falantes!");
        break;
    case "ingles":
        console.log(`Terceiro lugar`);
        break;
    case "indiano":
        console.log("Number 4");
        break;
    case "arabe":
        console.log(`Quinto lugar.`);
        break;
    default:
        console.log("Legal a sua lingua!");
    }


let population = 13;

population > 33 ? console.log(`A populacao do Brasil e maior que 33 milhoes`)  : console.log("A populacao do Brasil esta abaixo da media");


let conta = Number(prompt(`Qual o valor da conta?`));
let gorjeta = conta >= 50 && conta <= 300 ? gorjeta = conta * (20/100) : conta * (15/100);
let total = conta + gorjeta;
console.log(`A conta e de ${conta} reais, a gorjeta ${gorjeta} reais e o total e de: ${total} reais.`);
*/



