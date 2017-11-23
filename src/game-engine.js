import readlineSync from 'readline-sync';

// Show a game's banner
const showGameTitle = (title) => {
  console.log('Welcome to the Brain Games!');
  console.log(title);
  console.log();
};

// Get user's name
const askUserName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log();

  return name;
};

// Show the 'gameover' success message
const endGameWin = (name) => {
  console.log(`Congratulations, ${name}!`);
};

// Show the 'gameover' loss message
const endGameLoss = (name) => {
  console.log(`Let's try again, ${name}`);
};

// Get the user's answer
const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

// Get a random number from the given range
export const getRand = (min = 1, max = 9) => (Math.floor(Math.random() * (max - min))) + min;

// Check a user's answer
const checkAnswer = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return false;
};

const askQuestion = (func, paramsCnt, delimeter) => {
  let params = [];
  for (let i = 0; i < paramsCnt; i += 1) {
    params[i] = getRand();
  }
  if (paramsCnt === 1) {
    console.log(`Question: ${params[0]}`);
  } else {
    let str = '';
    for (let i = 0; i < paramsCnt; i += 1) {
      if (str === '') {
        str = params[i];
      } else {
        str = `${str}${delimeter}${params[i]}`;
      }
    }
    console.log(`Question: ${str}`);
  }

  const answer = getAnswer();
  const rightAnswer = func(params);
  const isCorrect = checkAnswer(answer, rightAnswer.toString());

  return isCorrect;
};

// Run the main game cycle
const runGameCycle = (levels, userName, func, paramsCnt, delimeter) => {
  for (let i = 0; i < levels; i += 1) {
    if (!askQuestion(func, paramsCnt, delimeter)) {
      endGameLoss(userName);
      return;
    }
  }
  endGameWin(userName);
};

export const loadGame = (title, func, levels, paramsCnt = 2, delimeter = ' ') => {
  showGameTitle(title);
  const userName = askUserName();
  runGameCycle(levels, userName, func, paramsCnt, delimeter);
};