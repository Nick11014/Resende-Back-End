const express = require('express');
const routes = express.Router();

const UserController = require("./controllers/UserController");
//const CategoryController = require("./controllers/CategoryController");
const PerfilController = require("./controllers/PerfilController");

//Users
routes.get('/users/:user_id', UserController.getById);
routes.post('/users',UserController.create);
routes.put('/users/:user_id', UserController.update);
routes.delete('/users/:user_id', UserController.delete);

//Category
//routes.get('/category/:category_id', CategoryController.getById);
//routes.post('/category',CategoryController.create);
//routes.put('/category/:category_id', CategoryController.update);
//routes.delete('/category/:category_id', CategoryController.delete);

// Perfil
routes.get('/perfil', PerfilController.getById);
routes.post('/perfil',PerfilController.create);
routes.put('/perfil/:perfil_id', PerfilController.update);
routes.delete('/perfil/:perfil_id', PerfilController.delete);

module.exports = routes;