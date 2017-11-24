import { cons } from 'hexlet-pairs';
import { loadGame } from '../game-engine';
import { getRand } from '../utils';

const rules = 'What is the result of the expression?';

const qaGen = () => {
  const getOperator = () => {
    const operators = ['+', '-', '*', '/'];
    const idx = getRand(0, 3);
    return operators[idx];
  };

  const calc = (a, b, op) => {
    let result = 0;

    switch (op) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '*':
        result = a * b;
        break;
      case '/':
        result = a / b;
        break;
      default:
        result = 0;
    }

    return result;
  };

  const a = getRand(1, 9);
  const b = getRand(1, 9);
  const op = getOperator();

  const question = `${a} ${op} ${b}`;
  const answer = (calc(a, b, op)).toString();

  const pair = cons(question, answer);

  return pair;
};

const start = () => loadGame(rules, qaGen);

export default start;
