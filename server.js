const express = require('express');

const db = require('./data/db-config.js');

const server = express();

server.use(express.json());

server.get('/api/recipes', async (req, res) => {
  try {
    const recipes = await db('recipes')
    res.json(recipes)
  }
  catch (err) {
    res.status(500).json({ message: 'Internal error', err })
  }
});

server.get('/api/instructions', async (req, res) => {
  try {
    const instructions = await db('instructions')
    res.json(instructions)
  }
  catch (err) {
    res.status(500).json({ message: 'Internal error', err })
  }
});

server.get('/api/ingredients', async (req, res) => {
  try {
    const ingredients = await db('ingredients')
    res.json(ingredients)
  }
  catch (err) {
    res.status(500).json({ message: 'Internal error', err })
  }
});

module.exports = server;