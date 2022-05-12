import inputProductSchema from "../schemas/inputProductSchema.js";

export function validInputProductSchema (req, res, next) {
    const input = req.body;
    const isValidInput = inputProductSchema.validate(input, { abortEarly: false });
    
    if (isValidInput.error) {
        return res.sendStatus(409);
    }
    next();
}