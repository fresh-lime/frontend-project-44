import readlineSync from 'readline-sync';

import startGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (num) => num % 2 === 0;

const gamedata = () => {
  const getRandom = (max = 100) => Math.round(Math.random() * max);
  const question = getRandom();
  const answer = isEvenNumber(question) ? 'yes' : 'no';
  return [question, answer];
};

const initGameEven = () => {
  startGame(description, gamedata);
};

export default initGameEven;

///startGame (description, gamedata);