const knex = require('./knex_connection'); 

const name = process.argv.slice(2)[0]; 

knex.select('*')
    .from('famous_people')
    .where('first_name', name).orWhere('last_name', name)
    .asCallback((err, person) => {
        let output = person;
        for (const person of output) {
            console.log(`${person.first_name} ${person.last_name}, born ${person.birthdate.toLocaleDateString()}`);
        }
    });

