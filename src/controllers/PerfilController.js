const PerfilModel = require("../models/PerfilModel");

module.exports = {
    async create(request,response){
        try{  
            const {perfil_id} = request.params;
            const newPerfil = request.body;
            const result = await PerfilModel.create(newPerfil);

            return response.status(200).json({perfil_id: result});

        } catch (error){
            console.warn("Perfil Create Failed:", error);

            return response.status(500).json({
                notification: " Internal server error while trying to create Perfil",
            });
        }
    },

    async getByUser(request,response){
        try{  
            const {user_id} = request.params;
            const result = await PerfilModel.getByUserWithFilters(user_id, {});
    
            return response.status(200).json(result);
    
        } catch (error){
            console.warn("Perfil get Failed:", error);
    
            return response.status(500).json({
                notification: " Internal server error while trying to get Perfil by user",
            });
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