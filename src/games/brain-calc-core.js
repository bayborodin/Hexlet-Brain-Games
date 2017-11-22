import { getAnswer, getRand, checkAnswer, endGameLoss, endGameWin, showGameTitle, askUserName } from '..';

const getOperator = () => {
  const operators = ['+', '-', '*', '/'];
  const idx = getRand(0, 3);

  return operators[idx];
};

const calc = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    case '/':
      return operand1 / operand2;
    default:
      return NaN;
  }
};

const askQuestion = () => {
  const a = getRand();
  const b = getRand();
  const op = getOperator();
  console.log(`Question: ${a} ${op} ${b}`);
  const answer = getAnswer();
  const rightAnswer = calc(a, b, op);
  const isCorrect = checkAnswer(answer, rightAnswer.toString());

  return isCorrect;
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

const startGame = () => {
  showGameTitle('What is the result of the expression?');
  const userName = askUserName();
  askQuestions(userName);
};

export default startGame;
