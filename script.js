'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const queryContent = (classType, content) => {
  document.querySelector(classType).textContent = content;
};

document.querySelector('.check').addEventListener('click', () => {
  const guessNumber = Number(document.querySelector('.guess').value);
  if (!guessNumber) {
    // document.querySelector('.message').textContent = '🛑 No number';
    queryContent('.message', '🛑 No number');
  } else if (guessNumber === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct number';
    queryContent('.message', '🎉 Correct number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //document.querySelector('.number').textContent = secretNumber;
    queryContent('.number', secretNumber);
    if (score > highscore) {
      highscore = score;
      //document.querySelector('.highscore').textContent = highscore;
      queryContent('.highscore', highscore);
    }
  } else if (guessNumber !== secretNumber) {
    if (score > 0) {
      //document.querySelector('.message').textContent = guessNumber > secretNumber ? '📈 Too high!' : '📉 Too low!';

      /*queryContent(
        '.message',
        guessNumber > secretNumber ? '📈 Too high!' : '📉 Too low!'
      );*/

      if (guessNumber > secretNumber && guessNumber - secretNumber <= 2) {
        queryContent('.message', 'A bit lower 😜');
      } else if (
        guessNumber < secretNumber &&
        secretNumber - guessNumber <= 2
      ) {
        queryContent('.message', 'A bit higher 😜');
      } else if (guessNumber > secretNumber) {
        queryContent('.message', '📈 Too high!');
      } else if (guessNumber < secretNumber) {
        queryContent('.message', '📉 Too low!');
      }
      score--;
      //document.querySelector('.score').textContent = score;
      queryContent('.score', score);
    }
  }
  if (score === 0)
    //document.querySelector('.message').textContent = '😥 You lost!';
    queryContent('.message', '😥 You lost!');
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector('.score').textContent = score;
  queryContent('.score', score);
  //document.querySelector('.number').textContent = '?';
  queryContent('.number', '?');
  //document.querySelector('.message').textContent = 'Start guessing...';
  queryContent('.message', 'Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
