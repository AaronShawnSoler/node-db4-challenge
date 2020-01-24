
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {recipe_id: 1, ingredient_id: 5, quantity: 2.0},
        {recipe_id: 1, ingredient_id: 4, quantity: 0.75},
        {recipe_id: 1, ingredient_id: 2, quantity: 0.25},
        {recipe_id: 1, ingredient_id: 1, quantity: 0.5},
        {recipe_id: 2, ingredient_id: 1, quantity: 2.2},
        {recipe_id: 2, ingredient_id: 2, quantity: 2.5},
        {recipe_id: 2, ingredient_id: 3, quantity: 1.3},
        {recipe_id: 2, ingredient_id: 6, quantity: 1.4}
      ]);
    });
};
