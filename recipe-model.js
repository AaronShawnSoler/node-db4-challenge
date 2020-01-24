const knex = require('knex');
const knexConfig = require('./knexfile');

const db = knex(knexConfig.development);

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes');
}

function getShoppingList(id) {
    return db('recipe_ingredients')
        .join('ingredients', 'recipe_ingredients.ingredient_id', 'ingredients.id')
        .where({ recipe_id: id });
}

function getInstructions(id) {
    return db('recipes')
        .join('steps', 'recipes.id', 'steps.recipe_id')
        .where({ recipe_id: id });
}