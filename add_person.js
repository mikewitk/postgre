const peopledb = require('./knex_people')

const addPeople_firstName = process.argv[2];
const addPeople_lastName = process.argv[3];
const addPeople_birthDate = process.argv[4];

// console.log(addPeople_firstName)
// console.log(addPeople_lastName)
// console.log(addPeople_birthDate)

peopledb.insertPeople(addPeople_firstName, addPeople_lastName, addPeople_birthDate)