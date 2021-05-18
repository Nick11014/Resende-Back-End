exports.up = function (knex) {
  return knex.schema.createTable("perfil", function (table) {
    table.string("perfil_id").primary().notNullable();
    table.string("user_id").notNullable();
    table
      .foreign("user_id")
      .references("user_id")
      .inTable("user")
      .onDelete("cascade");
    table.string("NomeEmp").notNullable();
    table.string("aae").notNullable();
    table.string("tel").notNullable();
    table.string("end").notNullable();
    table.string("num").notNullable();
    table.string("comp").notNullable();
    table.string("desc").notNullable();
    table.string("cnpj").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("perfil");
};
