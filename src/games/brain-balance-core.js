import { loadGame } from '../game-engine';

const isBalanse = (args) => {
  const digits = [];
  const str = args[0].toString();

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

const paramsCnt = 1;
const levels = 3;
const start = () => loadGame('Balance the given number.', isBalanse, levels, paramsCnt);

export default start;
