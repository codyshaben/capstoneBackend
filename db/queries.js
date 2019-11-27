// const knex = require('./knex')

// module.exports = {
//     getUsers: () => {
//         return knex('users')
//             .join('projects','users.id', '=', 'projects.users_id')
//             .select('users.username', 'projects')
//     },
//     getUserById: () => {
//         return knex('users').select().where('id', id)
//     },
// }