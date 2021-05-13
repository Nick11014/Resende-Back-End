const express = require('express');
const routes = express.Router();

const UserController = require("./controllers/UserController");
const CategoryController = require("./controllers/CategoryController");
const PerfilController = require("./controllers/PerfilController");

//Users
routes.get('/users/:user_id', UserController.getById);
routes.post('/users',UserController.create);
routes.put('/users/:user_id', UserController.update);
routes.delete('/users/:user_id', UserController.delete);

//Category
routes.post('/category',CategoryController.create);
routes.get('/category/:category_id', CategoryController.getById);
routes.put('/category/:category_id', CategoryController.update);
routes.delete('/category/:category_id', CategoryController.delete);

// Perfil
routes.post('/perfil',PerfilController.create);
routes.get('/perfil/:user_id', PerfilController.getByUser);
routes.put('/perfil/:perfil_id', PerfilController.update);
routes.delete('/perfil/:perfil_id', PerfilController.delete);

module.exports = routes;