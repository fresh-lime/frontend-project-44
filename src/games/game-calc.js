import getRandom from '../random.js';
import startGame from '../index.js';

const calculate = (action, valueFirst, valueSec) => {
  if (action === '+') {
    return valueFirst + valueSec;
  }
  if (action === '-') {
    return valueFirst - valueSec;
  }
  if (action === '*') {
    return valueFirst * valueSec;
  }
  return false;
};

const description = 'What is the result of the expression?';
const gamedata = () => {
  const valueFirst = getRandom(1, 20);
  const valueSec = getRandom(1, 20);
  const actions = ['+', '-', '*'];
  const action = actions[getRandom(0, 2)];
  const question = `${valueFirst} ${action} ${valueSec}`;
  const corrAnswer = calculate(action, valueFirst, valueSec);
  return [question, corrAnswer];
};

const gameCalc = () => {
  startGame(description, gamedata);
};

export default gameCalc;
