export const findGcd = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  const c = a % b;
  return findGcd(b, c);
};

// Get a random number from the given range
export const getRand = (min = 100, max = 10000) => (Math.floor(Math.random() * (max - min))) + min;