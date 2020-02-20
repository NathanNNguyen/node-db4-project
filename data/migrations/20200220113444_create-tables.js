
exports.up = function (knex) {
  return knex.schema
    // create ingredients table
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('i_name', 128).notNullable();
    })

    // create recipes table
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('r_name', 128).notNullable();
    })

    // create instructions table
    .createTable('instructions', tbl => {
      tbl.increments();
      tbl.integer('description').notNullable().unique();

      // foreign key set up
      tbl.integer('r_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes'); // must define which table it refers to
    })

    .createTable('ingre-rec', tbl => {
      tbl.integer('r_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes');

      tbl.integer('i_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients');
      tbl.primary(['r_id', 'i_id']);

      tbl.integer('quantity').notNullable();
    })
};

exports.down = function (knex) {
  // Dropping must be reserved the order of creation
  return knex.schema
    .dropTableIfExists('ingre-rec')
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
};
