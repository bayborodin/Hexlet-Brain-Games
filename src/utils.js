export const findGcd = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  const c = a % b;
  return findGcd(b, c);
};

export const getRand = (min = 100, max = 10000) => (Math.floor(Math.random() * (max - min))) + min;

export const isPrime = (num, i = 2) => {
  if (num < 2) {
    return false;
  } else if (num === 2) {
    return true;
  } else if (num % i === 0) {
    return false;
  } else if (i < (num / 2)) {
    return isPrime(num, i + 1);
  }

  return true;
};

export const getProgression = (begin, step, length) => {
  const sequence = [];

  const iterate = (b, s, l, acc) => {
    let ib = b;
    let il = l;

    if (il !== 0) {
      acc.push(ib);
      ib += s;
      il -= 1;

      iterate(ib, s, il, acc);
    }

    return acc;
  };

  return iterate(begin, step, length, sequence);
};
