const { Router } = require('express');
const { userValidationMiddleware } = require('./user.validators');
const { getAllUsersHandler, getSingleUserHandler, createUserHandler, replaceUserHandler, deleteUserHandler } = require('./users.controller');

const usersRouter = Router();

usersRouter.get('/', getAllUsersHandler);
usersRouter.get('/:id', getSingleUserHandler);
usersRouter.post('/', userValidationMiddleware, createUserHandler);
usersRouter.put('/:id', userValidationMiddleware, replaceUserHandler);
usersRouter.delete('/:id', deleteUserHandler);

module.exports = {
    usersRouter,
};
