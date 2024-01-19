#!/usr/bin/env node

import readlineSync from 'readline-sync';
import helloUnknownName from '../src/cli.js';
import threeRoundsGame from '../src/index.js';

const playerName = helloUnknownName();

const calcThisHuman = () => {
  console.log('What is the result of the expression?');
  const randomNumberFromZeroToFifty = 51;
  const numberOfPossibleMathOperations = 3;
  const randomNumberOne = Math.floor(Math.random() * randomNumberFromZeroToFifty);
  const randomNumberTwo = Math.floor(Math.random() * randomNumberFromZeroToFifty);
  const mathOperation = Math.floor(Math.random() * numberOfPossibleMathOperations);

  let signForQuestion;
  if (mathOperation === 0) {
    signForQuestion = '+';
  } else if (mathOperation === 1) {
    signForQuestion = '-';
  } else {
    signForQuestion = '*';
  }

  let correctAnswerToTheQuestion;
  if (mathOperation === 0) {
    correctAnswerToTheQuestion = randomNumberOne + randomNumberTwo;
  } else if (mathOperation === 1) {
    correctAnswerToTheQuestion = randomNumberOne - randomNumberTwo;
  } else {
    correctAnswerToTheQuestion = randomNumberOne * randomNumberTwo;
  }

  let resultForGame;
  console.log(`Question: ${randomNumberOne} ${signForQuestion} ${randomNumberTwo}`);
  // Подсказка по ответу - console.log(correctAnswerToTheQuestion);
  const playerAnswer = readlineSync.question('Your answer: ');
  if (playerAnswer !== correctAnswerToTheQuestion.toString()) {
  // Очень был "приятно" удивлён, когда узнал, что ответы через readlinesync всегда строки
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswerToTheQuestion}'.\nLet's try again, ${playerName}!`);
    resultForGame = 'Defeat';
    return resultForGame;
  }
  resultForGame = 'Win';
  console.log('Correct!');
  return resultForGame;
};

threeRoundsGame(calcThisHuman, playerName);
