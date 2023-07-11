let student = {
    firstName: "Dennis",
    lastName: "Nguyen",
    age: 32,
};

const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = "Technical Recruiter";

console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

let vehicle = {
    make: "Honda",
    model: "Accord",
    year: 2014,
};

vehicle['color'] = "black";
vehicle['isConvertible'] = false;

console.log('value of ["color"]:', vehicle['color']);
console.log('value of ["isConvertible"]', vehicle['isConvertible']);
console.log('value of vehicle', vehicle);

let pet = {
    name: "Domo",
    type: "Puggle",
};

delete pet.name;
delete pet["type"];

console.log('value of pet:', pet);