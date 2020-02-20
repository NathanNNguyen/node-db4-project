
exports.up = function (knex) {
  return knex.schema
    // create ingredients table
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('ingredient_name', 128).notNullable();
    })

    // create recipes table
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('recipe_name', 128).notNullable();
    })

    // create instructions table
    .createTable('instructions', tbl => {
      tbl.increments();
      tbl.integer('step').notNullable()
      tbl.string('description').notNullable();

      // foreign key set up
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes'); // must define which table it refers to
    })

    .createTable('ingre-rec', tbl => {
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes');

      tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients');
      tbl.primary(['recipe_id', 'ingredient_id']);

      tbl.string('quantity').notNullable();
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
