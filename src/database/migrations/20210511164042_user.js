
exports.up = function(knex) {
    return knex.schema.createTable("user",function(table){
      table.string("user_id").primary().notNullable();
      table.string("email").notNullable();
      table.string("senha").notNullable();    
      table.string("firebase_id").notNullable(); 
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("user");
  };
