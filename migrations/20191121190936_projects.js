
exports.up = function(knex) {
    return knex.schema.createTable('projects', table => {
        table.increments('id').primary()
        table.integer('mastercase_id')
        table.string('title')
        table.string('business_unit')
        table.text('description')
        table.text('pilot_date')
        table.integer('users_id').references('users.id')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('projects')
};
