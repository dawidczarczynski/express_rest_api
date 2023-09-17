const { getAllUsers, getUserById, saveUser, replaceUser, removeUser } = require('./users.service');


const getAllUsersHandler = (req, res) => {
    const users = getAllUsers();
    
    return res
        .status(200)
        .send({ users });
};

const getSingleUserHandler = (req, res) => {
    const user = getUserById(req.params.id);

    if (!user) {
        return res
            .status(404)
            .send();
    }

    return res
        .status(200)
        .send({ user });
};

const createUserHandler = (req, res) => {
    const user = saveUser({ name: req.body.name });
 
    return res
        .status(201)
        .send({ user });
};

const replaceUserHandler = (req, res) => {
    replaceUser(req.params.id,req.body);
    
    return res
        .status(204)
        .send();
};

const deleteUserHandler = (req, res) => {
    removeUser(req.params.id);
    return res
        .status(204)
        .send();
};

module.exports = {
    getAllUsersHandler,
    getSingleUserHandler,
    createUserHandler,
    replaceUserHandler,
    deleteUserHandler,
};
