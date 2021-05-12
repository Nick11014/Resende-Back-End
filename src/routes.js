const express = require('express');
const routes = express.Router();

//200
//400 erro do cliente
//500
//status http
const grupo4 = [
    {
        id: 0,
        name: "Matheus Menezes",
    },
    {
        id: 1,
        name: "Ezequiel",
    },
    {
        id: 2,
        name: "Julia Castro",
    },
    {
        id: 3,
        name: "Julia Nagem",
    },
]



routes.get('/users', (req,res) => {
    const query = req.query;
    console.log(query);
    res.status(200).json(grupo4);
});

routes.post('/users', (req,res) => {
    const newUser = req.body;

    grupo4.push(newUser);

    res.status(200).json({message: "Criado com sucesso"});
});

routes.put('/users/:userId', (req,res) => {
    const { userId } = req.params
    const newFields = req.body;

    let selectedIndex;
    let selected = grupo4.find((user,index) => {
        selectedIndex = index;
        return user.id === userId;
    });
    selected = {...selected, ...newFields};
    
    grupo4[selectedIndex] = selected;
    res.status(200).json({message: "Criado com sucesso"});
});

module.exports = routes;