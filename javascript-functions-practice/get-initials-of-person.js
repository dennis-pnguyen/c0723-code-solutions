/* exported getInitialsOfPerson */

function getInitialsOfPerson(person){
    const firstInital = person.firstName[0];
    const lastInitial = person.lastName[0];
    return firstInital + lastInitial;
}