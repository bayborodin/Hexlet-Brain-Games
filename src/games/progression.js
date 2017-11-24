import { cons } from 'hexlet-pairs';
import loadGame from '../game-engine';
import { getRand, getProgression } from '../utils';

const rules = 'What number is missing in this progression?';

const qaGen = () => {
  const length = 10;
  const begin = getRand(1, 10);
  const step = getRand(1, 5);
  const missingIndex = getRand(1, length - 1);

  const progression = getProgression(begin, step, length);
  const answer = progression[missingIndex].toString();

  progression[missingIndex] = '..';

  const question = progression.join(' ');

  const pair = cons(question, answer);
  return pair;
};

const start = () => loadGame(rules, qaGen);
export default start;
