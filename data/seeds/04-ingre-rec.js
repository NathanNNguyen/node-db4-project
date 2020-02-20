
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingre-rec').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingre-rec').insert([
        { recipe_id: 1, ingredient_id: 1, quantity: '500grams' },
        { recipe_id: 1, ingredient_id: 2, quantity: '200grams' },
      ]);
    });
};
