const knex = require('knex')({
    client: 'pg',
    connection: {
      host : 'localhost',
      user : 'development',
      password : 'development',
      database : 'test_db'
    }
  });

module.exports = knex;