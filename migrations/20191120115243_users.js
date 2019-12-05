
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
        table.increments('id')
        table.text('email').notNullable().unique()
        table.text('password').notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
