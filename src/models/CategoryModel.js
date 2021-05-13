const { v4: uuidv4 } = require ("uuid");
const connection = require("../database/connection");

module.exports ={
    async create(category){
        const category_id = uuidv4();
        category.category_id = category_id;

        await connection("category").insert(category);
        return category_id;
},

    async getById({category_id, user_id}) {

        const result = await connection("category")
            .where({category_id, user_id})
            .select("*");
        return  result;
},

    async updateByID(category_id, category){
        const result = await connection("category")
            .where({category_id})
            .update(category);
        return result;
},

    async deleteById(category_id){
        const result = await connection("category").where({category_id}).delete();  
        return result;
    },
};