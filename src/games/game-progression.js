import startGame from '../index.js';
import getRandom from '../random.js';

const description = 'What number is missing in the progression?';

const getProgression = (startProgression, stepOfProgression, lengthProgression) => {
  const progression = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(startProgression + stepOfProgression * i);
  }
  return progression;
};
const gamedata = () => {
  const startProgression = getRandom(1, 30);
  const stepOfProgression = getRandom(1, 20);
  const lengthProgression = getRandom(5, 15);
  const hiddenElementIndex = getRandom(0, lengthProgression - 1);

  const progressionArr = getProgression(startProgression, stepOfProgression, lengthProgression);
  const corrAnswer = progressionArr[hiddenElementIndex]; // progression[hiddenElementIndex] = '..';
  const question = progressionArr.join(' ').replace(corrAnswer, '..');
  return [question, corrAnswer];
};
const randomProgression = () => {
  startGame(description, gamedata);
};

export default randomProgression;
