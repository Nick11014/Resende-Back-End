const express = require("express");
const routes = express.Router();

const auth = require("./middlewares/authentication");

const UserController = require("./controllers/UserController");
const UserValidator = require("./validators/UserValidator");

const SessionController = require("./controllers/SessionController");

//Session
routes.post("/login", SessionController.signIn);

//Users
routes.get("/users/:user_id", UserValidator.getById, UserController.getById);
routes.post("/cadastro", UserValidator.create, UserController.create);
routes.put("/users/:user_id", UserValidator.update,auth.authenticateToken, UserController.update);
routes.delete("/users/:user_id", UserValidator.delete,auth.authenticateToken, UserController.delete);

module.exports = routes;
