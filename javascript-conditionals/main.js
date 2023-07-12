/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */


function isUnderFive(number){
    if (number < 5 ) {
        return true;
    } else {
        return false;
    }
};

function isEven(number){
    if ((number % 2) == 0){
        return true;
    } else {
        return false;
    }
};

function startsWithJ(string){
    if (string[0] === 'J'){
        return true;
    } else {
        return false;
    }
};

function isOldEnoughToDrink(person){
    if (person.age >= 21){
        return true;
    } else {
        return false;
    }
};

function isOldEnoughToDrive(person){
    if (person.age >= 16){
        return true;
    } else {
        return false;
    }
};

function isOldEnoughToDrinkAndDrive(person){
    if (person) {
        return false;
    }
};

function categorizeAcidity(pH){
    if (pH === 7){
        return 'neutral';
    } else if (pH >= 0 && pH < 7) {
        return 'acid';
    } else if (pH > 7 && pH <= 14) {
        return 'base';
    } else {
        return 'invalid pH level';
    }
    };


function introduceWarnerBro(name){
    switch (name){
        case 'wakko':
        case 'yakko':
            return "We're the Warner brothers!";
        case 'dot':
            return "I'm cute~";
       default:
            return "Goodnight everybody!";
    }
};

function recommendMovie(genre){
    switch (genre){
        case 'action':
            return 'The Great Train Robbery';
        case 'comedy':
             return 'Rush Hour';
        case 'horror':
             return 'Insidious';
        case 'drama':
            return 'The Whale';
        case 'musical':
            return 'High School Musical';
        case 'sci-fi':
            return 'Prometheus';
        default:
            return "Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi";
        
    }
};
