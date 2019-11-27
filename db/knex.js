const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js')
const environmentConfig = config[environment]
const objection = require('objection')
const { Model } = objection.Model
const Knex = require('knex')
const connection = Knex(environmentConfig)

Model.knex(connection)

module.exports = Model.knex(connection)

