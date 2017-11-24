import { cons } from 'hexlet-pairs';
import loadGame from '../game-engine';
import { getRand, isPrime } from '../utils';

const rules = '';

const qaGen = () => {
  const num = getRand(0, 20);
  const question = `Is this number prime? ${num}`;
  const answer = isPrime(num) ? 'yes' : 'no';

  const pair = cons(question, answer);
  return pair;
};

const start = () => loadGame(rules, qaGen);
export default start;
