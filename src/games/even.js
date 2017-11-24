import { cons } from 'hexlet-pairs';
import { loadGame } from '../game-engine';
import { getRand } from '../utils';

const rules = 'Answer "yes" if number even otherwise answer "no".';

const qaGen = () => {
  const isEven = arg => (arg % 2 === 0 ? 'yes' : 'no');
  const question = getRand(1, 100);
  const answer = isEven(question);
  const pair = cons(question, answer);
  return pair;
};

const start = () => loadGame(rules, qaGen);
export default start;
