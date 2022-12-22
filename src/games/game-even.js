import getRandom from '../random.js';
import startGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEvenNumber = (num) => (num % 2 === 0);
const gamedata = () => {
  const question = getRandom(1, 100);
  const answer = isEvenNumber(question) ? 'yes' : 'no';
  return [question, answer];
};

const initGameEven = () => {
  startGame(description, gamedata);
};

export default initGameEven;
