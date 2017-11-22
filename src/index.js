import readlineSync from 'readline-sync';

// Show a game's banner
export const showGameTitle = (title) => {
  console.log('Welcome to the Brain Games!');
  console.log(title);
  console.log();
};

// Get user's name
export const askUserName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log();

  return name;
};

// Show the 'gameover' success message
export const endGameWin = (name) => {
  console.log(`Congratulations, ${name}!`);
};

// Show the 'gameover' loss message
export const endGameLoss = (name) => {
  console.log(`Let's try again, ${name}`);
};

// Get the user's answer
export const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

// Get a random number from the given range
export const getRand = (min = 1, max = 9) => (Math.floor(Math.random() * (max - min))) + min;

// Check a user's answer
export const checkAnswer = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return false;
};

// Run the main game cycle
export const runGameCycle = (userName, questionFunc) => {
  for (let i = 0; i < 3; i += 1) {
    if (!questionFunc()) {
      endGameLoss(userName);
      return;
    }
  }
  endGameWin(userName);
};
