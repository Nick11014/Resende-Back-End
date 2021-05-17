const express = require('express');
const routes = express.Router();

const auth = require("./middlewares/authentication")

const UserController = require("./controllers/UserController");
const UserValidator = require("./validators/UserValidator");

const CategoryController = require("./controllers/CategoryController");
const CategoryValidator = require("./validators/CategoryValidator");

const PerfilController = require("./controllers/PerfilController");
const PerfilValidator = require("./validators/PerfilValidator");

const SessionController = require("./controllers/SessionController")

//Session
routes.post("/login",SessionController.signIn);


//Users
routes.get('/users/:user_id',UserValidator.getById, UserController.getById);
routes.post('/users',UserValidator.create, UserController.create);
routes.put('/users/:user_id',UserValidator.update,  UserController.update);
routes.delete('/users/:user_id',UserValidator.delete, UserController.delete);

//Category
routes.post('/category',CategoryValidator.create, CategoryController.create);
routes.get('/category/:category_id',CategoryValidator.getById, CategoryController.getById);
routes.put('/category/:category_id',CategoryValidator.update, CategoryController.update);
routes.delete('/category/:category_id',CategoryValidator.delete, CategoryController.delete);

// Perfil
routes.post('/perfil', PerfilValidator.create, auth.authenticateToken, PerfilController.create);
routes.get('/perfil/:user_id',PerfilValidator.getByUser,auth.authenticateToken, PerfilController.getByUser);
routes.put('/perfil/:perfil_id',PerfilValidator.update,auth.authenticateToken, PerfilController.update);
routes.delete('/perfil/:perfil_id',PerfilValidator.delete,auth.authenticateToken, PerfilController.delete);

module.exports = routes;