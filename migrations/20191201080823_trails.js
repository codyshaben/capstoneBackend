
exports.up = function(knex) {
  return knex.schema.createTable('trails', table => {
    table.increments('id').primary()
    table.integer('resort_id').references('resorts.mountain_id')
    table.string('groomed')
    table.string('trail_name')
    table.integer('trail_type')
    table.string('status')
    table.string('terrain_name')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('trails')
};
