const width = 6;
const height = 12;

const area = width * height;

console.log('value of area is:', area);
console.log('typeof area is:', typeof area);

const bill = 150;
const payment = 500;

const change = bill - payment;

console.log('value of change is:', change);
console.log('typeof change is:', typeof change);

const quizzes = 50;
const midterm =  150; 
const final = 200;

const grade = (quizzes + midterm + final) / 3;

console.log('value of grade is:', grade);
console.log('typeof grade is:', typeof grade);

const firstName = "Dennis";
const lastName = "Nguyen";
let fullName = firstName + ' ' + lastName;

console.log('value of fullName is:', fullName);
console.log('typeof fullName is:', typeof fullName);

const pH = 5;
const isAcidic = pH < 7; 

console.log('value of isAcidic is:', isAcidic);
console.log('typeof isAcidic is:', typeof isAcidic);

const headCount = 420;
const isSparta = headCount === 300;

console.log('value of isSparta is:', isSparta);
console.log('typeof isSparta is:', typeof isSparta);

let motto = fullName;
motto = fullName += ' is the GOAT!';

console.log('value of motto is:', motto);
console.log('typeof motto is:', typeof motto);