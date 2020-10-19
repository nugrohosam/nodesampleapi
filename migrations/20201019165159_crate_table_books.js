
exports.up = function (knex) {
    return knex.schema.createTable('books', function (table) {
        table.increments();
        table.string('name');
        table.string('year');
        table.string('author_id');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('books')
};
