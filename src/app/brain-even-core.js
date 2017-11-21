import readlineSync from 'readline-sync';

const askName = () => {
  const actual = readlineSync.question('May I have your name? ');
  return actual;
};

const getRandomNumber = (min, max) => (Math.floor(Math.random() * (max - min))) + min;

const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

const checkAnswer = (question, answer) => {
  const correctAnswer = isEven(question);
  if (correctAnswer === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return false;
};

const askQuestion = () => {
  const minValue = 1; // minimum guess value
  const maxValue = 99; // maximum guess value
  const question = getRandomNumber(minValue, maxValue);

  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return checkAnswer(question, answer);
};

const askQuestions = (userName) => {
  for (let i = 0; i < 3; i += 1) {
    if (!askQuestion()) {
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

const starGame = () => {
  console.log();
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  console.log();
  const userName = askName();
  console.log(`Hello, ${userName}!`);
  askQuestions(userName);
};

export default starGame;
