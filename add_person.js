const knex = require('./knex_connection'); 

const args = process.argv.slice(2);
console.log(args[2])

// knex('famous_people').insert({
//     first_name: args[0],
//     last_name: args[1],
//     birthdate: args[2]
// })
//     .asCallback((err, person) => {
//         console.log('Update Complete');
//     });
    knex('famous_people').insert({first_name: args[0], last_name: args[1], birthdate: args[2]})
    .then(() => {
      console.log("Person added!");
    })
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
      knex.destroy();
    });