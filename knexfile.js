// Update with your config settings.
require('dotenv').config()

module.exports = {

  client: 'pg',

  development: {
    client: 'pg',
    connection: 'postgres://localhost/capstone_backend'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};
