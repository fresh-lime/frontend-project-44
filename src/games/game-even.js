import readlineSync from 'readline-sync';
import startGame from '../index.js';

const contRounds = 3;
const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const isEven = (num) => {
if (num %2 === 0) {return 'yes';}
else {return 'no'};
}
const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const startGame = () => {
  console.log("Welcome to the Brain Games!");
    let userName = readlineSync.question('May I have your name?');
    console.log(`Hello, ${userName}!`);
    console.log(description);

    const question = getRandom(1, 100);
    const corrAnswer = isEven(question);
    return [question, corrAnswer];
  };

const startGame = () => {

for (let i = 1; i <= contRounds; i += 1) {
    const [question, corrAnswer] = gamedata();
    console.log('Question:', question);
    const answer = readlineSync.question('Your answer: ');
    if (answer === corrAnswer.toString()) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${corrAnswer}'.`);
        console.log(`Let's try again, ${userName}!`);
        return false;
      }
    }
    console.log(`Congratulations, ${userName}!`);
    return true;
};
export default startGame;

///startGame (description, gamedata);