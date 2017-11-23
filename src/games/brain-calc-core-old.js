import { loadGame, getRand } from '../game-engine';

// Get a random operator
const getOperator = () => {
  const operators = ['+', '-', '*', '/'];
  const idx = getRand(0, 3);

  return operators[idx];
};

// Make calculations
const getFunc = (operator) => {
  let result = '';

  switch (operator) {
    case '+':
      result = args => args[0] + args[1];
      break;
    case '-':
      result = args => args[0] - args[1];
      break;
    case '*':
      result = args => args[0] * args[1];
      break;
    case '/':
      result = args => args[0] / args[1];
      break;
    default:
      result = 'Unknown operator';
  }

  return result;
};

const operator = getOperator();
const delimeter = ` ${operator} `;
const func = getFunc(operator);
const paramsCnt = 2;
const levels = 3;

const start = () => loadGame('What is the result of the expression?', func, levels, paramsCnt, delimeter);

export default start;
