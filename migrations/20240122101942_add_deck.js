exports.up = function(knex) {
    return knex.schema.createTable('pack_maker', function(table) {
      table.increments('id').primary();
      table.string('creator').notNullable();
      table.string('packType').notNullable();
      table.string('packName').notNullable();
      table.string('packImageURL', 1500000).notNullable(); 
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('pack_maker');
  };
  