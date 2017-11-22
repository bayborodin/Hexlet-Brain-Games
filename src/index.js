import readlineSync from 'readline-sync';

export const showGameTitle = (title) => {
  console.log('Welcome to the Brain Games!');
  console.log(title);
  console.log();
};

export const askUserName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log();

  return name;
};

export const endGameWin = (name) => {
  console.log(`Congratulations, ${name}!`);
};

export const endGameLoss = (name) => {
  console.log(`Let's try again, ${name}`);
};

export const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const getRand = (min = 1, max = 9) => (Math.floor(Math.random() * (max - min))) + min;

export const checkAnswer = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return false;
};
