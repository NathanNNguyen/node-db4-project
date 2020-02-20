const express = require('express');

const recipeRouter = require('./data/router/recipe-router.js');

const server = express();

server.use(express.json());
server.use('/api/recipes', recipeRouter)


module.exports = server;