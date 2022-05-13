import Joi from 'joi';

const inputProductSchema = Joi.object({
	"name": Joi.string().required(),
	"description": Joi.string().required(),
	"small_description": Joi.string().required(),
	"price": Joi.number().required(),
	"img": Joi.string().required(),
    "category" : Joi.string().required()
});

export default inputProductSchema;