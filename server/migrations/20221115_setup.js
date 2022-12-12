exports.up = function(knex) {
    return knex.schema
    .createTable('projects', function(table) {
        table.increments().primary()
        table.string('title', 255).notNullable()
        table.string('image', 255).notNullable()
        table.string('description', 255).notNullable()
        table.date('date').notNullable()
    })
    .createTable('posts', function(table) {
        table.increments().primary()
        table.string('title', 255).notNullable()
        table.string('image', 255).notNullable()
        table.string('description', 255).notNullable()
        table.date('date').notNullable()
    }) 
    .createTable('users', function(table) {
        table.increments().primary()
        table.string('login', 255).notNullable()
        table.string('password', 255).notNullable()
        table.string('email', 255).notNullable()
        table.boolean('member').notNullable()
    })
    .createTable('contacts', function(table) {
        table.increments().primary()
        table.string('email', 255).notNullable()
        table.string('description', 255).notNullable()
        table.string('socialnetworks').notNullable()
    })
    .createTable('aboutmes', function(table) {
        table.increments().primary()
        table.string('description', 255).notNullable()
        table.string('image', 255).notNullable()
    })
    .createTable('emails', function(table) {
        table.increments().primary()
        table.string('email', 255).notNullable()
        table.string('description', 255).notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('posts')
        .dropTable('projects')
        .dropTable('users')
        .dropTable('contacts')
        .dropTable('aboutmes')
        .dropTable('emails')
};