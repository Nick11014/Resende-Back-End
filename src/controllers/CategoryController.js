const CategoryModel = require("../models/CategoryModel");

module.exports = {
    async create(request,response){
        try{  
            const {category_id} = request.params;
            const category = request.body;
            const result = await CategoryModel.create(category);

            return response.status(200).json({category_id: result});

        } catch (error){
            console.warn("Category Create Failed:", error);

            return response.status(500).json({
                notification: " Internal server error while trying to create Category",
            });
        }
    },

    async getById(request,response){
        try{
            
        } catch (error){
             
        }
    },

    async update(request,response){
        try{
            const { perfil_id } = request.params;
            const newPerfil = request.body;

            await PerfilModel.updateById(perfil_id,newPerfil);



            return response.status(200).json({ notification: "Perfil Updated Sucessfully" });
        } catch (error){
            console.warn("Perfil Update Failed:", error);

            return response.status(500).json({
                notification: " Internal server error while trying to update Perfil",
            });  
        }
    },

    async delete(request,response){
        try{
            const { perfil_id } = request.params;
            const result = await PerfilModel.deleteById(perfil_id);

            if(result == 0){
                return response.status(400).json({notification: "Note id not found"})
            }

            return response
            .status(200)
            .json({ notification: "Perfil Deleted Sucessfully" });
        } catch (error){
            console.warn("Perfil Delete Failed:", error);

            return response.status(500).json({
                notification: " Internal server error while trying to delete Perfil",
            }); 
        }
    },

};