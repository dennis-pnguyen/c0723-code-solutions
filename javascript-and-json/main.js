const bookArray = [
  {
    isbn: '9780132585927',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
  },
  {
    isbn: '9789567364589',
    title: "Harry Potter and the Philosopher's Stone",
    author: 'J.K. Rowling',
  },
  {
    isbn: '9789579068123',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
  },
];
console.log('booksArray:', bookArray);
console.log('typeof bookArray:', typeof bookArray);

console.log('JSON:', JSON.stringify(bookArray));
console.log('typeof JSON:', typeof JSON.stringify(bookArray));

const string = '{"number-id": "69420","name": "Dennis"}';

console.log('JSON Student String:', string);
console.log('typeof JSON student string:', typeof string);

console.log('JSON parse:', JSON.parse(string));
console.log('typeof JSON parse:', typeof JSON.parse(string));
