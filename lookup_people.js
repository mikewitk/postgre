// const peopledb = require('./test_script')
const peopledb = require('./knex_people')

const famousName = process.argv[2];

// peopledb.findPeople(famousName,(result) => {
//   console.log('Searching...')
//   console.log('Found', result.length,'person(s) by the name',famousName);
//   result.forEach( (row, index) => {
//     console.log('-',index + 1, ':', row.first_name, row.last_name, 'born', row.birthdate)
//   })


peopledb.findPeople(famousName,(result) => {
  console.log('Searching...')
  console.log('Found', result.length,'person(s) by the name',famousName);
  result.forEach( (row, index) => {
    console.log('-',index + 1, ':', row.first_name)
  })

})