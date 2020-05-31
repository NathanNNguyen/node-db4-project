const db = require('../db-config.js');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  // getRecipeByIngredient,
}

function getRecipes() {
  return db('recipes')
}

function getShoppingList(recipe_id) {
  return db('ingre-rec as ir')
    .join('recipes as r', 'ir.recipe_id', 'r.id')
    .join('ingredients as i', 'ir.ingredient_id', 'i.id')
    .select('r.recipe_name', 'i.ingredient_name', 'ir.quantity')
    .where({ recipe_id })
}

function getInstructions(recipe_id) {
  return db('instructions as i')
    .join('recipes as r', 'i.recipe_id', 'r.id')
    .select('r.recipe_name', 'i.step', 'i.description')
    .where({ recipe_id })
}

// function getRecipeByIngredient(ingredient_id) {
//   return db('ingre-rec as ir')
//     .join('recipes as r', 'ir.recipe_id', 'r.id')
//     .join('ingredients as i', 'ir.ingredient_id', 'i.id')
//     .select('i.ingredient_name', 'r.recipe_name', 'r.id')
//     .where({ ingredient_id })
// }
