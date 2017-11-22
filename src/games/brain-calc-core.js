import { getAnswer, getRand, checkAnswer, showGameTitle, askUserName, runGameCycle } from '..';

// Get a random operator
const getOperator = () => {
  const operators = ['+', '-', '*', '/'];
  const idx = getRand(0, 3);

  return operators[idx];
};

// Make calculations
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

// Game logic
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

// Game entry point
const startGame = () => {
  showGameTitle('What is the result of the expression?');
  const userName = askUserName();
  runGameCycle(userName, askQuestion);
};

export default startGame;
