
module.exports = (function() {


var knex = require('knex')({
  client: 'pg',
  version: '9.5',
  connection: {
    host : '127.0.0.1',
    user : 'vagrant',
    password : 'vagrant',
    database : 'test_db'
  },
    pool: {min: 0}
});

// const knex = require('knex')('options');
console.log("I am connected...I guess")


  function findPeople (name, callback) {
    console.log('Searching...')
    knex.from('famous_people')
        .select('first_name', 'last_name','birthdate')
        .where('first_name', name)
        .then((rows) => {
          callback(rows)
          knex.destroy();
        })

  }

  function insertPeople (FName, LName, bday) {
    let tempArr = [{first_name: FName,
                  last_name: LName,
                  birthdate: bday}];
    knex('famous_people')
        .insert(tempArr)
        .then()
    knex.destroy()
  }

  return {
    findPeople: findPeople,
    insertPeople: insertPeople
  }

})()