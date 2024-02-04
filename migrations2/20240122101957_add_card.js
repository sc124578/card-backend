exports.up = function(knex) {
    return knex.schema.createTable('card_maker', function(table) {
      table.increments('id').primary();
      table.integer('packId').unsigned();
      table.string('cardName').notNullable();
      table.string('cardNumber').notNullable();
      table.string('cardImageURL', 1500000).notNullable();
      table.integer("isClicked").defaultTo(0);
    });
  };
  
  
  exports.down = function(knex) {
    return knex.schema.dropTable('card_maker')
  };
  
