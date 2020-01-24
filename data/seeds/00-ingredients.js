
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: '1', ingredient: 'butter'},
        {id: '2', ingredient: 'milk'},
        {id: '3', ingredient: 'eggs'},
        {id: '4', ingredient: 'cheese'},
        {id: '5', ingredient: 'pasta'},
        {id: '6', ingredient: 'pancake mix'},
      ]);
    });
};
