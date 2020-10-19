require('dotenv').config()

module.exports = {
    client: 'mysql',
    connection: {
        host: `${process.env.MYSQL_DATABASE_HOST}`,
        user: process.env.MYSQL_DATABASE_USERNAME,
        password: process.env.MYSQL_DATABASE_PASSWORD,
        database: process.env.MYSQL_DATABASE_DATABASE,
    }
}