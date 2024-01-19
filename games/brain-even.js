#!/usr/bin/env node

import readlineSync from 'readline-sync';
import helloUnknownName from '../src/cli.js';
import threeRoundsGame from '../src/index.js';

const playerName = helloUnknownName();

const thisNumberEven = () => {
  console.log('Answer "yes" if number even, otherwise answer "no".');
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
