exports.up = function (knex) {
  return knex.schema.createTable("perfil_category", function (table) {
    table.string("perfil_id").notNullable();
    table
      .foreign("perfil_id")
      .references("perfil_id")
      .inTable("perfil")
      .onDelete("cascade");

    table.integer("category_id").notNullable();
    table
      .foreign("category_id")
      .references("category_id")
      .inTable("category")
      .onDelete("cascade");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("perfil_category");
};
