const Knex = require('knex')
const connection = require('../knexfile')
const { Model } = require('objection')

const knexConnection = Knex(connection)

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