import { getAnswer, getRand, checkAnswer, showGameTitle, askUserName, runGameCycle, findGcd } from '..';

// Game logic
const askQuestion = () => {
  const a = getRand(0, 20);
  const b = getRand(0, 20);
  console.log(`Question: ${a} ${b}`);
  const answer = getAnswer();
  const rightAnswer = findGcd(a, b);
  const isCorrect = checkAnswer(answer, rightAnswer.toString());

  return isCorrect;
};

// Game entry point
const startGame = () => {
  showGameTitle('Find the greatest common divisor of given numbers.');
  const userName = askUserName();
  runGameCycle(userName, askQuestion);
};

export default startGame;
