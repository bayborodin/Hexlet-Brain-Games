import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

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

// Run the main game cycle
const runGameCycle = (qagen, userName) => {
  for (let i = 0; i < 3; i += 1) {
    const qa = qagen();
    const question = car(qa);
    const correctAnswer = cdr(qa);
    console.log(`Question: ${question}`);
    const answer = getAnswer();
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      endGameLoss(userName);
      return;
    }
    console.log('Correct!');
  }
  endGameWin(userName);
};

const loadGame = (rules, qagen) => {
  showGameTitle(rules);
  const userName = askUserName();
  runGameCycle(qagen, userName);
};

export default loadGame;
