import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const num1 = parseInt(process.argv[2]);
const func = process.argv[3].toLowerCase();
const num2 = parseInt(process.argv[4]);

switch (func) {
  case 'plus':
    console.log('result:', add(num1, num2));
    break;
  case 'minus':
    console.log('result:', subtract(num1, num2));
    break;
  case 'times':
    console.log('result:', multiply(num1, num2));
    break;
  case 'over':
    console.log('result:', divide(num1, num2));
}
