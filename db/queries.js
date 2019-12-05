var knex = require('./knex')

module.exports = {
  getUsers: function() {
    return knex('users').select()
  },
  getUserById: function(id) {
    return knex('users').select().where('id', id)
  }
}