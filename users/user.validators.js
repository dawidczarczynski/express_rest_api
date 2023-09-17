const Joi = require('joi');

const userSchema = Joi.object({
    id: Joi.string().alphanum().optional(),
    name: Joi.string().required(),
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