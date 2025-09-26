const express = require('express') ;
const routes = express.Router();

const {basicServer , helloWorldAPI , postRequest , simpleArray, allUsers,getUserById , updateUser,deleteUser ,countUsers} = require('../controllers/controller');

routes.get('/', basicServer);

routes.get('/hello' , helloWorldAPI);

routes.post('/greet' , postRequest) ;

routes.post('/users' , simpleArray);

routes.get('/users', allUsers);

routes.get('/users/:id' , getUserById);

routes.put('/users/:id' , updateUser);

routes.delete('/users/:id' , deleteUser);

routes.get('/users/count' , countUsers);

module.exports = routes ;