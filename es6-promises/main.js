import takeAChance from './take-a-chance.js';

const promiseObj = takeAChance('Dennis');

promiseObj
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error.message);
  });
