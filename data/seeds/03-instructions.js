
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        { recipe_id: 1, step: 1, description: 'Prepare the food' },
        { recipe_id: 1, step: 2, description: 'Cook until finished' }
      ]);
    });
};
