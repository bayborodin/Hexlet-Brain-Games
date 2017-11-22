import { getAnswer, getRand, checkAnswer, endGameLoss, endGameWin, showGameTitle, askUserName } from '..';

const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

const askQuestion = () => {
  const question = getRand();
  console.log(`Question: ${question}`);
  const answer = getAnswer();
  const correctAnswer = isEven(question);
  return checkAnswer(answer, correctAnswer);
};

const askQuestions = (userName) => {
  for (let i = 0; i < 3; i += 1) {
    if (!askQuestion()) {
      endGameLoss(userName);
      return;
    }
  }
  endGameWin(userName);
};

const starGame = () => {
  showGameTitle('Answer "yes" if number even otherwise answer "no".');
  const userName = askUserName();
  askQuestions(userName);
};

export default starGame;
