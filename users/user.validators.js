const Joi = require('joi');

const userSchema = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    age: Joi.number().min(1).required(),
    email: Joi.string().required(),
    active: Joi.boolean().optional(),
});

const userValidationMiddleware = (req, res, next) => {
    const newUser = req.body;

    const { error } = userSchema.validate(newUser);
    
    if (error) {
        return res
            .status(400)
            .send({ error: error.message });
    }
    
    return next();
};

module.exports = {
    userValidationMiddleware,
};