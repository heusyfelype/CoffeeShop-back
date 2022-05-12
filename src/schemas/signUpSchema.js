import Joi from 'joi';

const signUpSchema = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().email({minDomainSegments: 2, tlds: { allow: ['com', 'net'] }}).required(),
    password: Joi.string().required(),
    confirm_password: Joi.ref('password')
});

export default signUpSchema;