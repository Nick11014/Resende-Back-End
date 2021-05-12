const UserModel = require("../models/UserModel");

module.exports = {
    async create(request,response){
        try{  
            const {user_id} = request.params;
            const user = request.body;
            const result = await UserModel.create(user);

            return response.status(200).json({result});
        } catch (error){
            console.warn("User Creation Failed:", error);

            return response.status(500).json({
                notification: " Internal server error while trying to create User",
            });
        }
    },

    async getById(request,response){
        try{
            const {user_id} = request.params;
            const result = await User.create(user_id);

            return response.status(200).json({note_id: result});
        } catch (error){
            console.warn("User Create Failed:", error);

            return response.status(500).json({
                notification: " Internal server error while trying to get User",
            });  
        }
    },

    async update(request,response){
        try{
            const {perfil_id} = request.params;
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
            const {note_id} = request.params;
            const result = await PerfilModel.deleteById(Perfil_id);

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