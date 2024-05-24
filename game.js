#!/usr/bin/env node

// eslint-disable-next-line import/no-extraneous-dependencies
const readlineSync = require('readline-sync');

const words = ['apple', 'banana', 'orange', 'grape', 'pineapple'];

function selectRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

function checkGuess(word, guess) {
  let result = '';
  for (let i = 0; i < word.length; i += 1) {
    if (word.includes(guess[i])) {
      if (word[i] === guess[i]) {
        result += guess[i].toUpperCase();
      } else {
        result += guess[i].toLowerCase();
      }
    } else {
      result += '-';
    }
  }
  return result;
}

function playWordle() {
  const word = selectRandomWord();
  let remainingAttempts = 5;

  console.log('Добро пожаловать в Wordle! Попробуйте угадать слово за 5 попыток.');

  while (remainingAttempts > 0) {
    const guess = readlineSync.question(`Попытка ${6 - remainingAttempts}: `);

    if (guess === word) {
      console.log(`Поздравляю! Вы угадали это слово "${word}" правильно.`);
      return;
    }
    const result = checkGuess(word, guess);
    console.log(result);

    remainingAttempts -= 1;
    if (remainingAttempts > 0) {
      console.log(`Оставшиеся попытки: ${remainingAttempts}`);
    } else {
      console.log(`Закончились попытки! Слово было "${word}".`);
    }
  }
}

playWordle();
