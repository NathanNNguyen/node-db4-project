const express = require('express');

const Recipe = require('./recipe-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.getRecipes();
    res.json(recipes)
  }
  catch (err) {
    res.status(500).json({ message: 'Cannot get recipes', err })
  }
});

router.get('/:recipe_id/list', async (req, res) => {
  const { recipe_id } = req.params;
  try {
    const list = await Recipe.getShoppingList(recipe_id);
    res.json(list);
  }
  catch (err) {
    res.status(500).json({ message: 'Cannot get a list of ingredients and quantity', err })
  }
})

router.get('/:recipe_id/instructions', async (req, res) => {
  const { recipe_id } = req.params;
  try {
    const instructions = await Recipe.getInstructions(recipe_id);
    res.json(instructions);
  }
  catch (err) {
    res.status(500).json({ message: 'Cannot get instructions', err })
  }
})



module.exports = router;