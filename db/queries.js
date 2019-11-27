const knex = require('./knex')

module.exports = {
    getUsers: () => {
        return knex('users').join('projects', {'users.id': 'users_id'})
    },
    getUserById: () => {
        return knex('users').select().where('id', id)
    },
}