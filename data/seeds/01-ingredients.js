
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      return knex('ingredients').insert([
        { ingredient_name: 'fish' },
        { ingredient_name: 'chips' },
        { ingredient_name: 'cheese' }
      ]);
    });
};
