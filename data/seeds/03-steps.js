
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, step_number: 1, instructions: 'butter pan', recipe_id: 2},
        {id: 2, step_number: 2, instructions: 'add pancake mix to bowl', recipe_id: 2},
        {id: 3, step_number: 3, instructions: 'add eggs to bowl', recipe_id: 2},
        {id: 4, step_number: 4, instructions: 'add milk to bowl', recipe_id: 2},
        {id: 5, step_number: 5, instructions: 'mix', recipe_id: 2},
        {id: 6, step_number: 6, instructions: 'cook on pan with low flame', recipe_id: 2},
        {id: 7, step_number: 1, instructions: 'boil pasta for 20 minutes', recipe_id: 1},
        {id: 8, step_number: 2, instructions: 'drain water', recipe_id: 1},
        {id: 9, step_number: 3, instructions: 'add milk', recipe_id: 1},
        {id: 10, step_number: 4, instructions: 'add cheese', recipe_id: 1},
        {id: 11, step_number: 5, instructions: 'mix', recipe_id: 1},
      ]);
    });
};
