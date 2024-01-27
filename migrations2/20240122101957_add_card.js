exports.up = function(knex) {
    return knex.schema.createTable('card_maker', function(table) {
      table.increments('id').primary();
      table.string('cardName').notNullable();
      table.integer('cardNumber').notNullable();
      table.string('cardImageURL', 1500000).notNullable();
    });
  };
  
  
  exports.down = function(knex) {
    return knex.schema.dropTable('card_maker')
  };
  
