import { loadGame } from '../game-engine';

const isEven = args => (args[0] % 2 === 0 ? 'yes' : 'no');
const paramsCnt = 1;
const levels = 3;
const start = () => loadGame('Answer "yes" if number even otherwise answer "no".', isEven, levels, paramsCnt);

export default start;
