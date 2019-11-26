const Knex = require('knex')
const connection = require('../knexfile')
const { Model } = require('objection')

const knexConnection = Knex(connection)

Model.knex(knexConnection)

class Project extends Model {
    static get tableName() {
        return 'projects'
    }
    static get relationMappings() {
        const { User } = require('./user')
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'projects.users_id',
                    to: 'users.id'
                }
            }
        }
    }
}

module.exports = { Project }