import signUpSchema from "../schemas/signUpSchema.js";

export function validSignUp (req, res, next) {
    const signUp = req.body;
    const isValidSignUp = signUpSchema.validate(signUp, { abortEarly: false });
    
    if (isValidSignUp.error) {
        return res.sendStatus(409);
    }
    next();
}