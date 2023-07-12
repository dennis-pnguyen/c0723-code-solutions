const a = 7;
const b = 8;
const c = 15;

const maximumValue = Math.max(a,b,c);
console.log('value of maximumValue:', maximumValue);

const heroes = ['Spider-Man', 'Iron Man', 'Wolverine', 'All-Might'];

const randomNumber = Math.random() * heroes.length;
const randomIndex = Math.floor(randomNumber);

console.log('value of randomIndex:', randomIndex);

const randomHero = heroes[randomIndex];
console.log('value of randomHero:', randomHero);

const library = [
    {
    title: 'Gone With the Wind',
    author: 'Margaret Mitchell'
},
{
    title: 'Jane Eyre',
    author: 'Charlotte Bronte'
},
{
    title: 'Pride and Prejudice',
    author: 'Jane Austen'
}
];

const lastBook = library.pop();
console.log('value of lastBook:', lastBook);

const firstBook = library.shift();
console.log('value of firstBook', firstBook);

var js = {
    title: 'JavaScript for Impatient Programmers',
    author: 'Dr. Axel Rauschmayer'
  };
var css = {
    title: 'CSS Secrets',
    author: 'Lea Verou'
  };

library.push(js);
library.unshift(css);
library.splice(1,1);
console.log('value of [library]:', library);

const fullName = 'Dennis Nguyen';
const firstAndLastname = fullName.split(' ');
console.log('value of firstAndLastName', firstAndLastname);

const firstName = firstAndLastname[0];
const sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);