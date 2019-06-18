const db = require('./datahelpers/db');

name = process.argv.slice(2)[0]; 
db.query('SELECT * FROM famous_people WHERE first_name = $1 OR last_name = $1', [name], (err, res) => {
    if (err) throw err;
    let output = res.rows;
    for (const person of output) {
        console.log(`${person.first_name} ${person.last_name}, born ${person.birthdate.toLocaleDateString()}`);
    }
    db.end();
});