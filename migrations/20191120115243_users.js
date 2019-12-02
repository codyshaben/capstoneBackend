
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('username').notNullable().unique()
        table.string('email').notNullable()
        table.text('password').notNullable()
        table.timestamp('created_at')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
