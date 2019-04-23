
module.exports = (function() {

const options = {
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'vagrant',
        password: 'vagrant',
        database: 'test_db'
    }
}

const knex = require('knex')('options');



  function findPeople (name, callback) {

    knex.select('first_name').from('famous_people')
        .where('first_name', '=', name)


  }

  return {
    findPeople: findPeople
  }

})()