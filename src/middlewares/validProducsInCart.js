import productsInCartSchema from '../schemas/productsInCartSchema.js';

export function validProducsInCart(req, res, next) {

    const productToRefresh = req.body;



    const isValidProductToRefresh = productsInCartSchema.validate(productToRefresh, { abortEarly: false });

    if (isValidProductToRefresh.error) {

        return res.sendStatus(409);

    }

    //Aqui tem que validar o ID e token do usuário tb
    next();

}