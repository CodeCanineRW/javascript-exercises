const findTheOldest = function (people) {
    return people.reduce((older, person) => {
        const olderAge = getAge(older.yearOfDeath, older.yearOfBirth);
        const personAge = getAge(person.yearOfDeath, person.yearOfBirth);

        return (olderAge > personAge) ? older : person;
    });
};

const getAge = function (death, birth) {
    if(!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};



// const findTheOldest = function (array) {
//     const thisYear = new Date().getFullYear();

//     const oldestPerson  = array.reduce((older, person) => {
//         if (!older.yearOfDeath) {
//             older.yearOfDeath = thisYear;
//         };

//         if ((older.yearOfDeath - older.yearOfBirth) > (person.yearOfDeath - person.yearOfBirth)) {
//             return older;
//         }

//         if ((older.yearOfDeath - older.yearOfBirth) < (person.yearOfDeath - person.yearOfBirth)) {
//             return person;
//         }
//     });

//     return oldestPerson;
// };

// Do not edit below this line
module.exports = findTheOldest;
