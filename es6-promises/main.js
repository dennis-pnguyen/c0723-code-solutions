import takeAChance from './take-a-chance.js';

const promiseObj = takeAChance('Dennis');

promiseObj.then((value) => {
  console.log(value);
});

promiseObj.catch((error) => {
  console.log(error.message);
});
