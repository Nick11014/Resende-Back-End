const connection = require("../database/connection");

module.exports ={
    async create(perfil){
        const perfil_id = uuidv4();
        perfil.perfil_id = perfil_id;
        const result = await connection("perfil").insert(perfil);
        return result;
},

    async getById({perfil_id}) {

        const result = await connection("perfil")
            .where({perfil_id})
            .select("*")
            .first();
        return  result;
},

    async updateByID(perfil_id, perfil){
        const result = await connection("perfil")
            .where({perfil_id})
            .update(perfil);
        return result;
},

    async deleteById(category_id){
        const result = await connection("perfil").where({perfil_id}).delete();  
        return result;
    },
};