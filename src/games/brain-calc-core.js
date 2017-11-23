import { loadGame, getRand } from '../game-engine';

// Get a random operator
const getOperator = () => {
  const operators = ['+', '-', '*', '/'];
  const idx = getRand(0, 3);

  return operators[idx];
};

// Make calculations
const getFunc = (operator) => {
  switch (operator) {
    case '+':
      return args => args[0] + args[1];
    case '-':
      return args => args[0] - args[1];
    case '*':
      return args => args[0] * args[1];
    case '/':
      return args => args[0] / args[1];
    default:
      return 'Unknown operator';
  }
};

const operator = getOperator();
const delimeter = ` ${operator} `; 
const func = getFunc(operator);
const paramsCnt = 2;
const levels = 3;

const start = () => loadGame('What is the result of the expression?', func, levels, paramsCnt, delimeter);

export default start;
