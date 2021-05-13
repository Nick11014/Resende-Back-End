const CategoryModel = require("../models/CategoryModel");

module.exports = {
    async create(request,response){
        try{  
            const category = request.body;
            const result = await CategoryModel.create(category);

            return response.status(200).json(result);

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
            const { category_id } = request.params;
            const category = request.body;

            await CategoryModel.updateById(category_id,category);



            return response.status(200).json({ notification: "Category Updated Sucessfully" });
        } catch (error){
            console.warn("Category Update Failed:", error);

            return response.status(500).json({
                notification: " Internal server error while trying to update Category",
            });  
        }
    },

    async delete(request,response){
        try{
            const { category_id } = request.params;
            const result = await CategoryModel.deleteById(category_id);

            if(result == 0){
                return response.status(400).json({notification: "Category id not found"})
            }

            return response
            .status(200)
            .json({ notification: "Category Deleted Sucessfully" });
        } catch (error){
            console.warn("Category Delete Failed:", error);

            return response.status(500).json({
                notification: " Internal server error while trying to delete category",
            }); 
        }
    },

};