import loginSchema from '../schemas/loginSchema.js';

export function validLogin(req, res, next) {

    const login = req.body;


    const isValidLogin = loginSchema.validate(login, { abortEarly: false });

    if (isValidLogin.error) {

        return res.sendStatus(409);

    }

    next();

}