const { nanoid } = require('nanoid');

let users = [];

const getAllUsers = () => {
    return users;
};

const getUserById = (id) => {
    return users.find((user) => user.id === id);
};

const saveUser = (user) => {
    const newUser = { ...user, id: nanoid() };
    users.push(newUser);

    return newUser;
};

const replaceUser = (id, modifiedUser) => {
    users = users.map((user) => {
        if (user.id === id) {
            return modifiedUser;
        }
        return user;
    });
};

const removeUser = (id) => {
    users = users.filter((user) => user.id !== id);
}

module.exports = {
    getAllUsers,
    getUserById,
    saveUser,
    replaceUser,
    removeUser,
};