#!/usr/bin/env node

import readlineSync from 'readline-sync';
import helloUnknownName from '../src/cli.js';
import threeRoundsGame from '../src/index.js';

const playerName = helloUnknownName();
console.log('Answer "yes" if number even, otherwise answer "no".');

const thisNumberEven = () => {
  const randomNumberFromZeroToTen = 11;
  const randomNumber = Math.floor(Math.random() * randomNumberFromZeroToTen);
  const correctAnswerToTheQuestion = () => (randomNumber % 2 === 0 ? 'yes' : 'no');
  let resultForGame;

  console.log(`Question: ${randomNumber}`);
  const playerAnswer = readlineSync.question('Your answer: ');
  if (playerAnswer !== correctAnswerToTheQuestion()) {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswerToTheQuestion()}'.\nLet's try again, ${playerName}!`);
    resultForGame = 'Defeat';
    return resultForGame;
  }
  resultForGame = 'Win';
  console.log('Correct!');
  return resultForGame;
};

threeRoundsGame(thisNumberEven, playerName);

/*
const thisNumberEven = () => {
  const playerName = helloUnknownName();
  const randomNumberFromZeroToTen = 11;
  const firstRandomNumber = Math.floor(Math.random() * randomNumberFromZeroToTen);
  const secondRandomNumber = Math.floor(Math.random() * randomNumberFromZeroToTen);
  const thirdRandomNumber = Math.floor(Math.random() * randomNumberFromZeroToTen);
  const correctAnswerToTheFirstQuestion = () => (firstRandomNumber % 2 === 0 ? 'yes' : 'no');
  const correctAnswerToTheSecondQuestion = () => (secondRandomNumber % 2 === 0 ? 'yes' : 'no');
  const correctAnswerToTheThirdQuestion = () => (thirdRandomNumber % 2 === 0 ? 'yes' : 'no');

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const firstAnswer = readlineSync.question(`Question: ${firstRandomNumber} `);
  if (firstAnswer !== correctAnswerToTheFirstQuestion()) {
    return console.log(`'${firstAnswer}' is wrong answer ;(. Correct answer was '${correctAnswerToTheFirstQuestion()}'.\nLet's try again, ${playerName}!`);
  }
  console.log('Correct!');
  const secondAnswer = readlineSync.question(`Question: ${secondRandomNumber} `);
  if (secondAnswer !== correctAnswerToTheSecondQuestion()) {
    return console.log(`'${secondAnswer}' is wrong answer ;(. Correct answer was '${correctAnswerToTheSecondQuestion()}'.\nLet's try again, ${playerName}!`);
  }
  console.log('Correct!');
  const thirdAnswer = readlineSync.question(`Question: ${thirdRandomNumber} `);
  if (thirdAnswer !== correctAnswerToTheThirdQuestion()) {
    return console.log(`'${thirdAnswer}' is wrong answer ;(. Correct answer was '${correctAnswerToTheThirdQuestion()}'.\nLet's try again, ${playerName}!`);
  }
  return console.log(`Correct!\nCongratulations, ${playerName}`);
};

export default thisNumberEven;

thisNumberEven();
*/