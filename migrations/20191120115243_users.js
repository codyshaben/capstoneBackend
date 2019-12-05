
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
        table.increments('id')
        table.string('username').notNullable().unique()
        table.string('email').notNullable().unique()
        table.text('password').notNullable()
        table.text('google_id')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
