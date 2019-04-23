module.exports = (function() {


const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
});

  function findPeople (name, callback) {
    client.query(`
      SELECT first_name, last_name, birthdate
        FROM famous_people
        WHERE first_name = $1`, [name], (err, res) => {
          if (err) {
            callback([])
          } else {
            callback(res.rows)
          }
        }
    )
  }

  return {
    findPeople: findPeople
  }

})()