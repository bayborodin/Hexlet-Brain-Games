import { cons } from 'hexlet-pairs';
import { loadGame, getRand } from '../game-engine';

const rules = 'Balance the given number.';

const qaGen = () => {
  const getBalance = (arg) => {
    const digits = [];
    const str = arg.toString();

    const balanceArray = (arr) => {
      let newArr = [];
      newArr = arr;
      const len = newArr.length;
      newArr.sort();

      if (newArr[len - 1] - newArr[0] > 1) {
        const delta = Math.floor((newArr[len - 1] - newArr[0]) / 2);
        newArr[0] += delta;
        newArr[len - 1] -= delta;
        balanceArray(newArr);
      }

      return newArr;
    };

    for (let i = 0; i < str.length; i += 1) {
      digits[i] = parseInt(str[i], 10);
    }

    const balancedArray = balanceArray(digits);

    return balancedArray.join('');
  };

  const question = getRand(1, 999);
  const answer = getBalance(question);
  const pair = cons(question, answer);
  return pair;
};

const start = () => loadGame(rules, qaGen);
export default start;
