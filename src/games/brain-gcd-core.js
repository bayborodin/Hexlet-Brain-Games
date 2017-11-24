import { cons } from 'hexlet-pairs';
import { loadGame, getRand } from '../game-engine';

const rules = 'Find the greatest common divisor of given numbers.';

const qaGen = () => {
  const findGcd = (a, b) => {
    if (b === 0) {
      return Math.abs(a);
    }
    const c = a % b;
    return findGcd(b, c);
  };

  const a = getRand(1, 20);
  const b = getRand(1, 20);
  const question = `${a} ${b}`;
  const answer = findGcd(a, b).toString();
  const pair = cons(question, answer);

  return pair;
};

const start = () => loadGame(rules, qaGen);
export default start;
