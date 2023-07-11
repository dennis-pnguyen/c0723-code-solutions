function convertMinutesToSeconds(minutes) {
    const seconds = minutes * 60;
    return seconds;
};

const convertMinutesToSecondsResult = convertMinutesToSeconds(7);
console.log('convertMinutestoSecondsResult:', convertMinutesToSecondsResult);

function greet(name) {
    return 'Hello, ' + name + '!'; 
};
const greetResult = greet('Clarice');
console.log('greetResult:', greetResult);

function getArea(width, height){
    const area = width * height;
    return area;
};

const areaResult = getArea(3,15);
console.log('areaResult:', areaResult);

function getFirstName(person){
 return person.firstName;
};

const person = {firstName:'Dennis', lastName:'Nguyen'};
const getFirstNameResult = getFirstName(person);
console.log('getFirstNameResult:', getFirstNameResult);

function getLastElement(array){
    const lastElement = array.length - 1;
    return array[lastElement];
};

const array = ['peaches', 'apples', 'blueberries'];
const getLastElementResult = getLastElement(array);
console.log('getLastElementResult:', getLastElementResult);

