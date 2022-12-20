import startGame from '../index.js';
import getRandom from '../random.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'
const isPrime = (randomNumber) => {
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) return false;
  }
  return true;
}

const gamedata = () => {  
  
  const number = getRandom();
  const question = getRandom(1, 50);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [question, answer];
};

const initGamePrime = () => {
  startGame(description, gamedata);
};

export default initGamePrime;
  