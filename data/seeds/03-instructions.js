
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        { recipe_id: 1, step: 1, description: 'Prepare the chips and fish' },
        { recipe_id: 1, step: 2, description: 'Cook until finished' },
        { recipe_id: 2, step: 1, description: 'Prepare the cheese and chips' },
        { recipe_id: 2, step: 2, description: 'Start dipping' }
      ]);
    });
};
