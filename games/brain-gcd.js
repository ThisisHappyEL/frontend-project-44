#!/usr/bin/env node

import readlineSync from 'readline-sync';
import helloUnknownName from '../src/cli.js';
import threeRoundsGame from '../src/index.js';

const playerName = helloUnknownName();

const brotherhoodNOD = () => {
  console.log('Find the greatest common divisor of given numbers.');
  const randomNumberFromZeroToFifty = 49;
  const antiZero = 1;
  const randomNumberOne = Math.floor(Math.random() * randomNumberFromZeroToFifty + antiZero);
  const randomNumberTwo = Math.floor(Math.random() * randomNumberFromZeroToFifty + antiZero);
  let theSmallerOfTwoNumbers;
  let resultForGame;

  if (randomNumberOne < randomNumberTwo) {
    theSmallerOfTwoNumbers = randomNumberOne;
  } else {
    theSmallerOfTwoNumbers = randomNumberTwo;
  }
  const searchGCDCorrectAnswer = () => {
    for (let i = theSmallerOfTwoNumbers; i >= 1; i -= 1) {
      if (randomNumberOne % i === 0 && randomNumberTwo % i === 0) {
        return i;
      }
    }
    return 1;
  };

  const correctAnswerToTheQuestion = searchGCDCorrectAnswer();

  console.log(`Question: ${randomNumberOne} ${randomNumberTwo}`);
  // Правильный ответ. console.log(correctAnswerToTheQuestion);
  const playerAnswer = readlineSync.question('Your answer: ');
  if (playerAnswer !== correctAnswerToTheQuestion.toString()) {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswerToTheQuestion}'.\nLet's try again, ${playerName}!`);
    resultForGame = 'Defeat';
    return resultForGame;
  }
  resultForGame = 'Win';
  console.log('Correct!');
  return resultForGame;
};

threeRoundsGame(brotherhoodNOD, playerName);
