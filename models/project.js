// const Knex = require('knex')
// const connection = require('../knexfile')
const { Model } = require('objection')
// const environment = process.env.NODE_ENV || 'development'
// const environmentConfig = connection[environment]
// const knexConnection = Knex(environmentConfig)

// Model.knex(knexConnection)

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