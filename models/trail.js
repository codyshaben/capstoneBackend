const Knex = require('knex')
const connection = require('../knexfile')
const { Model } = require('objection')
const environment = process.env.NODE_ENV || 'development'
const environmentConfig = connection[environment]
const knexConnection = Knex(environmentConfig)

Model.knex(knexConnection)


const request = require('request')


const allTrails = []

request('https://www.epicmix.com/vailresorts/sites/epicmix/api/mobile/terrain.ashx', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
    body.terrains.forEach(trail => {
      allTrails.push(trail) 
    });
})


class Trail extends Model {
    
    static get tableName() {
        return 'trails'
    }
    static get relationMappings() {
        const { Resort } = require('./resort')
        return {
            resorts: {
                relation: Model.BelongsToOneRelation,
                modelClass: Resort,
                join: {
                    from: 'trails.resort_id',
                    to: 'resorts.mountain_id'
                }
            }
        }
    }
}

module.exports = { Trail }