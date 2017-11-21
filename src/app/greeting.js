import readlineSync from 'readline-sync';

const askName = () => {
  const actual = readlineSync.question('May I have your name? ');
  return actual;
};

export default askName;
