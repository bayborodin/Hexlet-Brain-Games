import { cons } from 'hexlet-pairs';
import { loadGame } from '../game-engine';
import { getRand, findGcd } from '../utils';

const rules = 'Find the greatest common divisor of given numbers.';

const qaGen = () => {
  const a = getRand(1, 20);
  const b = getRand(1, 20);
  const question = `${a} ${b}`;
  const answer = findGcd(a, b).toString();
  const pair = cons(question, answer);

  return pair;
};

const start = () => loadGame(rules, qaGen);
export default start;
