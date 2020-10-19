require('dotenv').config()

var knex = require('knex')({
  client: 'mysql',
  connection: {
      host: process.env.MYSQL_DATABASE_HOST,
      username: process.env.MYSQL_DATABASE_USERNAME,
      password: process.env.MYSQL_DATABASE_PASSWORD,
      database: process.env.MYSQL_DATABASE_DATABASE,
  }
});

module.exports = knex