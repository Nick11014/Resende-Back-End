exports.up = function (knex) {
  return knex.schema.createTable("user", function (table) {
    table.string("user_id").primary().notNullable();
    table.string("NomeEmp").notNullable();
    table.string("email").notNullable();
    table.string("firebase_id").notNullable();
    table.string("tipo").notNullable();
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
  return knex.schema.dropTable("user");
};
