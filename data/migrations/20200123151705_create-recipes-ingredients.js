
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments('id');
        tbl.string('recipe')
            .unique()
            .notNullable();
    })
    .createTable('ingredients', tbl => {
        tbl.increments('id');
        tbl.string('ingredient')
            .unique()
            .notNullable();
    })
    .createTable('recipe_ingredients', tbl => {
        tbl.increments('id');
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes');
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients');
        tbl.float('quantity')
            .notNullable();
    })
    .createTable('steps', tbl => {
        tbl.increments('id');
        tbl.integer('step_number')
            .notNullable();
        tbl.string('instructions')
            .notNullable();
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('steps')
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients');
};
