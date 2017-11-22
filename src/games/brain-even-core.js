import { getAnswer, getRand, checkAnswer, showGameTitle, askUserName, runGameCycle } from '..';

const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

// Main game logic
const askQuestion = () => {
  const question = getRand();
  console.log(`Question: ${question}`);
  const answer = getAnswer();
  const correctAnswer = isEven(question);
  return checkAnswer(answer, correctAnswer);
};

// Game entry point
const starGame = () => {
  showGameTitle('Answer "yes" if number even otherwise answer "no".');
  const userName = askUserName();
  runGameCycle(userName, askQuestion);
};

export default starGame;
