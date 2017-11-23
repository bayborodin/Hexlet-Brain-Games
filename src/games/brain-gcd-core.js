import { loadGame } from '../game-engine';

// Find the greatest common divisor
const findGcd = (args) => {
  if (args[1] === 0) {
    return Math.abs(args[0]);
  }
  const newArgs = [];
  newArgs.push(args[1]);
  newArgs.push(args[0] % args[1]);
  return findGcd(newArgs);
};

const paramsCnt = 2;
const levels = 3;

const start = () => loadGame('Find the greatest common divisor of given numbers.', findGcd, levels, paramsCnt);

export default start;
