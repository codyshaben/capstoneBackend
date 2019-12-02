const Knex = require('knex')
const connection = require('../knexfile')
const { Model } = require('objection')
const environment = process.env.NODE_ENV || 'development'
const environmentConfig = connection[environment]
const knexConnection = Knex(environmentConfig)



Model.knex(knexConnection)

class Resort extends Model {
    
    static get tableName() {
        return 'resorts'
    }
    static get relationMappings() {
        const { User } = require('./user')
        return {
            users: {
                relation: Model.ManyToManyRelation,
                modelClass: User,
                join: {
                    from: 'resorts.id',
                    through: {
                        from: 'users_resorts.user_id',
                        to: 'users_resorts.resort_id'
                    },
                    to: 'users.id'
                }
            }
        }
    }
}

module.exports = { Resort }
