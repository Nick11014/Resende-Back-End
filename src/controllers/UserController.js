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
            const result = await UserModel.getById(user_id);

            return response.status(200).json({result});
        } catch (error){
            console.warn("Get User Failed:", error);

            return response.status(500).json({
                notification: " Internal server error while trying to get User",
            });  
        }
    },

    async update(request,response){
        try{
            const {user_id} = request.params;
            const user = request.body;
            
            await UserModel.updateById(user_id,user);

            return response.status(200).json({ notification: "User Updated Sucessfully" });
        } catch (error){
            console.warn("User Update Failed:", error);

            return response.status(500).json({
                notification: " Internal server error while trying to update User",
            });  
        }
    },

    async delete(request,response){
        try{
            const {user_id} = request.params;
            const result = await UserModel.deleteById(user_id);

            if(result == 0){
                return response.status(400).json({notification: "User id not found"})
            }
            
            return response
            .status(200)
            .json({ notification: "User Deleted Sucessfully" });
        } catch (error){
            console.warn("User Delete Failed:", error);

            return response.status(500).json({
                notification: " Internal server error while trying to delete User",
            }); 
        }
    },

};