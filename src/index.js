import readlineSync from 'readline-sync';

const contRounds = 3;

const startGame = (description, gamedata) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(description);
  let corrAnswer = 0;

  while (corrAnswer < contRounds) {
    const [question, corrAnswer] = gamedata();
    console.log(`'Question:' ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === corrAnswer.toString()) {
      console.log('Correct!');
      
    } else {
       console.log (`'${answer}' is wrong answer ;(. Correct answer was '${corrAnswer}'.`);
       console.log(`Let's try again, ${userName}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return true;
};
export default startGame;