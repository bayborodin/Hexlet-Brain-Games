import * as common from '..';

const getOperator = () => {
  const operators = ['+', '-', '*', '/'];
  const idx = common.getRand(0, 3);

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
}

const askQuestion = () => {
  const a = common.getRand();
  const b = common.getRand();
  const op = getOperator();
  console.log(`Question: ${a} ${op} ${b}`);
  const answer = common.getAnswer();
  const rightAnswer = calc(a, b, op);
  const isCorrect = common.checkAnswer(answer, rightAnswer.toString());

  return isCorrect;
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

const startGame = () => {
  common.showGameTitle('What is the result of the expression?');
  const userName = common.askUserName();
  askQuestions(userName);
};

export default startGame;
