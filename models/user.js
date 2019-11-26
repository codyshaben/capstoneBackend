const Knex = require('knex')
const connection = require('../knexfile')
const { Model } = require('objection')
const environment = process.env.NODE_ENV || 'development'
const environmentConfig = connection[environment]
const knexConnection = Knex(environmentConfig)

Model.knex(knexConnection)

class User extends Model {

    static get tableName() {
        return 'users'
    }
    static get relationMappings() {
        const { Project } = require('./project')

        return {
            projects: {
                relation: Model.HasManyRelation,
                modelClass: Project,
                join: {
                    from: 'users.id',
                    to: 'projects.users_id'
                }
            }
        }
    }
}

module.exports = { User }