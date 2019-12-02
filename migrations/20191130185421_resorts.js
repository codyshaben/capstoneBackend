
exports.up = function(knex) {
  return knex.schema.createTable('resorts', table => {
    table.increments('id').primary()
    table.string('name')
    table.integer('mountain_id').unique()
    table.string('logo')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('resorts')
};
