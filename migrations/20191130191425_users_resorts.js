
exports.up = function(knex) {
  return knex.schema.createTable('users_resorts', table => {
      table.increments('id').primary()
      table.integer('user_id').references('users.id')
      table.integer('resort_id').references('mountain_id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users_resorts')
};