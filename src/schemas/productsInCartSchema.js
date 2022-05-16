import Joi from 'joi';

const productsInCartSchema = Joi.object({
    "userId": Joi.string().required(),
    "productId": Joi.string().required(),
    "action": Joi.string().valid('add', 'remove').required(),
    "qtt": Joi.number().integer().min(0).required(),
});

export default productsInCartSchema;