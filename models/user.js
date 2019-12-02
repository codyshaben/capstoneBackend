// const Knex = require('knex')
// const connection = require('../knexfile')
const { Model } = require('objection')
// const environment = process.env.NODE_ENV || 'development'
// const environmentConfig = connection[environment]
// const knexConnection = Knex(environmentConfig)

// Model.knex(knexConnection)

class User extends Model {

    static get tableName() {
        return 'users'
    }
    static get relationMappings() {
        const { Resort } = require('./resort')
        return {
            resorts: {
                relation: Model.ManyToManyRelation,
                modelClass: Resort,
                join: {
                    from: 'users.id',
                    through: {
                        from: 'users_resorts.resort_id',
                        to: 'users_resorts.user_id'
                    },
                    to: 'resorts.id'
                }
            }
        }
    }
}

module.exports = { User }