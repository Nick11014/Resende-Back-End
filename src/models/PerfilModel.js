const { v4: uuidv4 } = require("uuid");
const connection = require("../database/connection");

module.exports = {
  async create(perfil) {
    const perfil_id = uuidv4();
    perfil.perfil_id = perfil_id;

    await connection("perfil").insert(perfil);
    return perfil_id;
  },

  async getById({ perfil_id }) {
    const result = await connection("perfil")
      .where({ perfil_id })
      .select("*")
      .first();
    return result;
  },

  async getByUserWithFilters(user_id, { categoryName }) {
    const filter = { "perfil.user_id": user_id };

    const result = await connection("perfil")
      .innerJoin(
        "perfil_category",
        "perfil.perfil_id",
        "perfil_category.perfil_id"
      )
      .innerJoin(
        "category",
        "category.category_id",
        "perfil_category.category_id"
      )
      .where({ filter })
      .select("*");
    return result;
  },

  async updateById(perfil_id, perfil) {
    const result = await connection("perfil")
      .where({ perfil_id })
      .update(perfil);
    return result;
  },

  async deleteById(perfil_id) {
    const result = await connection("perfil").where({ perfil_id }).delete();
    return result;
  },
};
