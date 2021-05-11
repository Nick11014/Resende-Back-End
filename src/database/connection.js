const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile')[environment];
console.log(configuration);

const connection = requite('knex')(configuration);
module.exports = connection;