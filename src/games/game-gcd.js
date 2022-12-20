import getRandom from '../random.js';
import startGame from '../index.js';

  const description = "Find the greatest common divisor of given numbers.";
  const findGcd = (valueFirst, valueSec) => {
    let maxDivisor = 1
    const minOperand = valueFirst <= valueSec ? valueFirst : valueSec;
    for (let i=1; i <= minOperand;  i += 1){
      if (valueFirst % i === 0 && valueSec % i === 0) {
        maxDivisor = i;
      }
    }
     return maxDivisor;
  };
  const gamedata = () => {
    const valueFirst = getRandom(1, 20);
    const valueSec = (1, 20);
    const question = `${valueFirst} ${valueSec}`;
    const corrAnswer = findGcd(valueFirst, valueSec);
      return [question, corrAnswer];
        };

        const randomGcdFind = () => {
          startGame(description, gamedata);
        }
        export default randomGcdFind;