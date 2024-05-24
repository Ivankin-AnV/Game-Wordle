const words = ["apple", "banana", "orange", "grape", "melon", "pear"];

const getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
}

const checkGuess = (word, guess) => {
  const wordChars = word.split("");
  const guessChars = guess.split("");
  
  let result = "";
  
  for (let i = 0; i < wordChars.length; i++) {
    if (wordChars[i] === guessChars[i]) {
      result += wordChars[i];
    } else if (wordChars.includes(guessChars[i])) {
      result += "-";
    } else {
      result += "*";
    }
  }
  
  return result;
}

const playWordle = () => {
  const wordToGuess = getRandomWord();
  console.log("Welcome to Wordle! Try to guess the 5-letter word.");
  
  let attempts = 0;
  let guessedWord = "";
  
  while (attempts < 5 && guessedWord !== wordToGuess) {
    console.log(`Attempt ${attempts + 1}:`);
    guessedWord = readlineSync.question("Enter your guess: ");
    
    const result = checkGuess(wordToGuess, guessedWord);
    
    console.log(result);
    attempts++;
  }
  
  if (guessedWord === wordToGuess) {
    console.log("Congratulations! You guessed the word correctly.");
  } else {
    console.log(`Sorry, you ran out of attempts. The word was ${wordToGuess}.`);
  }
}

playWordle();
