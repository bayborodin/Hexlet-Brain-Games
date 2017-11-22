import readlineSync from 'readline-sync';
import * as common from '..';

const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

const checkAnswer = (question, answer) => {
  const correctAnswer = isEven(question);
  if (correctAnswer === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return false;
};

const askQuestion = () => {
  const question = common.getRand();

  console.log(`Question: ${question}`);
  const answer = common.getAnswer();
  return checkAnswer(question, answer);
};

const askQuestions = (userName) => {
  for (let i = 0; i < 3; i += 1) {
    if (!askQuestion()) {
      common.endGameLoss(userName);
      return;
    }
  }
  common.endGameWin(userName);
};

const starGame = () => {
  console.log();
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  console.log();
  const userName = askName();
  console.log(`Hello, ${userName}!`);
  askQuestions(userName);
};

export default starGame;
